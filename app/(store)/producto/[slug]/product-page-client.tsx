"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductPageClientProps {
  productId: string;
}

export function ProductPageClient({ productId }: ProductPageClientProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      if (response.ok) {
        console.log("Producto agregado al carrito");
      }
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        onClick={handleAddToCart}
        disabled={isAdding}
        size="lg"
        className="flex-1 bg-rose-500 hover:bg-rose-600 text-white"
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        {isAdding ? "Agregando..." : "Agregar al carrito"}
      </Button>
    </div>
  );
}

