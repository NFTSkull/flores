import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe no está configurado. Por favor, configura las variables de entorno." },
        { status: 503 }
      );
    }

    const { items } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "El carrito está vacío" }, { status: 400 });
    }

    const line_items = items.map((item: any) => ({
      price_data: {
        currency: "mxn",
        product_data: {
          name: item.product.name,
          description: item.product.description,
          images: item.product.images,
        },
        unit_amount: item.product.price, // ya está en centavos
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${process.env.SITE_URL || "http://localhost:3000"}/exito?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.SITE_URL || "http://localhost:3000"}/cancelado`,
      locale: "es",
      currency: "mxn",
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Error en checkout:", error);
    return NextResponse.json(
      { error: "Error al crear la sesión de pago" },
      { status: 500 }
    );
  }
}
