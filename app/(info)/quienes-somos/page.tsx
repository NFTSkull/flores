import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export default function QuienesSomosPage() {
  return (
    <main>
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-rose-100 rounded-full mb-6">
              <Users className="w-8 h-8 text-rose-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              ¿Quiénes Somos?
            </h1>
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
                  clientes en sus en sus días especiales y en lo cotidiano.
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

