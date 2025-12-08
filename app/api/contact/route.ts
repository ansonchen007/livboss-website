import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, {count: number; resetTime: number}>();

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 3600000);

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
    
    // Rate limiting: 3 submissions per hour per IP
    const now = Date.now();
    const rateLimit = rateLimitStore.get(ip);
    
    if (rateLimit) {
      if (now < rateLimit.resetTime) {
        if (rateLimit.count >= 3) {
          return NextResponse.json(
            {error: 'Too many requests. Please try again later.'},
            {status: 429}
          );
        }
        rateLimit.count++;
      } else {
        // Reset after 1 hour
        rateLimitStore.set(ip, {count: 1, resetTime: now + 3600000});
      }
    } else {
      rateLimitStore.set(ip, {count: 1, resetTime: now + 3600000});
    }

    const body = await request.json();
    const {name, email, region, message} = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {error: 'Missing required fields'},
        {status: 400}
      );
    }

    // Input length validation (防止超长内容)
    if (name.length > 100 || email.length > 200 || message.length > 2000) {
      return NextResponse.json(
        {error: 'Input too long'},
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

    // Spam detection: check for suspicious patterns
    const spamPatterns = [
      /\b(viagra|cialis|porn|casino|lottery|crypto)\b/i,
      /(http|https):\/\/.*\.(ru|cn)$/i, // Suspicious domains
      /(.)\1{10,}/, // Repeated characters
    ];
    
    const combinedText = `${name} ${message}`;
    if (spamPatterns.some(pattern => pattern.test(combinedText))) {
      console.warn('Spam detected from IP:', ip);
      // Return success to avoid revealing spam detection
      return NextResponse.json(
        {success: true, message: 'Thank you for your message.'},
        {status: 200}
      );
    }

    // HTML email template for team notification
    const teamEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { border-bottom: 3px solid #D97706; padding-bottom: 20px; margin-bottom: 20px; }
            .header h1 { color: #4A3728; margin: 0; font-size: 24px; letter-spacing: 2px; }
            .header p { color: #8B7355; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; }
            .info-box { background-color: #F9F7F4; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .message-box { background-color: #FFFFFF; padding: 20px; border-radius: 8px; border: 1px solid #E5E5E5; white-space: pre-wrap; }
            .footer { border-top: 1px solid #E5E5E5; padding-top: 20px; margin-top: 30px; text-align: center; color: #8B7355; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>LIVBOSS</h1>
              <p>Liver Wellness</p>
            </div>
            <h2 style="color: #4A3728; font-size: 20px;">New Contact Form Submission</h2>
            <div class="info-box">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${region ? `<p><strong>Region:</strong> ${region}</p>` : ''}
            </div>
            <h3 style="color: #4A3728; font-size: 16px;">Message:</h3>
            <div class="message-box">${message}</div>
            <div class="footer">
              <p>This email was sent from the LivBoss website contact form</p>
              <p>www.livboss.com</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // HTML email template for auto-reply
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { border-bottom: 3px solid #D97706; padding-bottom: 20px; margin-bottom: 30px; }
            .header h1 { color: #4A3728; margin: 0; font-size: 28px; letter-spacing: 3px; }
            .header p { color: #8B7355; margin: 8px 0 0 0; font-size: 13px; letter-spacing: 4px; text-transform: uppercase; }
            .footer { border-top: 1px solid #E5E5E5; padding-top: 20px; margin-top: 40px; color: #8B7355; font-size: 13px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>LIVBOSS</h1>
              <p>Liver Wellness</p>
            </div>
            <p>Dear ${name},</p>
            <p>Thank you for contacting LivBoss. We have received your message and will get back to you within 24-48 hours.</p>
            <p>For urgent inquiries, please contact us via WhatsApp at +852 5199 7110.</p>
            <div class="footer">
              <p>Best regards,<br><strong>LivBoss Team</strong></p>
              <p>Email: hello@livboss.com<br>WhatsApp: +852 5199 7110<br>Website: www.livboss.com</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to LivBoss team
    const {data: teamEmailData, error: teamEmailError} = await resend.emails.send({
      from: 'LivBoss Contact Form <noreply@livboss.com>',
      to: ['hello@livboss.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: teamEmailHtml,
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
      html: autoReplyHtml,
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
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      apiKey: process.env.RESEND_API_KEY ? 'Set (length: ' + process.env.RESEND_API_KEY.length + ')' : 'Not set'
    });
    return NextResponse.json(
      {
        error: 'Failed to process contact form',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      {status: 500}
    );
  }
}
