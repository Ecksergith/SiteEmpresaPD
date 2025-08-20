import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle,
  ArrowRight,
  Clock
} from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="secondary" className="mb-4">
                Comece Agora
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforme Seu Projeto em Realidade
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Estamos prontos para atender suas necessidades com profissionais 
                qualificados, equipamentos modernos e um compromisso inabalável 
                com a qualidade e segurança.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Atendimento Personalizado</h4>
                    <p className="text-sm text-muted-foreground">
                      Análise detalhada do seu projeto com soluções sob medida
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Orçamento Transparente</h4>
                    <p className="text-sm text-muted-foreground">
                      Sem surpresas, com detalhamento completo de custos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Garantia de Qualidade</h4>
                    <p className="text-sm text-muted-foreground">
                      Todos os serviços com garantia e suporte pós-obra
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Solicitar Orçamento Grátis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 w-4 h-4" />
                  (11) 9999-9999
                </Button>
              </div>
            </div>

            {/* Contact Card */}
            <div>
              <Card className="bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Agende uma Consulta
                    </h3>
                    <p className="text-muted-foreground">
                      Fale com nossos especialistas e tire todas as suas dúvidas
                    </p>
                  </div>

                  {/* Quick Contact */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Telefone</p>
                        <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">contato@servicosprofissionais.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Horário de Atendimento</p>
                        <p className="text-sm text-muted-foreground">Seg-Sex: 8h-18h | Sáb: 8h-12h</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Resposta em até 24 horas úteis
                    </p>
                    <Button variant="outline" className="w-full">
                      Enviar Mensagem WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}