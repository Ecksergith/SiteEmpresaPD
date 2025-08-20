"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  CheckCircle, 
  AlertCircle, 
  Loader2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  Send,
  Building2,
  Zap,
  Cpu,
  Hammer,
  Wrench,
  Shield
} from "lucide-react";

const services = [
  { value: "construcao", label: "Construção Civil", icon: Building2 },
  { value: "eletrica", label: "Instalações Elétricas", icon: Zap },
  { value: "tecnologia", label: "Tecnologia e TI", icon: Cpu },
  { value: "reformas", label: "Reformas e Reparos", icon: Hammer },
  { value: "manutencao", label: "Manutenção Predial", icon: Wrench },
  { value: "seguranca", label: "Segurança do Trabalho", icon: Shield },
];

const urgencyLevels = [
  { value: "baixa", label: "Baixa (Mais de 30 dias)" },
  { value: "media", label: "Média (15-30 dias)" },
  { value: "alta", label: "Alta (7-15 dias)" },
  { value: "urgente", label: "Urgente (Menos de 7 dias)" },
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    urgency: "",
    budget: "",
    description: "",
    address: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = "Telefone inválido. Use o formato (11) 9999-9999";
    }

    if (!formData.service) {
      newErrors.service = "Selecione um serviço";
    }

    if (!formData.urgency) {
      newErrors.urgency = "Selecione a urgência";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Descrição é obrigatória";
    } else if (formData.description.length < 10) {
      newErrors.description = "Descrição muito curta";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const selectedService = services.find(s => s.value === formData.service);
  const selectedUrgency = urgencyLevels.find(u => u.value === formData.urgency);

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Orçamento Solicitado com Sucesso!
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8">
                Recebemos sua solicitação de orçamento. Nossa equipe entrará em contato 
                dentro de 24 horas úteis para analisar seu projeto e enviar uma proposta detalhada.
              </p>

              <div className="bg-muted rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">O que acontece agora?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Análise do Projeto</p>
                      <p className="text-sm text-muted-foreground">
                        Nossa equipe analisará sua solicitação com atenção
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Contato Telefônico</p>
                      <p className="text-sm text-muted-foreground">
                        Entraremos em contato para detalhes adicionais
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Proposta Detalhada</p>
                      <p className="text-sm text-muted-foreground">
                        Enviaremos um orçamento completo com prazos e condições
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <a href="/">Voltar para o Início</a>
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 w-4 h-4" />
                  (11) 9999-9999
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-primary-foreground">
                Solicitar Orçamento
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforme Seu Projeto em Realidade
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Preencha o formulário abaixo e receba um orçamento gratuito e sem compromisso 
                dentro de 24 horas úteis.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="w-5 h-5" />
                        <span>Formulário de Orçamento</span>
                      </CardTitle>
                      <CardDescription>
                        Preencha todos os campos para recebermos sua solicitação
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Informações Pessoais</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Nome Completo *</Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                className={errors.name ? "border-red-500" : ""}
                              />
                              {errors.name && (
                                <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                              )}
                            </div>

                            <div>
                              <Label htmlFor="email">Email *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                className={errors.email ? "border-red-500" : ""}
                              />
                              {errors.email && (
                                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                              )}
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="phone">Telefone *</Label>
                            <Input
                              id="phone"
                              placeholder="(11) 9999-9999"
                              value={formData.phone}
                              onChange={handlePhoneChange}
                              className={errors.phone ? "border-red-500" : ""}
                            />
                            {errors.phone && (
                              <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                            )}
                          </div>
                        </div>

                        {/* Service Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Informações do Serviço</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="service">Tipo de Serviço *</Label>
                              <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                                <SelectTrigger className={errors.service ? "border-red-500" : ""}>
                                  <SelectValue placeholder="Selecione o serviço" />
                                </SelectTrigger>
                                <SelectContent>
                                  {services.map(service => (
                                    <SelectItem key={service.value} value={service.value}>
                                      {service.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {errors.service && (
                                <p className="text-sm text-red-500 mt-1">{errors.service}</p>
                              )}
                            </div>

                            <div>
                              <Label htmlFor="urgency">Urgência *</Label>
                              <Select value={formData.urgency} onValueChange={(value) => setFormData(prev => ({ ...prev, urgency: value }))}>
                                <SelectTrigger className={errors.urgency ? "border-red-500" : ""}>
                                  <SelectValue placeholder="Selecione a urgência" />
                                </SelectTrigger>
                                <SelectContent>
                                  {urgencyLevels.map(urgency => (
                                    <SelectItem key={urgency.value} value={urgency.value}>
                                      {urgency.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {errors.urgency && (
                                <p className="text-sm text-red-500 mt-1">{errors.urgency}</p>
                              )}
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="budget">Orçamento Estimado</Label>
                            <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o orçamento" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ate-5k">Até R$ 5.000</SelectItem>
                                <SelectItem value="5k-10k">R$ 5.000 - R$ 10.000</SelectItem>
                                <SelectItem value="10k-25k">R$ 10.000 - R$ 25.000</SelectItem>
                                <SelectItem value="25k-50k">R$ 25.000 - R$ 50.000</SelectItem>
                                <SelectItem value="50k+">Acima de R$ 50.000</SelectItem>
                                <SelectItem value="nao-sei">Ainda não sei</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="description">Descrição do Projeto *</Label>
                            <Textarea
                              id="description"
                              placeholder="Descreva detalhadamente o que você precisa..."
                              value={formData.description}
                              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                              className={`min-h-[120px] ${errors.description ? "border-red-500" : ""}`}
                            />
                            {errors.description && (
                              <p className="text-sm text-red-500 mt-1">{errors.description}</p>
                            )}
                          </div>
                        </div>

                        {/* Location Information */}
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg">Localização</h3>
                          
                          <div>
                            <Label htmlFor="address">Endereço</Label>
                            <Input
                              id="address"
                              placeholder="Rua, número, complemento"
                              value={formData.address}
                              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="city">Cidade</Label>
                              <Input
                                id="city"
                                value={formData.city}
                                onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                              />
                            </div>

                            <div>
                              <Label htmlFor="state">Estado</Label>
                              <Select value={formData.state} onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o estado" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="SP">São Paulo</SelectItem>
                                  <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                                  <SelectItem value="MG">Minas Gerais</SelectItem>
                                  <SelectItem value="ES">Espírito Santo</SelectItem>
                                  <SelectItem value="outro">Outro</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 w-4 h-4" />
                              Enviar Solicitação
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Contact Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span>Contato Rápido</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium">Telefone</p>
                          <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">contato@servicosprofissionais.com.br</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium">Endereço</p>
                          <p className="text-sm text-muted-foreground">São Paulo - SP</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium">Horário</p>
                          <p className="text-sm text-muted-foreground">Seg-Sex: 8h-18h</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Service Preview */}
                  {(selectedService || selectedUrgency) && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5" />
                          <span>Resumo da Solicitação</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {selectedService && (
                          <div className="flex items-center space-x-2">
                            <selectedService.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm">{selectedService.label}</span>
                          </div>
                        )}
                        
                        {selectedUrgency && (
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="text-sm">{selectedUrgency.label}</span>
                          </div>
                        )}
                        
                        {formData.budget && (
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-primary" />
                            <span className="text-sm">
                              {formData.budget === "ate-5k" && "Até R$ 5.000"}
                              {formData.budget === "5k-10k" && "R$ 5.000 - R$ 10.000"}
                              {formData.budget === "10k-25k" && "R$ 10.000 - R$ 25.000"}
                              {formData.budget === "25k-50k" && "R$ 25.000 - R$ 50.000"}
                              {formData.budget === "50k+" && "Acima de R$ 50.000"}
                              {formData.budget === "nao-sei" && "Ainda não sei"}
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )}

                  {/* Benefits */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Por que escolher nós?</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Atendimento personalizado</span>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Orçamento transparente</span>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Garantia de qualidade</span>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Equipe qualificada</span>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Resposta rápida</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}