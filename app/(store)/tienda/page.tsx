"use client";

import { ProductGrid } from "@/components/product-grid";
import { products, type ProductCategory } from "@/lib/products";
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";

const categories: { value: ProductCategory | null; label: string }[] = [
  { value: null, label: "Todos" },
  { value: "cumpleaños", label: "Cumpleaños" },
  { value: "ocasiones", label: "Ocasiones" },
  { value: "flores-y-plantas", label: "Flores y Plantas" },
  { value: "postres", label: "Postres" },
  { value: "personalizados", label: "Personalizados" },
  { value: "regalos", label: "Regalos" },
];

export default function TiendaPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

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

        {/* Buscador */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 py-6 text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone hover:text-ink"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Categorías */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge
              key={category.value || "all"}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm md:text-base"
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </Badge>
          ))}
        </div>

        {/* Resultados */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-stone">
              {filteredProducts.length === 0
                ? "No se encontraron productos"
                : `Se encontraron ${filteredProducts.length} producto${filteredProducts.length !== 1 ? "s" : ""}`}
            </p>
          </div>
        )}

        {/* Grid de productos */}
        <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone text-lg mb-4">
              {searchQuery
                ? "No se encontraron productos con tu búsqueda."
                : "No hay productos en esta categoría."}
            </p>
            <Button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery("");
              }}
              className="bg-rose-500 hover:bg-rose-600"
            >
              Ver todos los productos
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

