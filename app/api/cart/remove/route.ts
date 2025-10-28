import { NextRequest, NextResponse } from "next/server";
import { removeFromCart } from "@/lib/cart";

export async function POST(req: NextRequest) {
  try {
    const { productId } = await req.json();
    await removeFromCart(productId);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error al remover del carrito" }, { status: 500 });
  }
}

