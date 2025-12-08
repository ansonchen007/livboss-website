import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {name, email, subject, message} = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {error: 'Missing required fields'},
        {status: 400}
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {error: 'Invalid email address'},
        {status: 400}
      );
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, log the contact form submission
    console.log('Contact form submission:', {
      name,
      email,
      subject: subject || 'No subject',
      message,
      timestamp: new Date().toISOString(),
    });

    // In production, you would send an email here:
    // await sendEmail({
    //   to: 'hello@livboss.com',
    //   from: email,
    //   subject: subject || 'Contact Form Submission',
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
      },
      {status: 200}
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {error: 'Failed to process contact form'},
      {status: 500}
    );
  }
}
