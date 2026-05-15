import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const priceId = formData.get("priceId") as string | null;

    if (!priceId) {
      return NextResponse.json({ error: "priceId is required" }, { status: 400 });
    }

    // Architecture is multi-line cart ready: items array
    const items = [{ priceId, quantity: 1 }];

    const session = await createCheckoutSession(items);

    if (!session.url) {
      return NextResponse.json({ error: "Could not create checkout session" }, { status: 500 });
    }

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (err) {
    console.error("[checkout]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// JSON body variant for future cart UI
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body as {
      items: Array<{ priceId: string; quantity: number }>;
    };

    if (!items?.length) {
      return NextResponse.json({ error: "items array is required" }, { status: 400 });
    }

    const session = await createCheckoutSession(items);
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("[checkout PUT]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
