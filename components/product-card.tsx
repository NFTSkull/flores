"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { Price } from "./price";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useTransition } from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isPending, startTransition] = useTransition();

  const handleAddToCart = () => {
    if (onAddToCart) {
      startTransition(() => {
        onAddToCart(product.id);
      });
    }
  };

  return (
    <div className="group card bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/producto/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-rose-50">
          <Image
            src={product.images[0] || "/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-6">
        <Link href={`/producto/${product.slug}`}>
          <h3 className="text-xl font-display font-semibold text-ink mb-2 hover:text-rose-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-stone text-sm mb-4 line-clamp-2">{product.description}</p>
        </Link>

        <div className="flex items-center justify-between mt-4">
          <Price price={product.price} className="text-2xl text-rose-500" />

          <Button
            onClick={handleAddToCart}
            disabled={isPending}
            size="sm"
            className="bg-rose-500 hover:bg-rose-600 text-white"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
}

