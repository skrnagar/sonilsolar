export function inr(n: number): string {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

export function inrLakh(n: number): string {
  if (n >= 100000) {
    const l = n / 100000;
    return `₹${l.toFixed(l >= 10 ? 1 : 2)} lakh`;
  }
  return inr(n);
}

export function waLink(text?: string): string {
  const num = process.env.NEXT_PUBLIC_WHATSAPP || "919340583565";
  const msg = encodeURIComponent(
    text || "Hello SONIL Solar, I would like a rooftop solar consultation."
  );
  return `https://wa.me/${num}?text=${msg}`;
}

export function telLink(): string {
  const t = process.env.NEXT_PUBLIC_PHONE || "+919340583565";
  return `tel:${t}`;
}

export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://127.0.0.1:43123";
}
