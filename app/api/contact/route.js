import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const values = await request.json();

    const response = await fetch(`${process.env.STRAPI_API_URL}/api/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
    console.error('Contact submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}
