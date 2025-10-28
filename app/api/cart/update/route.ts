import { NextRequest, NextResponse } from "next/server";
import { updateCartQuantity } from "@/lib/cart";

export async function POST(req: NextRequest) {
  try {
    const { productId, quantity } = await req.json();
    await updateCartQuantity(productId, quantity);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar carrito" }, { status: 500 });
  }
}

