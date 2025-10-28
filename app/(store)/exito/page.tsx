import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ExitoPage() {
  return (
    <main className="min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="container max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="p-6 bg-green-100 rounded-full">
            <CheckCircle className="w-24 h-24 text-green-500" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">
          ¡Pago exitoso!
        </h1>

        <p className="text-xl text-stone mb-8">
          Gracias por tu compra. Hemos recibido tu pedido y te contactaremos pronto para coordinar
          la entrega.
        </p>

        <div className="bg-rose-50 p-6 rounded-lg mb-8">
          <p className="text-sm text-stone">
            <strong>Próximos pasos:</strong>
          </p>
          <p className="text-sm text-stone mt-2">
            Recibirás un correo de confirmación con los detalles de tu pedido. Si tienes alguna
            pregunta, no dudes en contactarnos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
            <Link href="/tienda">Seguir comprando</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-rose-500 text-rose-500">
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

