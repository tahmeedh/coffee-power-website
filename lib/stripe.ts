import Stripe from "stripe";

// Lazy singleton — only instantiated at runtime, never at build time
let _stripe: Stripe | null = null;

function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2026-04-22.dahlia" as const,
    });
  }
  return _stripe;
}

export interface CheckoutLineItem {
  priceId: string;
  quantity: number;
  name?: string;
}

export async function createCheckoutSession(items: CheckoutLineItem[]) {
  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: items.map((item) => ({
      price: item.priceId,
      quantity: item.quantity,
    })),
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/shop`,
    allow_promotion_codes: true,
    shipping_address_collection: {
      allowed_countries: ["ES", "US", "GB", "DE", "FR", "IT", "PT"],
    },
  });
  return session;
}
