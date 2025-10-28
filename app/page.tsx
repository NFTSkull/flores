import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Flower2, Heart, Sparkles } from "lucide-react";

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main>
      <Hero />

      {/* Destacados */}
      <Section title="Productos Destacados" className="bg-white">
        <ProductGrid products={featuredProducts} />
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
            <Link href="/tienda">Ver todo el catálogo</Link>
          </Button>
        </div>
      </Section>

      {/* Editorial Cards */}
      <Section title="Conoce más" className="bg-rose-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/nuestra-historia">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-rose-100 rounded-full">
                    <Heart className="w-8 h-8 text-rose-500" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Nuestra Historia</h3>
                <p className="text-stone text-sm">
                  Conoce cómo comenzamos este sueño de crear experiencias florales únicas.
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/quienes-somos">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-rose-100 rounded-full">
                    <Flower2 className="w-8 h-8 text-rose-500" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Quiénes Somos</h3>
                <p className="text-stone text-sm">
                  Una empresa familiar con raíces floristas y visión creativa.
                </p>
              </CardContent>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/que-hacemos">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-rose-100 rounded-full">
                    <Sparkles className="w-8 h-8 text-rose-500" />
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">Qué Hacemos</h3>
                <p className="text-stone text-sm">
                  Experiencias florales para eventos y momentos especiales.
                </p>
              </CardContent>
            </Link>
          </Card>
        </div>
      </Section>
    </main>
  );
}
