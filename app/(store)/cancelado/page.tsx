import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CanceladoPage() {
  return (
    <main className="min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="container max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-red-100 rounded-full">
            <XCircle className="w-24 h-24 text-red-500" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">
          Pago cancelado
        </h1>

        <p className="text-xl text-stone mb-8">
          El proceso de pago fue cancelado. No se ha realizado ningún cargo.
        </p>

        <div className="bg-rose-50 p-6 rounded-lg mb-8">
          <p className="text-sm text-stone">
            Si tienes alguna pregunta o problema con el pago, por favor contáctanos y estaremos
            felices de ayudarte.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
            <Link href="/tienda">Volver a la tienda</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-rose-500 text-rose-500">
            <Link href="/contacto">Contactarnos</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

