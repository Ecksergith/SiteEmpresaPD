import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Zap, 
  Cpu, 
  Hammer, 
  Wrench, 
  Shield,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Construção Civil",
    description: "Obras civis completas com engenharia de qualidade e materiais premium.",
    features: ["Edificações", "Reformas", "Estruturas", "Acabamentos"],
    color: "bg-blue-500",
  },
  {
    icon: Zap,
    title: "Instalações Elétricas",
    description: "Soluções elétricas residenciais, comerciais e industriais seguras.",
    features: ["Residencial", "Comercial", "Industrial", "Manutenção"],
    color: "bg-yellow-500",
  },
  {
    icon: Cpu,
    title: "Tecnologia e TI",
    description: "Soluções tecnológicas modernas para seu negócio ou residência.",
    features: ["Redes", "Segurança", "Automação", "Suporte"],
    color: "bg-purple-500",
  },
  {
    icon: Hammer,
    title: "Reformas e Reparos",
    description: "Reformas completas e reparos rápidos com garantia de qualidade.",
    features: ["Reformas", "Reparos", "Manutenção", "Emergência"],
    color: "bg-green-500",
  },
  {
    icon: Wrench,
    title: "Projetos Personalizados",
    description: "Soluções sob medida para necessidades específicas e complexas.",
    features: ["Consultoria", "Planejamento", "Execução", "Acompanhamento"],
    color: "bg-red-500",
  },
  {
    icon: Shield,
    title: "Segurança do Trabalho",
    description: "Consultoria e implementação de normas de segurança.",
    features: ["PCMSO", "PPRA", "Treinamentos", "Auditoria"],
    color: "bg-orange-500",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Nossos Serviços
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções Completas para Suas Necessidades
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma ampla gama de serviços profissionais com qualidade, 
            segurança e inovação para atender às suas expectativas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/servicos">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}