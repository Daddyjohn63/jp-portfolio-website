import { NextResponse } from 'next/server';
import { rateLimitByIp } from '@/lib/ratelimiting/limiter';

export async function POST(request) {
  try {
    // Rate limit to 5 submissions per 60 seconds
    await rateLimitByIp({
      key: 'contact-form',
      limit: 5,
      window: 60 * 1000 // 60 seconds
    });

    const values = await request.json();
    const response = await fetch(`${process.env.STRAPI_API_URL}/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //'Strapi-Response-Format': 'v4',
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
      },
      body: JSON.stringify({
        data: values
      })
    });
    if (!response.ok) {
      throw new Error('Failed to submit to Strapi');
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    if (error.name === 'RateLimitError') {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
