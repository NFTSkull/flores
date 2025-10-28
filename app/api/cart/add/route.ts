import { NextRequest, NextResponse } from "next/server";
import { addToCart } from "@/lib/cart";
import { products } from "@/lib/products";

export async function POST(req: NextRequest) {
  try {
    const { productId, quantity = 1 } = await req.json();

    const product = products.find((p) => p.id === productId);
    if (!product) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }

    await addToCart(product, quantity);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error al agregar al carrito" }, { status: 500 });
  }
}

