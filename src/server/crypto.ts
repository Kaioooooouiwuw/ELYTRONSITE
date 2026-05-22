import { createHmac } from 'crypto';

export function generateAccessToken(email: string, saleCode: string, secret: string): string {
  const timestamp = Date.now();
  const data = `${email}:${saleCode}:${timestamp}`;
  const signature = createHmac('sha256', secret).update(data).digest('hex');
  
  // Format: base64(data) + '.' + signature
  const b64Data = Buffer.from(data).toString('base64');
  return `${b64Data}.${signature}`;
}

export function validateAccessTokenFormat(token: string, secret: string): { email: string; saleCode: string; timestamp: number } | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 2) return null;
    
    const [b64Data, signature] = parts;
    const data = Buffer.from(b64Data, 'base64').toString('utf8');
    
    const expectedSignature = createHmac('sha256', secret).update(data).digest('hex');
    if (signature !== expectedSignature) return null;
    
    const [email, saleCode, timestampStr] = data.split(':');
    const timestamp = parseInt(timestampStr, 10);
    
    return { email, saleCode, timestamp };
  } catch (error) {
    return null;
  }
}
