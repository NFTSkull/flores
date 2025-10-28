"use client";

import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ContactoPage() {
  return (
    <main>
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 p-4 bg-rose-100 rounded-full mb-6">
              <Mail className="w-8 h-8 text-rose-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-6">
              Contacto
            </h1>
            <p className="text-lg text-stone">
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Información de contacto */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-semibold text-ink mb-6">
                  Información
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-ink mb-1">Ubicación</p>
                    <p className="text-stone">Monterrey, Nuevo León</p>
                  </div>
                  <div>
                    <p className="font-semibold text-ink mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/5218112345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-500 hover:underline"
                    >
                      +52 81 1234 5678
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-ink mb-1">Email</p>
                    <a href="mailto:hola@floresdevolada.com" className="text-rose-500 hover:underline">
                      hola@floresdevolada.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Formulario */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-display font-semibold text-ink mb-6">Envíanos un mensaje</h2>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nombre</label>
                    <Input placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">WhatsApp</label>
                    <Input placeholder="Teléfono con WhatsApp" type="tel" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="tu@email.com" type="email" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Zona de entrega en Monterrey</label>
                    <Input placeholder="Colonia o zona" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Fecha deseada</label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Mensaje</label>
                    <textarea
                      className="w-full min-h-[120px] px-3 py-2 border border-rose-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-rose-500"
                      placeholder="Cuéntanos sobre tu pedido..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600">
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Aviso de privacidad */}
          <div className="bg-rose-50 p-6 rounded-lg text-sm text-stone">
            <p className="mb-2">
              <strong>Aviso de Privacidad:</strong>
            </p>
            <p>
              Los datos personales recopilados serán utilizados únicamente para procesar tu solicitud
              y contactarte. Tus datos están protegidos y no serán compartidos con terceros sin tu
              consentimiento.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

