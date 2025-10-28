import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function NuestraHistoriaPage() {
  return (
    <main>
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-rose-100 rounded-full mb-6">
              <Heart className="w-8 h-8 text-rose-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Nuestra Historia
            </h1>
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

          {/* Visual divider */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200 rounded-full"></div>
          </div>
        </div>
      </Section>
    </main>
  );
}

