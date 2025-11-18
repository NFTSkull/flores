"use client";

import { useEffect, useState, useTransition } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/lib/cart";
import { Price } from "./price";
import { Trash2, ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function getTotalPrice(cart: { items: CartItem[] }): number {
  return cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

function getTotalItems(cart: { items: CartItem[] }): number {
  return cart.items.reduce((total, item) => total + item.quantity, 0);
}

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const [cart, setCart] = useState<{ items: CartItem[] }>({ items: [] });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!open) return;
    
    async function loadCart() {
      const response = await fetch("/api/cart");
      if (response.ok) {
        const data = await response.json();
        setCart(data);
      }
    }
    loadCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  async function removeItem(productId: string) {
    startTransition(async () => {
      await fetch("/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      loadCart();
    });
  }

  async function updateQuantity(productId: string, quantity: number) {
    startTransition(async () => {
      await fetch("/api/cart/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity }),
      });
      loadCart();
    });
  }

  const total = getTotalPrice(cart);
  const itemCount = getTotalItems(cart);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-rose-500" />
            Tu Carrito
          </SheetTitle>
          <SheetDescription>
            {itemCount === 0
              ? "Tu carrito está vacío"
              : `${itemCount} ${itemCount === 1 ? "artículo" : "artículos"}`}
          </SheetDescription>
        </SheetHeader>

        {cart.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingCart className="w-24 h-24 text-rose-200 mb-4" />
            <p className="text-stone mb-4">No hay productos en tu carrito</p>
            <Button onClick={() => onOpenChange(false)} asChild>
              <Link href="/tienda" className="bg-rose-500 hover:bg-rose-600">
                Explorar productos
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-4 border border-rose-100 rounded-lg bg-rose-50"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white">
                      <Image
                        src={item.product.images[0] || "/placeholder.jpg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-ink truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-stone mt-1">
                        <Price price={item.product.price} showCurrency />
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          disabled={isPending}
                          size="sm"
                          variant="outline"
                          className="h-7 w-7 p-0"
                        >
                          -
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          disabled={isPending}
                          size="sm"
                          variant="outline"
                          className="h-7 w-7 p-0"
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <Button
                      onClick={() => removeItem(item.product.id)}
                      disabled={isPending}
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-stone hover:text-rose-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col gap-4 sm:flex-col">
              <div className="w-full border-t border-rose-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-ink">Total:</span>
                  <Price
                    price={total}
                    className="text-2xl text-rose-500 font-display"
                  />
                </div>
              </div>

              <Button
                onClick={() => onOpenChange(false)}
                asChild
                className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                size="lg"
              >
                <Link href="/checkout">Ir al Checkout</Link>
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

