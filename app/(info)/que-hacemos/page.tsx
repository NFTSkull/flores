"use client";

import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Gift, Flower2, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function QueHacemosPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main>
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-rose-100 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-rose-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              ¿Qué hacemos?
            </h1>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Creamos experiencias florales únicas para cada ocasión especial
            </p>
          </div>

          {/* Servicios de BluumMTY */}
          <Card className="mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Flower2 className="w-6 h-6 text-rose-500" />
                <h2 className="text-3xl font-display font-bold text-ink">
                  Servicios de BluumMTY
                </h2>
              </div>

              <div className="space-y-8">
                {/* Arreglos florales personalizados */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-rose-500" />
                    <h3 className="text-xl font-semibold text-ink">
                      💐 Arreglos florales personalizados
                    </h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-stone ml-7">
                    <li>
                      Para cumpleaños, aniversarios, agradecimientos, condolencias y &quot;solo porque sí&quot;
                    </li>
                    <li>
                      Estilos romántico, alegre, elegante, minimalista y temático
                    </li>
                  </ul>
                </div>

                {/* Ramos de novia y decoración */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-rose-500" />
                    <h3 className="text-xl font-semibold text-ink">
                      👰 Ramos de novia y decoración floral para eventos
                    </h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-stone ml-7">
                    <li>Bodas, XV años, bautizos, graduaciones, baby showers</li>
                    <li>Centros de mesa, altares, caminos florales, boutonnières</li>
                  </ul>
                </div>

                {/* Complementos */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Gift className="w-5 h-5 text-rose-500" />
                    <h3 className="text-xl font-semibold text-ink">
                      🎁 Complementos para regalar
                    </h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-stone ml-7">
                    <li>Canastas frutales, pasteles, galletas, peluches, globos</li>
                    <li>Combos personalizados para hombres y mujeres</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Servicios de Flores Devolada */}
          <Card className="mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Flower2 className="w-6 h-6 text-rose-500" />
                <h2 className="text-3xl font-display font-bold text-ink">
                  Servicios de Flores Devolada
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-ink mb-4">
                    Decoración floral personalizada para:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-stone">
                    <div>• Bodas</div>
                    <div>• XV años</div>
                    <div>• Bautizos</div>
                    <div>• Baby showers</div>
                    <div>• Graduaciones</div>
                    <div>• Aniversarios</div>
                    <div>• Eventos corporativos</div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-ink mb-4">
                    🎨 Elementos que ofrecemos:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-stone ml-7">
                    <li>Ramos de xv años, novia y boutonnières</li>
                    <li>Centros de mesa</li>
                    <li>Caminos florales y altares</li>
                    <li>Detalles florales para mesas de dulces, regalos o bienvenida</li>
                    <li>Arreglos para entrada, mesa principal y photo spots</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white mr-4 mb-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Cotiza tu arreglo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Cotiza tu arreglo personalizado</DialogTitle>
                  <DialogDescription>
                    Llena este formulario y te contactaremos pronto
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                  <div>
                    <label className="text-sm font-medium">Tipo de arreglo</label>
                    <Input placeholder="Ej: Ramo de rosas, Centro de mesa" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Fecha de entrega</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Zona de entrega</label>
                    <Input placeholder="Monterrey, Nuevo León" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Mensaje en tarjeta (opcional)</label>
                    <Input placeholder="Déjanos un mensaje especial" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Contacto</label>
                    <Input placeholder="Teléfono o WhatsApp" />
                  </div>
                  <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                    Enviar cotización
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Button
              size="lg"
              variant="outline"
              className="border-rose-500 text-rose-500 hover:bg-rose-50"
              asChild
            >
              <a
                href="https://wa.me/528129004396"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>

          {/* Visual divider */}
          <div className="mt-16 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200 rounded-full"></div>
          </div>
        </div>
      </Section>
    </main>
  );
}

