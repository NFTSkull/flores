"use client";

import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-rose-100 rounded-full mb-6">
              <Sparkles className="w-8 h-8 text-rose-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              ¿Qué hacemos?
            </h1>
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

                <div className="mt-8">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white">
                        Pide tu arreglo
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
                </div>
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

