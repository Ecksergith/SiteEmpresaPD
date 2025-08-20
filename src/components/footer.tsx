import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const services = [
    "Construção Civil",
    "Instalações Elétricas",
    "Tecnologia e TI",
    "Reformas e Reparos",
    "Projetos Personalizados",
  ];

  const quickLinks = [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "/contato" },
    { name: "Orçamento", href: "/orcamento" },
  ];

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">SP</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                Serviços Profissionais
              </span>
            </div>
            <p className="text-sm">
              Empresa especializada em prestação de serviços diversos com qualidade, 
              segurança e inovação para seu projeto.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/servicos" 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@servicosprofissionais.com.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">
                  Av. Paulista, 1000<br />
                  São Paulo - SP<br />
                  CEP: 01310-100
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 Serviços Profissionais. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidade" className="text-sm hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-sm hover:text-primary transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}