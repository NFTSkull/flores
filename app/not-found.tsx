import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Flower2 } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-rose-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-white rounded-full shadow-lg">
            <Flower2 className="w-16 h-16 text-rose-500" />
          </div>
        </div>

        <h1 className="text-6xl font-display font-bold text-ink mb-4">404</h1>
        <h2 className="text-2xl font-display font-semibold text-ink mb-4">
          Página no encontrada
        </h2>
        <p className="text-stone mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
            <Link href="/">Volver al inicio</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-rose-500 text-rose-500">
            <Link href="/tienda">Ir a la tienda</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

