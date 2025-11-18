"use client";

import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Flower2, Gift, Calendar, AlertCircle } from "lucide-react";

export default function PoliticasPage() {
  return (
    <main>
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-rose-100 rounded-full mb-6">
              <AlertCircle className="w-8 h-8 text-rose-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Políticas y Términos
            </h1>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Conoce nuestras políticas de sustitución y pedidos anticipados
            </p>
          </div>

          {/* Política de Sustitución de Flores */}
          <Card className="mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Flower2 className="w-6 h-6 text-rose-500" />
                <h2 className="text-3xl font-display font-bold text-ink">
                  Sustitución de Flores
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-stone">
                <p className="leading-relaxed mb-4">
                  Los arreglos son únicos y personalizados, por lo que puede llegar a tener cierta
                  variaciones. En algunos casos, los floristas pueden hacer pequeños cambios siempre
                  y cuando el arreglo final sea de igual o mayor valor.
                </p>
                <p className="leading-relaxed font-semibold text-ink">
                  Las rosas o flores primarias del arreglo nunca serán sustituidas sin tu
                  autorización.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Política de Sustitución de Globos */}
          <Card className="mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-6 h-6 text-rose-500" />
                <h2 className="text-3xl font-display font-bold text-ink">
                  Sustitución de Globos
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-stone">
                <p className="leading-relaxed mb-4">
                  Los modelos de globos varían constantemente, por lo cuál podemos garantizar que
                  será entregado de acuerdo a la descripción del producto. Es decir se enviará un
                  globo de valor equivalente con la misma medida.
                </p>
                <p className="leading-relaxed">
                  Los globos de helio tienen una duración de 48 horas, pero el ambiente y clima
                  influyen con su durabilidad.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Política de Sustitución de Peluches */}
          <Card className="mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="w-6 h-6 text-rose-500" />
                <h2 className="text-3xl font-display font-bold text-ink">
                  Sustitución de Peluches
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-stone">
                <p className="leading-relaxed">
                  Los modelos pueden varias de acuerdo a la disponibilidad, si el peluche que
                  seleccionaste se agotó, te contactaremos para que selecciones una de las
                  alternativas de peluches disponibles.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Pedidos Anticipados */}
          <Card className="mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-rose-500" />
                <h2 className="text-3xl font-display font-bold text-ink">
                  ¿Puedo hacer mi pedido con anticipación?
                </h2>
              </div>
              <div className="prose prose-lg max-w-none text-stone">
                <p className="leading-relaxed mb-4">
                  Si puedes programar tu pedido incluso meses de anticipación.
                </p>
                <p className="leading-relaxed">
                  Solo durante &quot;temporadas altas&quot; como &quot;San Valentin, Día de las Madres o Día del
                  Padre&quot;, podría haber restricciones del calendario hasta que la fecha se acerque
                  más.
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

