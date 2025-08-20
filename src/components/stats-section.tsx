import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckCircle, 
  Calendar, 
  Award,
  TrendingUp,
  Building2
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clientes Satisfeitos",
    description: "Pessoas e empresas que confiam em nosso trabalho",
    color: "text-blue-600",
  },
  {
    icon: CheckCircle,
    value: "1200+",
    label: "Projetos Concluídos",
    description: "Trabalhos entregues com excelência",
    color: "text-green-600",
  },
  {
    icon: Calendar,
    value: "15+",
    label: "Anos de Experiência",
    description: "No mercado oferecendo qualidade",
    color: "text-purple-600",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfação",
    description: "Taxa de clientes satisfeitos",
    color: "text-orange-600",
  },
  {
    icon: TrendingUp,
    value: "24h",
    label: "Suporte Rápido",
    description: "Resposta ágil para emergências",
    color: "text-red-600",
  },
  {
    icon: Building2,
    value: "50+",
    label: "Profissionais",
    description: "Equipe qualificada e certificada",
    color: "text-cyan-600",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4 text-primary-foreground">
            Números que Falam
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Excelência em Números
          </h2>
          <p className="text-lg opacity-90">
            Nossos resultados demonstram o compromisso com a qualidade e a 
            satisfação dos nossos clientes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  
                  <div className="text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm opacity-80">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/10 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para Fazer Parte da Nossa História?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Junte-se a centenas de clientes satisfeitos e descubra por que 
              somos a melhor escolha para seus projetos.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}