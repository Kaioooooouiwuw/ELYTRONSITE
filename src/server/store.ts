export interface PurchaseRecord {
  email: string;
  name: string;
  saleCode: string;
  productName: string;
  amount: number;
  accessToken: string;
  createdAt: number;
  expiresAt: number;
}

// In development, we use an in-memory map. In production on Cloudflare, we'll use KV.
// Note: KV binding needs to be passed in from the request context if using Cloudflare.
// For simplicity in this demo/setup, we'll implement the logic here assuming access to a KV namespace
// or falling back to a global map in dev mode.

const devStore = new Map<string, PurchaseRecord>();

export async function storePurchase(
  record: PurchaseRecord, 
  kvNamespace?: any
): Promise<void> {
  if (kvNamespace) {
    // We store by access token for quick validation
    await kvNamespace.put(`token:${record.accessToken}`, JSON.stringify(record));
    // And by sale code for deduplication
    await kvNamespace.put(`sale:${record.saleCode}`, JSON.stringify(record));
  } else {
    devStore.set(`token:${record.accessToken}`, record);
    devStore.set(`sale:${record.saleCode}`, record);
  }
}

export async function getPurchaseByToken(
  token: string, 
  kvNamespace?: any
): Promise<PurchaseRecord | null> {
  if (kvNamespace) {
    const data = await kvNamespace.get(`token:${token}`);
    return data ? JSON.parse(data) : null;
  } else {
    return devStore.get(`token:${token}`) || null;
  }
}
