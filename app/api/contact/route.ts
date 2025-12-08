import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {Resend} from 'resend';
import {ContactEmailTemplate, ContactAutoReplyTemplate} from '@/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {name, email, region, message} = body;

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

    // Send email to LivBoss team
    const {data: teamEmailData, error: teamEmailError} = await resend.emails.send({
      from: 'LivBoss Contact Form <noreply@livboss.com>',
      to: ['hello@livboss.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      react: ContactEmailTemplate({name, email, region, message}),
    });

    if (teamEmailError) {
      console.error('Error sending email to team:', teamEmailError);
      return NextResponse.json(
        {error: 'Failed to send email'},
        {status: 500}
      );
    }

    // Send auto-reply to customer
    const {data: autoReplyData, error: autoReplyError} = await resend.emails.send({
      from: 'LivBoss <hello@livboss.com>',
      to: [email],
      subject: 'Thank you for contacting LivBoss',
      react: ContactAutoReplyTemplate({name}),
    });

    if (autoReplyError) {
      console.error('Error sending auto-reply:', autoReplyError);
      // Don't fail the request if auto-reply fails
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message. We will get back to you soon!',
        emailId: teamEmailData?.id,
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
