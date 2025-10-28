import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sparkles } from "lucide-react";

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main>
      <Hero />

      {/* Nuestra Historia */}
      <Section className="bg-rose-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-rose-100 rounded-full">
              <Heart className="w-6 h-6 text-rose-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink">Nuestra Historia</h2>
          </div>
          <div className="space-y-4 text-lg text-stone max-w-3xl">
            <p className="font-medium text-ink">
              Flores Devolada y BluuM nacieron del deseo de crear experiencias florales únicas y cercanas.
            </p>
            <p>
              Queríamos ofrecer a nuestros clientes una atención verdaderamente personalizada, con decoraciones 100% adaptadas a sus gustos, sueños y metas para ese gran día que tanto esperan.
            </p>
            <p>
              Al mismo tiempo, buscamos acompañarlos en lo cotidiano, con arreglos hermosos para regalar, decorar o simplemente alegrar el día. También venimos de una familia florista, y cada ramo que creamos lleva ese legado, ese amor por las flores y por las personas. Porque en cada entrega, hay una historia que florece.
            </p>
          </div>
        </div>
      </Section>

      {/* Quiénes Somos */}
      <Section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-rose-100 rounded-full">
              <Users className="w-6 h-6 text-rose-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink">¿Quiénes Somos?</h2>
          </div>
          <div className="space-y-4 text-lg text-stone max-w-3xl">
            <p>
              Iniciamos esta aventura en abril de 2014 en Monterrey, Nuevo León, con el apoyo incondicional de mis hijas, que han sido inspiración y motor en cada paso.
            </p>
            <p>
              Flores Devolada y BluuM nacieron con el propósito de crear momentos, emociones y detalles que hablaran por sí solos. Somos una empresa familiar con raíces floristas, visión creativa y compromiso. Nos apasiona acompañar a nuestros clientes en sus días especiales y en lo cotidiano.
            </p>
          </div>
        </div>
      </Section>

      {/* Qué Hacemos */}
      <Section className="bg-rose-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-rose-100 rounded-full">
              <Sparkles className="w-6 h-6 text-rose-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink">¿Qué Hacemos?</h2>
          </div>
          <div className="space-y-4 text-lg text-stone max-w-3xl">
            <p>
              Creamos experiencias florales para eventos, celebraciones y momentos cotidianos. Decoramos iglesias, salones y espacios especiales de forma 100% personalizada, cuidando cada detalle según tus gustos y ocasión.
            </p>
            <p>
              Y por otro lado diseñamos ramos que hablan por ti, acompañándolo con pasteles y/o peluches que combinan perfecto con nuestras flores.
            </p>
            <div className="pt-6">
              <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600 text-white">
                <Link href="/contacto">Pide tu arreglo</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Destacados */}
      <Section title="Productos Destacados" className="bg-white py-16">
        <ProductGrid products={featuredProducts} />
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
            <Link href="/tienda">Ver todo el catálogo</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
