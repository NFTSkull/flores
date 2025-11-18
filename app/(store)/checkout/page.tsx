"use client";

import { useEffect, useState, useMemo } from "react";
import { Price } from "@/components/price";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard, ShoppingBag, MapPin } from "lucide-react";
import { CartItem } from "@/lib/cart";
import { useRouter } from "next/navigation";

function getTotalPrice(cart: { items: CartItem[] }): number {
  return cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
}

// Función para calcular costo de envío basado en zona
function calculateShipping(zona: string): number {
  if (!zona || zona.trim() === "") return 0;

  const zonaLower = zona.toLowerCase().trim();

  // Zonas con envío gratuito (centro y zonas cercanas)
  const zonasGratis = [
    "centro",
    "san pedro",
    "valle oriente",
    "cumbres",
    "san jerónimo",
    "contry",
  ];

  // Zonas con costo estándar
  const zonasEstandar = [
    "apodaca",
    "san nicolás",
    "guadalupe",
    "santa catarina",
    "escobedo",
  ];

  // Zonas con costo premium (más lejanas)
  const zonasPremium = ["garcía", "juárez", "pesquería"];

  if (zonasGratis.some((z) => zonaLower.includes(z))) {
    return 0;
  }

  if (zonasEstandar.some((z) => zonaLower.includes(z))) {
    return 15000; // $150 MXN
  }

  if (zonasPremium.some((z) => zonaLower.includes(z))) {
    return 25000; // $250 MXN
  }

  // Zona no reconocida - costo estándar
  return 15000;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cart, setCart] = useState<{ items: CartItem[] }>({ items: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [direccion, setDireccion] = useState({
    nombre: "",
    telefono: "",
    calle: "",
    colonia: "",
    ciudad: "Monterrey",
    estado: "Nuevo León",
    codigoPostal: "",
    referencias: "",
  });

  useEffect(() => {
    async function loadCart() {
      const response = await fetch("/api/cart");
      if (response.ok) {
        const data = await response.json();
        setCart(data);
      }
    }
    loadCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const subtotal = getTotalPrice(cart);
  const shippingCost = useMemo(() => {
    return calculateShipping(direccion.colonia || direccion.ciudad);
  }, [direccion.colonia, direccion.ciudad]);
  const total = subtotal + shippingCost;

  async function handleCheckout() {
    if (cart.items.length === 0) {
      router.push("/tienda");
      return;
    }

    if (!direccion.nombre || !direccion.telefono || !direccion.calle || !direccion.colonia) {
      alert("Por favor completa todos los campos requeridos de la dirección");
      return;
    }

    setIsLoading(true);
    
    // Simular checkout (Stripe deshabilitado temporalmente)
    // TODO: Configurar Stripe más adelante
    setTimeout(() => {
      router.push("/exito");
    }, 1000);
  }

  if (cart.items.length === 0) {
    return (
      <main className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <ShoppingBag className="w-24 h-24 text-rose-200 mx-auto mb-4" />
          <h1 className="text-3xl font-display font-bold text-ink mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-stone mb-8">Agrega productos antes de proceder al checkout.</p>
          <Button asChild size="lg" className="bg-rose-500 hover:bg-rose-600">
            <a href="/tienda">Explorar productos</a>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-display font-bold text-ink mb-8 text-center">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Productos */}
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-semibold text-ink">Productos</h2>
              {cart.items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-6 border border-rose-100 rounded-lg bg-white"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-ink">{item.product.name}</h3>
                    <p className="text-sm text-stone mt-1">
                      Cantidad: {item.quantity} × <Price price={item.product.price} />
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-rose-500">
                      <Price price={item.product.price * item.quantity} />
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulario de dirección */}
            <div className="border border-rose-100 rounded-lg bg-white p-6">
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-rose-500" />
                <h2 className="text-2xl font-display font-semibold text-ink">
                  Dirección de envío
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-ink mb-1 block">
                    Nombre completo *
                  </label>
                  <Input
                    value={direccion.nombre}
                    onChange={(e) => setDireccion({ ...direccion, nombre: e.target.value })}
                    placeholder="Nombre completo"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-ink mb-1 block">
                    Teléfono *
                  </label>
                  <Input
                    type="tel"
                    value={direccion.telefono}
                    onChange={(e) => setDireccion({ ...direccion, telefono: e.target.value })}
                    placeholder="81 1234 5678"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-ink mb-1 block">
                    Código Postal
                  </label>
                  <Input
                    value={direccion.codigoPostal}
                    onChange={(e) => setDireccion({ ...direccion, codigoPostal: e.target.value })}
                    placeholder="64000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-ink mb-1 block">
                    Calle y número *
                  </label>
                  <Input
                    value={direccion.calle}
                    onChange={(e) => setDireccion({ ...direccion, calle: e.target.value })}
                    placeholder="Calle y número"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-ink mb-1 block">
                    Colonia *
                  </label>
                  <Input
                    value={direccion.colonia}
                    onChange={(e) => setDireccion({ ...direccion, colonia: e.target.value })}
                    placeholder="Colonia"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-ink mb-1 block">
                    Ciudad
                  </label>
                  <Input
                    value={direccion.ciudad}
                    onChange={(e) => setDireccion({ ...direccion, ciudad: e.target.value })}
                    placeholder="Monterrey"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-sm font-medium text-ink mb-1 block">
                    Referencias (opcional)
                  </label>
                  <Input
                    value={direccion.referencias}
                    onChange={(e) => setDireccion({ ...direccion, referencias: e.target.value })}
                    placeholder="Casa color azul, portón negro, etc."
                  />
                </div>
              </div>

              {/* Información de envío calculado */}
              {direccion.colonia && (
                <div className="mt-4 p-4 bg-rose-50 rounded-lg">
                  <p className="text-sm text-stone">
                    <strong>Zona detectada:</strong> {direccion.colonia}
                  </p>
                  <p className="text-sm text-stone mt-1">
                    <strong>Costo de envío:</strong>{" "}
                    {shippingCost === 0 ? (
                      <span className="text-green-600 font-semibold">¡Envío GRATIS!</span>
                    ) : (
                      <Price price={shippingCost} />
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="p-6 border border-rose-100 rounded-lg bg-rose-50 sticky top-4">
              <h2 className="text-xl font-display font-bold text-ink mb-6">Resumen</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-stone">
                  <span>Subtotal</span>
                  <Price price={subtotal} />
                </div>
                <div className="flex justify-between text-stone">
                  <span>Envío</span>
                  {direccion.colonia ? (
                    shippingCost === 0 ? (
                      <span className="text-green-600 font-semibold">GRATIS</span>
                    ) : (
                      <Price price={shippingCost} />
                    )
                  ) : (
                    <span className="text-sm">Ingresa dirección</span>
                  )}
                </div>
                <div className="border-t border-rose-200 pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg text-ink">Total</span>
                    <Price price={total} className="text-2xl text-rose-500" />
                  </div>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                disabled={isLoading}
                size="lg"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                {isLoading ? "Procesando..." : "Completar pedido"}
              </Button>

              <p className="text-xs text-stone text-center mt-4">
                ⚠️ Stripe deshabilitado temporalmente - Demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
