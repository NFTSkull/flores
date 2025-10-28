"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag, Flower2 } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  onOpenCustomForm?: () => void;
}

export function Hero({ onOpenCustomForm }: HeroProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 to-rose-100">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-rose-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-rose-200 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-white rounded-full shadow-lg">
            <Flower2 className="w-12 h-12 text-rose-500" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-ink mb-6">
          Flores que cuentan tu historia
        </h1>

        <p className="text-xl md:text-2xl text-stone mb-8 max-w-2xl mx-auto">
          Ramos, arreglos y experiencias florales personalizadas en Monterrey
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg"
          >
            <Link href="/tienda">
              <ShoppingBag className="mr-2 w-5 h-5" />
              Comprar ahora
            </Link>
          </Button>

          {onOpenCustomForm && (
            <Button
              onClick={onOpenCustomForm}
              size="lg"
              variant="outline"
              className="border-rose-500 text-rose-500 hover:bg-rose-50 px-8 py-6 text-lg"
            >
              <Flower2 className="mr-2 w-5 h-5" />
              Diseña tu arreglo
            </Button>
          )}
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 text-sm text-stone items-center justify-center">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
            Entrega el mismo día
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
            Pago seguro con Stripe
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-400 rounded-full"></span>
            Atención personalizada
          </span>
        </div>
      </div>
    </section>
  );
}

