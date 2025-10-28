"use client";

import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Price } from "@/components/price";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/product-card";

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
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

  const suggestedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/tienda">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a la tienda
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Imágenes */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-rose-50">
            <Image
              src={product.images[0] || "/placeholder.jpg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Información */}
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">
              {product.name}
            </h1>

            <div className="mb-6">
              <Price price={product.price} className="text-4xl text-rose-500" />
            </div>

            <p className="text-lg text-stone mb-8 leading-relaxed">{product.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm capitalize"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Productos sugeridos */}
        {suggestedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-display font-bold text-ink mb-8">
              También te puede interesar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

