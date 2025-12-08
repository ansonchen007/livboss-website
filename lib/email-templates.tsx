import {ReactElement} from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  region?: string;
  message: string;
}

export function ContactEmailTemplate({
  name,
  email,
  region,
  message,
}: ContactEmailTemplateProps): ReactElement {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
      {/* Header */}
      <div style={{borderBottom: '3px solid #D97706', paddingBottom: '20px', marginBottom: '20px'}}>
        <h1 style={{color: '#4A3728', margin: '0', fontSize: '24px', letterSpacing: '2px'}}>
          LIVBOSS
        </h1>
        <p style={{color: '#8B7355', margin: '5px 0 0 0', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase'}}>
          Liver Wellness
        </p>
      </div>

      {/* Title */}
      <h2 style={{color: '#4A3728', fontSize: '20px', marginBottom: '20px'}}>
        New Contact Form Submission
      </h2>

      {/* Contact Information */}
      <div style={{backgroundColor: '#F9F7F4', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <table style={{width: '100%', borderCollapse: 'collapse'}}>
          <tbody>
            <tr>
              <td style={{padding: '8px 0', color: '#6B5D52', fontSize: '14px', width: '100px'}}>
                <strong>Name:</strong>
              </td>
              <td style={{padding: '8px 0', color: '#2A2A2A', fontSize: '14px'}}>
                {name}
              </td>
            </tr>
            <tr>
              <td style={{padding: '8px 0', color: '#6B5D52', fontSize: '14px'}}>
                <strong>Email:</strong>
              </td>
              <td style={{padding: '8px 0', color: '#2A2A2A', fontSize: '14px'}}>
                <a href={`mailto:${email}`} style={{color: '#D97706', textDecoration: 'none'}}>
                  {email}
                </a>
              </td>
            </tr>
            {region && (
              <tr>
                <td style={{padding: '8px 0', color: '#6B5D52', fontSize: '14px'}}>
                  <strong>Region:</strong>
                </td>
                <td style={{padding: '8px 0', color: '#2A2A2A', fontSize: '14px'}}>
                  {region}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Message */}
      <div style={{marginBottom: '30px'}}>
        <h3 style={{color: '#4A3728', fontSize: '16px', marginBottom: '10px'}}>Message:</h3>
        <div style={{
          backgroundColor: '#FFFFFF', 
          padding: '20px', 
          borderRadius: '8px', 
          border: '1px solid #E5E5E5',
          whiteSpace: 'pre-wrap',
          color: '#2A2A2A',
          fontSize: '14px',
          lineHeight: '1.6'
        }}>
          {message}
        </div>
      </div>

      {/* Footer */}
      <div style={{borderTop: '1px solid #E5E5E5', paddingTop: '20px', marginTop: '30px'}}>
        <p style={{color: '#8B7355', fontSize: '12px', margin: '0', textAlign: 'center'}}>
          This email was sent from the LivBoss website contact form
        </p>
        <p style={{color: '#8B7355', fontSize: '12px', margin: '5px 0 0 0', textAlign: 'center'}}>
          <a href="https://www.livboss.com" style={{color: '#D97706', textDecoration: 'none'}}>
            www.livboss.com
          </a>
        </p>
      </div>
    </div>
  );
}

// Auto-reply template for customer
export function ContactAutoReplyTemplate({name}: {name: string}): ReactElement {
  return (
    <div style={{fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
      {/* Header */}
      <div style={{borderBottom: '3px solid #D97706', paddingBottom: '20px', marginBottom: '30px'}}>
        <h1 style={{color: '#4A3728', margin: '0', fontSize: '28px', letterSpacing: '3px'}}>
          LIVBOSS
        </h1>
        <p style={{color: '#8B7355', margin: '8px 0 0 0', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase'}}>
          Liver Wellness
        </p>
      </div>

      {/* Content */}
      <p style={{color: '#2A2A2A', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px'}}>
        Dear {name},
      </p>

      <p style={{color: '#2A2A2A', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px'}}>
        Thank you for contacting LivBoss. We have received your message and will get back to you within 24-48 hours.
      </p>

      <p style={{color: '#2A2A2A', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px'}}>
        For urgent inquiries, please contact us via WhatsApp at +852 5199 7110.
      </p>

      {/* CTA */}
      <div style={{textAlign: 'center', margin: '40px 0'}}>
        <a 
          href="https://www.livboss.com" 
          style={{
            backgroundColor: '#D97706',
            color: '#FFFFFF',
            padding: '14px 32px',
            textDecoration: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600',
            display: 'inline-block',
            letterSpacing: '1px'
          }}
        >
          Visit Our Website
        </a>
      </div>

      {/* Footer */}
      <div style={{borderTop: '1px solid #E5E5E5', paddingTop: '20px', marginTop: '40px'}}>
        <p style={{color: '#8B7355', fontSize: '13px', lineHeight: '1.6', margin: '0'}}>
          Best regards,<br />
          <strong>LivBoss Team</strong>
        </p>
        <p style={{color: '#8B7355', fontSize: '12px', margin: '15px 0 0 0'}}>
          Email: hello@livboss.com<br />
          WhatsApp: +852 5199 7110<br />
          Website: <a href="https://www.livboss.com" style={{color: '#D97706', textDecoration: 'none'}}>www.livboss.com</a>
        </p>
      </div>
    </div>
  );
}
