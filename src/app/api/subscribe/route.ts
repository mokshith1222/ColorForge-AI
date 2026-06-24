import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Use the API key provided by the user
const resend = new Resend('re_b3Q6338k_7yv56DVCxR8NtJN7h7FMU4ZQ');

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send a welcome email to the subscriber directly since we don't have an audience ID setup.
    // We'll use the Resend onboarding domain as the 'from' address as it works for testing.
    const { data, error } = await resend.emails.send({
      from: 'ColorForge AI <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to ColorForge AI! 🎨',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #3b82f6;">Welcome to ColorForge AI!</h1>
          <p>Hi there,</p>
          <p>Thank you for subscribing to ColorForge AI. You are now part of our community!</p>
          <p>We're building the ultimate color ecosystem for designers, developers, and creators. We'll keep you updated with the latest color theory guides, new tools, and beautiful palettes.</p>
          <br/>
          <p>Stay creative,</p>
          <p><strong>The ColorForge AI Team</strong></p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
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
