import { NextResponse } from 'next/server';
import { rateLimitByIp } from '@/lib/ratelimiting/limiter';
import { sanitizeUserInput } from '@/util/sanitize';

export async function POST(request) {
  try {
    // Rate limit check
    try {
      await rateLimitByIp({
        key: 'contact-form',
        limit: 5,
        window: 60 * 1000
      });
    } catch (error) {
      console.error('Rate limit error:', error);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    let values;
    try {
      values = await request.json();
    } catch (error) {
      console.error('JSON parsing error:', error);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!values.name || !values.email || !values.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check honeypot
    if (values.username) {
      console.warn('Honeypot triggered - potential spam');
      return NextResponse.json(
        { error: 'Form submission rejected' },
        { status: 400 }
      );
    }

    // Prepare sanitized data
    const { username, ...sanitizedValues } = {
      name: sanitizeUserInput(values.name),
      email: sanitizeUserInput(values.email),
      message: sanitizeUserInput(values.message),
      companyName: values.companyName
        ? sanitizeUserInput(values.companyName)
        : undefined,
      phoneNumber: values.phoneNumber
        ? sanitizeUserInput(values.phoneNumber)
        : undefined,
      agreeToTerms: values.agreeToTerms
    };

    // Log the request to Strapi for debugging
    console.log('Sending to Strapi:', {
      url: `${process.env.STRAPI_API_URL}/api/contacts`,
      data: sanitizedValues
    });

    // Add this right before the Strapi submission
    console.log('Environment check:', {
      STRAPI_API_URL: process.env.STRAPI_API_URL,
      hasToken: !!process.env.STRAPI_API_TOKEN
    });

    // Submit to Strapi
    const response = await fetch(`${process.env.STRAPI_API_URL}/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      },
      body: JSON.stringify({
        data: sanitizedValues
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      const errorDetails = {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        url: `${process.env.STRAPI_API_URL}/api/contacts`,
        requestBody: JSON.stringify({
          data: sanitizedValues
        })
      };
      console.error('Strapi error response:', errorDetails);
      throw new Error(`Strapi error: ${response.status} - ${errorText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact submission error:', {
      message: error.message,
      stack: error.stack
    });
    return NextResponse.json(
      {
        error: 'Failed to submit contact form',
        details:
          process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
