"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Flower2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CartDrawer } from "./cart-drawer";

const navItems = [
  { href: "/tienda", label: "Tienda" },
  { href: "/#historia", label: "Historia" },
  { href: "/#quienes", label: "Quiénes Somos" },
  { href: "/#servicios", label: "Qué hacemos" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-rose-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Flower2 className="w-6 h-6 text-rose-500" />
              <span className="text-xl font-display font-bold text-ink">
                Flores DeVolada
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-stone hover:text-ink transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Cart Button */}
            <Button
              onClick={() => setIsCartOpen(true)}
              variant="ghost"
              size="icon"
              className="relative hover:bg-rose-50 hover:text-rose-500"
            >
              <ShoppingBag className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300",
              isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-stone hover:text-ink transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}

