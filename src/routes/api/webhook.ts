import { createFileRoute } from '@tanstack/react-router';


import { generateAccessToken } from '../../server/crypto';
import { storePurchase } from '../../server/store';

export const Route = createFileRoute('/api/webhook')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const payload = await request.json();
          
          const expectedToken = import.meta.env.VITE_PERFECTPAY_WEBHOOK_TOKEN || process.env.PERFECTPAY_WEBHOOK_TOKEN;
          if (expectedToken && payload.token !== expectedToken) {
            return new Response(JSON.stringify({ error: 'Invalid token' }), { status: 401 });
          }

          if (payload.sale_status_enum !== 2) {
            return new Response(JSON.stringify({ message: 'Ignored: Not approved' }), { status: 200 });
          }

          const productName = payload.product?.name || '';
          if (!productName.includes('JARVIS Elytron')) {
            return new Response(JSON.stringify({ message: 'Ignored: Not JARVIS product' }), { status: 200 });
          }

          const customer = payload.customer;
          if (!customer || !customer.email) {
            return new Response(JSON.stringify({ error: 'Missing customer email' }), { status: 400 });
          }

          const secret = import.meta.env.VITE_ACCESS_TOKEN_SECRET || process.env.ACCESS_TOKEN_SECRET || 'fallback_secret_for_dev';
          const saleCode = payload.code;
          const accessToken = generateAccessToken(customer.email, saleCode, secret);

          const hours = parseInt(import.meta.env.VITE_ACCESS_TOKEN_EXPIRY_HOURS || process.env.ACCESS_TOKEN_EXPIRY_HOURS || '72', 10);
          const expiresAt = Date.now() + hours * 60 * 60 * 1000;

          await storePurchase({
            email: customer.email,
            name: customer.full_name || 'Usuário',
            saleCode,
            productName,
            amount: payload.sale_amount,
            accessToken,
            createdAt: Date.now(),
            expiresAt
          });

          return new Response(JSON.stringify({ success: true }), { status: 200 });

        } catch (error) {
          console.error('Webhook error:', error);
          return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
        }
      }
    }
  }
});
