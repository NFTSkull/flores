"use client";

import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Product } from "@/lib/products";

const allTags = Array.from(new Set(products.flatMap((p) => p.tags)));

export default function TiendaPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProducts = selectedTag
    ? products.filter((p) => p.tags.includes(selectedTag))
    : products;

  const handleAddToCart = async (productId: string) => {
    try {
      const response = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      if (response.ok) {
        // TODO: Mostrar notificación de éxito
        console.log("Producto agregado al carrito");
      }
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">
            Nuestra Tienda
          </h1>
          <p className="text-xl text-stone max-w-2xl mx-auto">
            Explora nuestra colección de arreglos florales únicos
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Badge
            variant={!selectedTag ? "default" : "outline"}
            className="cursor-pointer px-4 py-2"
            onClick={() => setSelectedTag(null)}
          >
            Todos
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 capitalize"
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Grid de productos */}
        <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone text-lg">No se encontraron productos con este filtro.</p>
            <Button
              onClick={() => setSelectedTag(null)}
              className="mt-4 bg-rose-500 hover:bg-rose-600"
            >
              Ver todos los productos
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

