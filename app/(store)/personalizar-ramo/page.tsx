"use client";

import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Price } from "@/components/price";
import { useState } from "react";
import { Flower2, MessageCircle, ShoppingCart, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type RamoStyle = "romántico" | "alegre" | "elegante" | "minimalista" | "temático";
type Ocasion = "cumpleaños" | "aniversario" | "agradecimiento" | "condolencias" | "solo-porque-si";

const ramoStyles: { value: RamoStyle; label: string; price: number }[] = [
  { value: "romántico", label: "Romántico", price: 0 },
  { value: "alegre", label: "Alegre", price: 0 },
  { value: "elegante", label: "Elegante", price: 5000 },
  { value: "minimalista", label: "Minimalista", price: 0 },
  { value: "temático", label: "Temático", price: 10000 },
];

const ocasiones: { value: Ocasion; label: string }[] = [
  { value: "cumpleaños", label: "Cumpleaños" },
  { value: "aniversario", label: "Aniversario" },
  { value: "agradecimiento", label: "Agradecimiento" },
  { value: "condolencias", label: "Condolencias" },
  { value: "solo-porque-si", label: "Solo porque sí" },
];

const basePrice = 50000; // $500 MXN base
const floreroPrice = 15000; // $150 MXN

export default function PersonalizarRamoPage() {
  const [selectedStyle, setSelectedStyle] = useState<RamoStyle | null>(null);
  const [selectedOcasion, setSelectedOcasion] = useState<Ocasion | null>(null);
  const [cantidadFlores, setCantidadFlores] = useState(12);
  const [incluirFlorero, setIncluirFlorero] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const stylePrice = selectedStyle
    ? ramoStyles.find((s) => s.value === selectedStyle)?.price || 0
    : 0;

  const subtotal = basePrice + stylePrice + cantidadFlores * 2000; // $20 por flor adicional
  const precioFlorero = incluirFlorero ? (subtotal < 200000 ? floreroPrice : 0) : 0;
  const total = subtotal + precioFlorero;

  const handleAddToCart = async () => {
    // TODO: Implementar agregar al carrito con personalización
    console.log("Agregar al carrito personalizado", {
      style: selectedStyle,
      ocasion: selectedOcasion,
      cantidadFlores,
      incluirFlorero,
      mensaje,
      total,
    });
    setIsDialogOpen(true);
  };

  return (
    <main>
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-rose-100 rounded-full mb-6">
              <Flower2 className="w-8 h-8 text-rose-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Personaliza tu Ramo
            </h1>
            <p className="text-lg text-stone max-w-2xl mx-auto">
              Crea el arreglo floral perfecto según tus gustos y ocasión
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario de personalización */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-display font-semibold text-ink mb-6">
                    Opciones de Personalización
                  </h2>

                  {/* Ocasión */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-ink mb-2 block">
                      Ocasión *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {ocasiones.map((ocasion) => (
                        <Button
                          key={ocasion.value}
                          type="button"
                          variant={selectedOcasion === ocasion.value ? "default" : "outline"}
                          className={
                            selectedOcasion === ocasion.value
                              ? "bg-rose-500 hover:bg-rose-600"
                              : ""
                          }
                          onClick={() => setSelectedOcasion(ocasion.value)}
                        >
                          {ocasion.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Estilo */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-ink mb-2 block">
                      Estilo *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {ramoStyles.map((style) => (
                        <Button
                          key={style.value}
                          type="button"
                          variant={selectedStyle === style.value ? "default" : "outline"}
                          className={
                            selectedStyle === style.value
                              ? "bg-rose-500 hover:bg-rose-600"
                              : ""
                          }
                          onClick={() => setSelectedStyle(style.value)}
                        >
                          {style.label}
                          {style.price > 0 && (
                            <span className="ml-1 text-xs">
                              (+<Price price={style.price} className="text-xs" />)
                            </span>
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Cantidad de flores */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-ink mb-2 block">
                      Cantidad de flores (base: 12)
                    </label>
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCantidadFlores(Math.max(6, cantidadFlores - 1))}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        min={6}
                        max={50}
                        value={cantidadFlores}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 12;
                          setCantidadFlores(Math.min(50, Math.max(6, val)));
                        }}
                        className="w-20 text-center"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCantidadFlores(Math.min(50, cantidadFlores + 1))}
                      >
                        +
                      </Button>
                      <span className="text-sm text-stone">
                        (+<Price price={(cantidadFlores - 12) * 2000} /> por flores adicionales)
                      </span>
                    </div>
                  </div>

                  {/* Opción de florero */}
                  <div className="mb-6">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="florero"
                        checked={incluirFlorero}
                        onChange={(e) => setIncluirFlorero(e.target.checked)}
                        className="mt-1 w-4 h-4 text-rose-500 border-rose-300 rounded focus:ring-rose-500"
                      />
                      <div className="flex-1">
                        <label htmlFor="florero" className="text-sm font-medium text-ink cursor-pointer">
                          Incluir florero
                        </label>
                        <p className="text-xs text-stone mt-1">
                          {subtotal < 200000
                            ? `Costo adicional: ${precioFlorero > 0 ? "$150 MXN" : "Gratis"}`
                            : "Incluido sin costo adicional (pedido mayor a $2,000)"}
                        </p>
                        {subtotal >= 200000 && (
                          <div className="mt-2 flex items-center gap-2 text-xs text-green-600">
                            <Info className="w-4 h-4" />
                            <span>¡Florero incluido gratis!</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Mensaje personalizado */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-ink mb-2 block">
                      Mensaje en tarjeta (opcional)
                    </label>
                    <textarea
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      className="w-full min-h-[100px] px-3 py-2 border border-rose-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="Escribe un mensaje especial..."
                      maxLength={200}
                    />
                    <p className="text-xs text-stone mt-1">{mensaje.length}/200 caracteres</p>
                  </div>

                  {/* Botón de ayuda */}
                  <div className="bg-rose-50 p-4 rounded-lg">
                    <p className="text-sm text-stone mb-3">
                      ¿Tienes dudas sobre tu pedido personalizado?
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-rose-500 text-rose-500 hover:bg-rose-50"
                      asChild
                    >
                      <a
                        href="https://wa.me/528129004396?text=Hola, tengo dudas sobre personalizar un ramo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contactar por WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Resumen y precio */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardContent className="p-6">
                  <h2 className="text-xl font-display font-semibold text-ink mb-6">
                    Resumen
                  </h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm text-stone">
                      <span>Precio base</span>
                      <Price price={basePrice} />
                    </div>
                    {stylePrice > 0 && (
                      <div className="flex justify-between text-sm text-stone">
                        <span>Estilo {selectedStyle}</span>
                        <Price price={stylePrice} />
                      </div>
                    )}
                    {cantidadFlores > 12 && (
                      <div className="flex justify-between text-sm text-stone">
                        <span>Flores adicionales ({cantidadFlores - 12})</span>
                        <Price price={(cantidadFlores - 12) * 2000} />
                      </div>
                    )}
                    {incluirFlorero && (
                      <div className="flex justify-between text-sm text-stone">
                        <span>Florero</span>
                        <Price price={precioFlorero} />
                      </div>
                    )}
                    <div className="border-t border-rose-200 pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold text-lg text-ink">Total</span>
                        <Price price={total} className="text-2xl text-rose-500" />
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    disabled={!selectedStyle || !selectedOcasion}
                    size="lg"
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white mb-4"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Agregar al carrito
                  </Button>

                  {(!selectedStyle || !selectedOcasion) && (
                    <p className="text-xs text-stone text-center">
                      * Completa los campos requeridos
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Dialog de confirmación */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¡Ramo personalizado agregado!</DialogTitle>
            <DialogDescription>
              Tu ramo personalizado ha sido agregado al carrito. Puedes continuar comprando o
              proceder al checkout.
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-4 mt-4">
            <Button
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
              className="flex-1"
            >
              Seguir comprando
            </Button>
            <Button
              onClick={() => {
                setIsDialogOpen(false);
                window.location.href = "/checkout";
              }}
              className="flex-1 bg-rose-500 hover:bg-rose-600"
            >
              Ir al checkout
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

