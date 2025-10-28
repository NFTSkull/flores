"use client";

import { useEffect, useState } from "react";
import { Price } from "@/components/price";
import { Button } from "@/components/ui/button";
import { CreditCard, ShoppingBag } from "lucide-react";
import { CartItem } from "@/lib/cart";
import { useRouter } from "next/navigation";

function getTotalPrice(cart: { items: CartItem[] }): number {
  return cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<{ items: CartItem[] }>({ items: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadCart();
  }, []);

  async function loadCart() {
    const response = await fetch("/api/cart");
    if (response.ok) {
      const data = await response.json();
      setCart(data);
    }
  }

  async function handleCheckout() {
    if (cart.items.length === 0) {
      router.push("/tienda");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart.items }),
      });

      if (response.ok) {
        const { url } = await response.json();
        if (url) {
          window.location.href = url;
        }
      }
    } catch (error) {
      console.error("Error en el checkout:", error);
      alert("Hubo un error al procesar el pago. Por favor intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  }

  const total = getTotalPrice(cart);

  if (cart.items.length === 0) {
    return (
      <main className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <ShoppingBag className="w-24 h-24 text-rose-200 mx-auto mb-4" />
          <h1 className="text-3xl font-display font-bold text-ink mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-stone mb-8">Agrega productos antes de proceder al checkout.</p>
          <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
            <a href="/tienda">Explorar productos</a>
          </Button>
        </div>
       </main>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-ink mb-8 text-center">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-6 border border-rose-100 rounded-lg bg-white"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-ink">{item.product.name}</h3>
                  <p className="text-sm text-stone mt-1">
                    Cantidad: {item.quantity} × <Price price={item.product.price} />
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-rose-500">
                    <Price price={item.product.price * item.quantity} />
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="p-6 border border-rose-100 rounded-lg bg-rose-50 sticky top-4">
              <h2 className="text-xl font-display font-bold text-ink mb-6">Resumen</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-stone">
                  <span>Subtotal</span>
                  <Price price={total} />
                </div>
                <div className="flex justify-between text-stone">
                  <span>Envío</span>
                  <span className="text-sm">Se calculará en el checkout</span>
                </div>
                <div className="border-t border-rose-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg text-ink">Total</span>
                    <Price price={total} className="text-2xl text-rose-500" />
                  </div>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={isLoading}
                size="lg"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                {isLoading ? "Procesando..." : "Proceder al pago"}
              </Button>

              <p className="text-xs text-stone text-center mt-4">
                🔒 Pago seguro procesado por Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

