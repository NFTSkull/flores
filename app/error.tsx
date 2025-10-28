"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-rose-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-red-100 rounded-full">
            <AlertCircle className="w-16 h-16 text-red-500" />
          </div>
        </div>

        <h2 className="text-2xl font-display font-semibold text-ink mb-4">
          Algo salió mal
        </h2>
        <p className="text-stone mb-8">
          Ocurrió un error inesperado. Por favor intenta nuevamente.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg" className="bg-rose-500 hover:bg-rose-600">
            Intentar de nuevo
          </Button>
          <Button asChild size="lg" variant="outline" className="border-rose-500 text-rose-500">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

