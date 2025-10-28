import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return new NextResponse("Missing stripe-signature header", { status: 400 });
  }

  const raw = await req.text();
  let event: Stripe.Event;

  try {
    if (!stripe) {
      console.error("Stripe no está configurado");
      return new NextResponse("Stripe no configurado", { status: 503 });
    }

    event = stripe.webhooks.constructEvent(
      raw,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || "whsec_test"
    );
  } catch (err: any) {
    console.error("Webhook signature verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log("✅ Pago completado:", session.id);
    console.log("Cliente:", session.customer_details);
    console.log("Monto:", session.amount_total);

    // Aquí podrías guardar la orden en una base de datos
    // Por ahora solo lo registramos en consola
  }

  return NextResponse.json({ received: true });
}

export const runtime = "nodejs";

