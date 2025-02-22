import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';
const OAuth2 = google.auth.OAuth2;
const createTransporter = async () => {
  try {
    const oauth2Client = new OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
    );
    oauth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN
    });
    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          console.error('Error getting access token:', err);
          reject(new Error(`Failed to create access token: ${err.message}`));
        }
        resolve(token);
      });
    });
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken
      }
    });
    // Verify transporter
    await transporter.verify();

    return transporter;
  } catch (error) {
    console.error('Error creating transporter:', error);
    throw error;
  }
};

export async function POST(request) {
  try {
    // Verify webhook secret
    const secret = request.headers.get('x-webhook-secret');
    if (!secret || secret !== process.env.WEBHOOK_SECRET) {
      console.error('Invalid webhook secret');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const payload = await request.json();

    // Validate payload
    if (!payload || !payload.entry) {
      console.error('Invalid payload structure');
      return NextResponse.json(
        { error: 'Invalid payload structure' },
        { status: 400 }
      );
    }
    const contactData = payload.entry;
    // Validate required fields
    if (!contactData.email || !contactData.name) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    // Create transporter with OAuth2
    const transporter = await createTransporter();
    // Send emails in parallel
    await Promise.all([
      // User confirmation
      transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME}" <${process.env.GMAIL_USER}>`,
        to: contactData.email,
        subject: 'Thank you for contacting Web and Prosper',
        html: `
          <div style="background-color: #f6f6f6; padding: 20px;">
            <div style="background-color: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h1 style=" color: #fff; padding: 5px; font-size: 28px; font-weight: 600; margin-bottom: 25px; background: linear-gradient(to right, #9333ea, #60a5fa, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Web and Prosper</h1>
              <h2 style="color: #333; font-family: Arial, sans-serif; margin-bottom: 20px;">Thank You for Reaching Out!</h2>
              <p style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 15px;">Dear ${contactData.name},</p>
              <p style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 15px;">Thank you for contacting Web and Prosper. I have received your message and I will get back to you within 24-48 hours.</p>
              <p style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 15px;">In the meantime, feel free to:</p>
              <ul style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 25px;">
                <li>Visit my <a href="${process.env.WEBSITE_URL}" style="color: #9333ea; text-decoration: none;">website</a></li>
                <li>Follow me on <a href="${process.env.LINKEDIN_URL}" style="color: #9333ea; text-decoration: none;">LinkedIn</a></li>
             
              </ul>
              <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 20px;">
                <p style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; margin-bottom: 5px;">Best regards,</p>
                <p style="color: #333; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; margin-bottom: 5px;">${process.env.SMTP_FROM_NAME}</p>
              </div>
            </div>
          </div>
        `
      }),
      // Admin notification
      transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME}" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: 'New Contact Form Submission',
        html: `
         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${contactData.name}</p>
           ${
             contactData.companyName
               ? `<p><strong>Company:</strong> ${contactData.companyName}</p>`
               : ''
           }
           <p><strong>Email:</strong> ${contactData.email}</p>
           ${
             contactData.phoneNumber
               ? `<p><strong>Phone:</strong> ${contactData.phoneNumber}</p>`
               : ''
           }
           <p><strong>Message:</strong></p>
           <p>${contactData.message}</p>
         </div>
       `
      })
    ]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}
