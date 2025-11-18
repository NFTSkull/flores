import Link from "next/link";
import { Flower2, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  navegacion: [
    { href: "/tienda", label: "Tienda" },
    { href: "/nuestra-historia", label: "Historia" },
    { href: "/quienes-somos", label: "Quiénes Somos" },
    { href: "/que-hacemos", label: "Qué hacemos" },
    { href: "/contacto", label: "Contacto" },
  ],
  legal: [
    { href: "/politicas", label: "Políticas" },
    { href: "/aviso-privacidad", label: "Aviso de Privacidad" },
    { href: "/terminos", label: "Términos y Condiciones" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-rose-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Flower2 className="w-6 h-6" />
              <span className="text-xl font-display font-bold">Flores DeVolada</span>
            </div>
            <p className="text-rose-200 text-sm">
              Ramos y arreglos florales personalizadas en Monterrey
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-rose-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-rose-200 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Monterrey, Nuevo León</span>
              </li>
              <li>
                <a
                  href="https://wa.me/528129004396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rose-200 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+52 81 2900 4396</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bluum_mty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rose-200 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>@bluum_mty / @floresdevoladamty</span>
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/FloresDevolada.Mty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-rose-200 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>FloresDevolada.Mty</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-rose-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs">
                <span>🛡️</span>
                <span>Pago seguro con Stripe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-rose-800 mt-8 pt-8 text-center text-rose-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Flores DeVolada. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

