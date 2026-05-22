import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from "@tanstack/react-start";
import { AccessPortal } from "@/components/elytron/AccessPortal";
import { AccessDenied } from "@/components/elytron/AccessDenied";


// Server function to validate token securely
const validateTokenFn = createServerFn({ method: "GET" })
  .handler(async (ctx: { data: { token: string } }) => {
    const token = ctx.data?.token;
    
    if (!token) return { valid: false };

    // Dynamically import server utilities to prevent Vite from bundling Node.js modules into the client
    const { validateAccessTokenFormat } = await import("@/server/crypto");
    const { getPurchaseByToken } = await import("@/server/store");

    const secret = process.env.ACCESS_TOKEN_SECRET || "fallback_secret_for_dev";
    
    // 1. Basic format validation
    const parsed = validateAccessTokenFormat(token, secret);
    if (!parsed) return { valid: false };

    // 2. Fetch from store
    const purchase = await getPurchaseByToken(token);
    if (!purchase) return { valid: false };

    // 3. Check expiration
    if (Date.now() > purchase.expiresAt) {
      return { valid: false, expired: true };
    }

    return { 
      valid: true, 
      name: purchase.name,
      expiresAt: purchase.expiresAt
    };
  });

export const Route = createFileRoute("/acesso")({
  validateSearch: (search: Record<string, unknown>) => {
    return {
      token: (search.token as string) || "",
    };
  },
  loader: async ({ deps: { token } }) => {
    const result = await validateTokenFn({ data: { token } });
    return result;
  },
  component: AcessoPage,
});

function AcessoPage() {
  const result = Route.useLoaderData();

  if (!result.valid) {
    return <AccessDenied />;
  }

  return <AccessPortal name={result.name!} expiresAt={result.expiresAt!} />;
}
