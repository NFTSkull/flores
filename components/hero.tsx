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
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Forzar reproducción
      video.play().catch((err) => {
        console.error("Error al reproducir video:", err);
      });
      
      // Listeners de debug
      video.addEventListener('loadeddata', () => {
        console.log("✅ Video cargado correctamente");
      });
      
      video.addEventListener('error', (e) => {
        console.error("❌ Error en el video:", e);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-rose-100">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        style={{ minWidth: '100%', minHeight: '100%', width: 'auto', height: 'auto' }}
      >
        <source src="/flores.mp4" type="video/mp4" />
      </video>

      {/* Overlay rosa sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 to-rose-500/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-white rounded-full shadow-2xl">
            <Flower2 className="w-12 h-12 text-rose-500" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-2xl">
          Flores que cuentan tu historia
        </h1>

        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Ramos, arreglos y experiencias florales personalizadas en Monterrey
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg shadow-xl">
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
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm shadow-xl"
            >
              <Flower2 className="mr-2 w-5 h-5" />
              Diseña tu arreglo
            </Button>
          )}
        </div>

        {/* Trust bar */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm text-white items-center justify-center mt-12">
          <span className="flex items-center gap-2 drop-shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Entrega el mismo día
          </span>
          <span className="flex items-center gap-2 drop-shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Pago seguro
          </span>
          <span className="flex items-center gap-2 drop-shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Atención personalizada
          </span>
        </div>
      </div>
    </section>
  );
}
