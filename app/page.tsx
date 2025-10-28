import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { ProductGrid } from "@/components/product-grid";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Flower2, Heart, Sparkles, Users } from "lucide-react";

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

      {/* Nuestra Historia */}
      <Section id="historia" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-rose-100 rounded-full mb-6">
              <Heart className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Nuestra Historia
            </h2>
          </div>

          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-ink italic mb-6 leading-relaxed">
                  <strong>Flores Devolada y BluuM nacieron del deseo de crear experiencias florales
                  únicas y cercanas.</strong>
                </p>
                <p className="text-stone leading-relaxed mb-4">
                  Queríamos ofrecer a nuestros clientes una atención verdaderamente personalizada,
                  con decoraciones 100% adaptadas a sus gustos, sueños y metas para ese gran día
                  que tanto esperan.
                </p>
                <p className="text-stone leading-relaxed mb-4">
                  Al mismo tiempo, buscamos acompañarlos en lo cotidiano, con arreglos hermosos
                  para regalar, decorar o simplemente alegrar el día. También venimos de una familia
                  florista, y cada ramo que creamos lleva ese legado, ese amor por las flores y por
                  las personas. Porque en cada entrega, hay una historia que florece.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Quiénes Somos */}
      <Section id="quienes" className="bg-rose-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-white rounded-full mb-6">
              <Users className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              ¿Quiénes Somos?
            </h2>
          </div>

          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-stone leading-relaxed mb-4">
                  Iniciamos esta aventura en abril de 2014 en Monterrey, Nuevo León, con el apoyo
                  incondicional de mis hijas, que han sido inspiración y motor en cada paso.
                </p>
                <p className="text-stone leading-relaxed mb-4">
                  Flores Devolada y BluuM nacieron con el propósito de crear momentos, emociones y
                  detalles que hablaran por sí solos. Somos una empresa familiar con raíces
                  floristas, visión creativa y compromiso. Nos apasiona acompañar a nuestros
                  clientes en sus días especiales y en lo cotidiano.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Qué Hacemos */}
      <Section id="servicios" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-rose-100 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              ¿Qué Hacemos?
            </h2>
          </div>

          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-stone leading-relaxed mb-6">
                  Creamos experiencias florales para eventos, celebraciones y momentos cotidianos.
                  Decoramos iglesias, salones y espacios especiales de forma 100% personalizada,
                  cuidando cada detalle según tus gustos y ocasión.
                </p>
                <p className="text-stone leading-relaxed mb-6">
                  Y por otro lado diseñamos ramos que hablan por ti, acompañándolo con pasteles y/o
                  peluches que combinan perfecto con nuestras flores.
                </p>

                <div className="mt-8 text-center">
                  <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600 text-white">
                    <Link href="/contacto">Pide tu arreglo</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </main>
  );
}
