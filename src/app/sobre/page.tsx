import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb, 
  Shield, 
  Heart,
  Building2,
  Zap,
  Cpu,
  ArrowRight
} from "lucide-react";

const teamMembers = [
  {
    name: "Carlos Silva",
    role: "Fundador & CEO",
    bio: "Engenheiro civil com mais de 20 anos de experiência em grandes projetos.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Ana Santos",
    role: "Diretora de Operações",
    bio: "Especialista em gestão de projetos e qualidade em serviços.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Roberto Almeida",
    role: "Coordenador Técnico",
    bio: "Engenheiro eletricista com foco em segurança e inovação.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Mariana Costa",
    role: "Gerente de TI",
    bio: "Especialista em soluções tecnológicas para negócios.",
    image: "/api/placeholder/150/150"
  }
];

const values = [
  {
    icon: Shield,
    title: "Segurança",
    description: "Priorizamos a segurança em todos os nossos projetos e operações."
  },
  {
    icon: Quality,
    title: "Qualidade",
    description: "Compromisso com a excelência em todos os serviços prestados."
  },
  {
    icon: Users,
    title: "Profissionalismo",
    description: "Equipe qualificada e dedicada a superar expectativas."
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Buscamos constantemente novas tecnologias e métodos."
  }
];

const milestones = [
  {
    year: "2009",
    title: "Fundação",
    description: "Início das operações com foco em construção civil."
  },
  {
    year: "2014",
    title: "Expansão",
    description: "Ampliação para serviços elétricos e tecnologia."
  },
  {
    year: "2019",
    title: "Crescimento",
    description: "Chegada a 500+ clientes satisfeitos."
  },
  {
    year: "2024",
    title: "Inovação",
    description: "Implementação de tecnologias modernas e sustentáveis."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-primary-foreground">
                Sobre Nós
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quem Somos
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Há mais de 15 anos transformando projetos em realidade com 
                qualidade, segurança e inovação.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Oferecer serviços profissionais de excelência em construção civil, 
                instalações elétricas e tecnologia, superando as expectativas dos 
                nossos clientes através da qualidade, inovação e compromisso com 
                a segurança e sustentabilidade.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Visão</h3>
                    <p className="text-muted-foreground">
                      Ser referência nacional em serviços profissionais, 
                      reconhecidos pela qualidade e inovação.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Valores</h3>
                    <p className="text-muted-foreground">
                      Ética, transparência, respeito e compromisso com 
                      o desenvolvimento sustentável.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Diferencial</h3>
                    <p className="text-muted-foreground">
                      Equipe multidisciplinar qualificada e tecnologia 
                      de ponta a seu serviço.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-muted-foreground">
                Os princípios que guiam nosso trabalho e nossas relações.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa História
              </h2>
              <p className="text-lg text-muted-foreground">
                Uma jornada de crescimento, aprendizado e superação.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary h-full"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 pr-8">
                      <Card>
                        <CardContent className="p-6">
                          <div className="text-sm text-primary font-semibold mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    
                    <div className="w-1/2 pl-8"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa Equipe
              </h2>
              <p className="text-lg text-muted-foreground">
                Profissionais dedicados e qualificados para realizar seus projetos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-semibold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossas Áreas de Atuação
              </h2>
              <p className="text-lg text-muted-foreground">
                Oferecemos soluções completas e integradas para diversas necessidades.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Construção Civil</h3>
                  <p className="text-muted-foreground mb-4">
                    Obras civis completas com engenharia de qualidade e materiais premium.
                  </p>
                  <Button variant="outline" className="w-full">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Instalações Elétricas</h3>
                  <p className="text-muted-foreground mb-4">
                    Soluções elétricas seguras e eficientes para residências e empresas.
                  </p>
                  <Button variant="outline" className="w-full">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Tecnologia</h3>
                  <p className="text-muted-foreground mb-4">
                    Soluções tecnológicas modernas para otimizar seus processos.
                  </p>
                  <Button variant="outline" className="w-full">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para Trabalhar Conosco?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Entre em contato hoje mesmo e descubra como podemos transformar 
                seu projeto em realidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Quality(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}