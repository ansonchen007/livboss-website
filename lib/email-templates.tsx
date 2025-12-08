import * as React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from '@react-email/components';

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
}: ContactEmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Body style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5'}}>
        <Container style={{maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
          {/* Header */}
          <Section style={{borderBottom: '3px solid #D97706', paddingBottom: '20px', marginBottom: '20px'}}>
            <Heading style={{color: '#4A3728', margin: '0', fontSize: '24px', letterSpacing: '2px'}}>
              LIVBOSS
            </Heading>
            <Text style={{color: '#8B7355', margin: '5px 0 0 0', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase'}}>
              Liver Wellness
            </Text>
          </Section>

          {/* Title */}
          <Heading as="h2" style={{color: '#4A3728', fontSize: '20px', marginBottom: '20px'}}>
            New Contact Form Submission
          </Heading>

          {/* Contact Information */}
          <Section style={{backgroundColor: '#F9F7F4', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
            <Text style={{margin: '8px 0', color: '#2A2A2A', fontSize: '14px'}}>
              <strong style={{color: '#6B5D52'}}>Name:</strong> {name}
            </Text>
            <Text style={{margin: '8px 0', color: '#2A2A2A', fontSize: '14px'}}>
              <strong style={{color: '#6B5D52'}}>Email:</strong> {email}
            </Text>
            {region && (
              <Text style={{margin: '8px 0', color: '#2A2A2A', fontSize: '14px'}}>
                <strong style={{color: '#6B5D52'}}>Region:</strong> {region}
              </Text>
            )}
          </Section>

          {/* Message */}
          <Section style={{marginBottom: '30px'}}>
            <Heading as="h3" style={{color: '#4A3728', fontSize: '16px', marginBottom: '10px'}}>
              Message:
            </Heading>
            <Text style={{
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
            </Text>
          </Section>

          {/* Footer */}
          <Hr style={{borderColor: '#E5E5E5', margin: '30px 0 20px 0'}} />
          <Text style={{color: '#8B7355', fontSize: '12px', textAlign: 'center'}}>
            This email was sent from the LivBoss website contact form
          </Text>
          <Text style={{color: '#8B7355', fontSize: '12px', textAlign: 'center'}}>
            www.livboss.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Auto-reply template for customer
export function ContactAutoReplyTemplate({name}: {name: string}) {
  return (
    <Html>
      <Head />
      <Body style={{fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5'}}>
        <Container style={{maxWidth: '600px', margin: '0 auto', padding: '20px'}}>
          {/* Header */}
          <Section style={{borderBottom: '3px solid #D97706', paddingBottom: '20px', marginBottom: '30px'}}>
            <Heading style={{color: '#4A3728', margin: '0', fontSize: '28px', letterSpacing: '3px'}}>
              LIVBOSS
            </Heading>
            <Text style={{color: '#8B7355', margin: '8px 0 0 0', fontSize: '13px', letterSpacing: '4px', textTransform: 'uppercase'}}>
              Liver Wellness
            </Text>
          </Section>

          {/* Content */}
          <Text style={{color: '#2A2A2A', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px'}}>
            Dear {name},
          </Text>

          <Text style={{color: '#2A2A2A', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px'}}>
            Thank you for contacting LivBoss. We have received your message and will get back to you within 24-48 hours.
          </Text>

          <Text style={{color: '#2A2A2A', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px'}}>
            For urgent inquiries, please contact us via WhatsApp at +852 5199 7110.
          </Text>

          {/* Footer */}
          <Hr style={{borderColor: '#E5E5E5', margin: '40px 0 20px 0'}} />
          <Text style={{color: '#8B7355', fontSize: '13px', lineHeight: '1.6', margin: '0'}}>
            Best regards,<br />
            <strong>LivBoss Team</strong>
          </Text>
          <Text style={{color: '#8B7355', fontSize: '12px', margin: '15px 0 0 0'}}>
            Email: hello@livboss.com<br />
            WhatsApp: +852 5199 7110<br />
            Website: www.livboss.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

