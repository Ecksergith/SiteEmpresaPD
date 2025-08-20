import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Building2,
  Users,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(11) 9999-9999",
    description: "Seg-Sex: 8h-18h | Sáb: 8h-12h"
  },
  {
    icon: Mail,
    title: "Email",
    value: "contato@servicosprofissionais.com.br",
    description: "Respondemos em até 24 horas"
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Av. Paulista, 1000",
    description: "São Paulo - SP, CEP: 01310-100"
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    value: "Segunda a Sexta",
    description: "8:00 - 18:00 | Sábado: 8:00 - 12:00"
  }
];

const departments = [
  {
    name: "Comercial",
    email: "comercial@servicosprofissionais.com.br",
    phone: "(11) 9999-9998",
    description: "Orçamentos e informações comerciais"
  },
  {
    name: "Suporte Técnico",
    email: "suporte@servicosprofissionais.com.br",
    phone: "(11) 9999-9997",
    description: "Suporte técnico e emergências"
  },
  {
    name: "Financeiro",
    email: "financeiro@servicosprofissionais.com.br",
    phone: "(11) 9999-9996",
    description: "Faturamento e cobrança"
  },
  {
    name: "Recursos Humanos",
    email: "rh@servicosprofissionais.com.br",
    phone: "(11) 9999-9995",
    description: "Trabalhe conosco"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-primary-foreground">
                Contato
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Entre em Contato
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Estamos aqui para ajudar! Fale conosco através de qualquer um 
                dos nossos canais de atendimento.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Informações de Contato
              </h2>
              <p className="text-lg text-muted-foreground">
                Escolha o melhor canal para entrar em contato conosco.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      <p className="text-primary font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>Envie uma Mensagem</span>
                    </CardTitle>
                    <CardDescription>
                      Preencha o formulário e entraremos em contato o mais rápido possível.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nome Completo *</Label>
                          <Input id="name" placeholder="Seu nome" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" placeholder="seu@email.com" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Telefone *</Label>
                          <Input id="phone" placeholder="(11) 9999-9999" />
                        </div>
                        <div>
                          <Label htmlFor="subject">Assunto</Label>
                          <Input id="subject" placeholder="Assunto da mensagem" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="department">Departamento</Label>
                        <select 
                          id="department" 
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Selecione um departamento</option>
                          <option value="comercial">Comercial</option>
                          <option value="suporte">Suporte Técnico</option>
                          <option value="financeiro">Financeiro</option>
                          <option value="rh">Recursos Humanos</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Descreva como podemos ajudar..."
                          className="min-h-[120px]"
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="privacy" className="rounded" />
                        <Label htmlFor="privacy" className="text-sm">
                          Li e concordo com a política de privacidade
                        </Label>
                      </div>
                      
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 w-4 h-4" />
                        Enviar Mensagem
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Quick Contact */}
              <div className="space-y-6">
                {/* Map Placeholder */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Nossa Localização</h3>
                    <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                        <p className="text-muted-foreground">Mapa Interativo</p>
                        <p className="text-sm text-muted-foreground">
                          Av. Paulista, 1000 - São Paulo, SP
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Ações Rápidas</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="mr-2 w-4 h-4" />
                        Ligar Agora
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MessageCircle className="mr-2 w-4 h-4" />
                        WhatsApp
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Mail className="mr-2 w-4 h-4" />
                        Enviar Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <AlertCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-red-600">Emergência 24h</h3>
                        <p className="text-sm text-muted-foreground">
                          Para serviços emergenciais
                        </p>
                      </div>
                    </div>
                    <Button variant="destructive" className="w-full">
                      <Phone className="mr-2 w-4 h-4" />
                      (11) 9999-9999
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Departamentos
              </h2>
              <p className="text-lg text-muted-foreground">
                Entre em contato com o departamento específico para um atendimento mais rápido.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{dept.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {dept.description}
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            <span>{dept.email}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            <span>{dept.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-muted-foreground">
                Respostas rápidas para as dúvidas mais comuns.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Qual é o prazo médio para orçamento?</h3>
                      <p className="text-muted-foreground">
                        Enviamos orçamentos em até 24 horas úteis após receber sua solicitação.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Vocês atendem em todo o Brasil?</h3>
                      <p className="text-muted-foreground">
                        Atuamos principalmente na região de São Paulo, mas podemos atender em outros estados 
                        dependendo do porte do projeto.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Os serviços têm garantia?</h3>
                      <p className="text-muted-foreground">
                        Sim, todos os nossos serviços possuem garantia que varia conforme o tipo de serviço.
                      </p>
                    </div>
                  </div>
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
                Pronto para Começar seu Projeto?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Entre em contato hoje mesmo e receba um orçamento gratuito e sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Solicitar Orçamento
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Phone className="mr-2 w-4 h-4" />
                  Falar Agora
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