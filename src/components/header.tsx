"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2" role="complementary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone size={14} aria-hidden="true" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} aria-hidden="true" />
                <span>contato@servicosprofissionais.com.br</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} aria-hidden="true" />
              <span>São Paulo - SP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" aria-label="Serviços Profissionais - Página inicial">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
              <span className="text-primary-foreground font-bold text-xl">SP</span>
            </div>
            <span className="font-bold text-xl text-foreground">
              Serviços Profissionais
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegação principal">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
                aria-current={item.href === "/" ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/orcamento" aria-label="Solicitar orçamento">
                Solicitar Orçamento
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menu de navegação" aria-expanded={isOpen}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]" role="dialog" aria-modal="true">
              <div className="flex flex-col space-y-4 mt-8" role="navigation" aria-label="Menu mobile">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-current={item.href === "/" ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link href="/orcamento" onClick={() => setIsOpen(false)}>
                      Solicitar Orçamento
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}