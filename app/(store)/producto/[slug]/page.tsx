import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { ProductPageClient } from "./product-page-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { Price } from "@/components/price";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

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

            <ProductPageClient productId={product.id} />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
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
