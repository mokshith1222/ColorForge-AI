import { NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY || '';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send a welcome email to the subscriber using Brevo
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: { 
          name: 'ColorForge AI', 
          email: 'hello@colorforge.ai' 
        },
        to: [
          { email: email }
        ],
        subject: 'Welcome to ColorForge AI! 🎨',
        htmlContent: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #3b82f6;">Welcome to ColorForge AI!</h1>
            <p>Hi there,</p>
            <p>Thank you for subscribing to ColorForge AI. You are now part of our community!</p>
            <p>We're building the ultimate color ecosystem for designers, developers, and creators. We'll keep you updated with the latest color theory guides, new tools, and beautiful palettes.</p>
            <br/>
            <p>Stay creative,</p>
            <p><strong>The ColorForge AI Team</strong></p>
          </div>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Brevo error:', data);
      return NextResponse.json({ error: data.message || 'Failed to send email' }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while subscribing.' },
      { status: 500 }
    );
  }
}
