import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Award } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden" role="region" aria-label="Banner principal">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-banner.jpg')",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Serviços Profissionais de
            <span className="text-primary"> Excelência</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            Construção civil, instalações elétricas e soluções tecnológicas com 
            qualidade, segurança e inovação para transformar seus projetos em realidade.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" role="list" aria-label="Principais características">
            <div className="flex items-center space-x-2" role="listitem">
              <CheckCircle className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm">Qualidade Garantida</span>
            </div>
            <div className="flex items-center space-x-2" role="listitem">
              <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm">Agilidade na Entrega</span>
            </div>
            <div className="flex items-center space-x-2" role="listitem">
              <Award className="w-5 h-5 text-primary" aria-hidden="true" />
              <span className="text-sm">Profissionais Certificados</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Ações principais">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/orcamento" className="flex items-center" aria-label="Solicitar orçamento">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Link href="/servicos" aria-label="Ver serviços">
                Ver Serviços
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}