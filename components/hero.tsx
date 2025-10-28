"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBag, Flower2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface HeroProps {
  onOpenCustomForm?: () => void;
}

export function Hero({ onOpenCustomForm }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Forzar reproducción del video
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Error al reproducir video:", err);
      });
    }
  }, []);

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background - z-index 0 */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/flores.mp4" type="video/mp4" />
      </video>

      {/* Overlay rosa sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600/30 to-rose-500/40 z-[1]"></div>

      {/* Content */}
      <div className="relative z-[2] max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-white rounded-full shadow-lg">
            <Flower2 className="w-12 h-12 text-rose-500" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
          Flores que cuentan tu historia
        </h1>

        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
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
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 text-sm text-white items-center justify-center">
          <span className="flex items-center gap-2 drop-shadow-md">
            <span className="w-2 h-2 bg-rose-300 rounded-full"></span>
            Entrega el mismo día
          </span>
          <span className="flex items-center gap-2 drop-shadow-md">
            <span className="w-2 h-2 bg-rose-300 rounded-full"></span>
            Pago seguro
          </span>
          <span className="flex items-center gap-2 drop-shadow-md">
            <span className="w-2 h-2 bg-rose-300 rounded-full"></span>
            Atención personalizada
          </span>
        </div>
      </div>
    </section>
  );
}
