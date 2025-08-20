"use client";

import { pageSEO } from "@/lib/metadata";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Building2, 
  Zap, 
  Cpu, 
  Hammer, 
  Wrench, 
  Shield,
  Search,
  Filter,
  ArrowRight,
  Star,
  Clock,
  CheckCircle,
  X,
  Heart,
  Share2
} from "lucide-react";

export const metadata = pageSEO.services;

const services = [
  {
    id: 1,
    title: "Construção Civil Residencial",
    description: "Construção de casas e apartamentos com padrão de qualidade e segurança. Desde o projeto até a entrega final.",
    shortDesc: "Construção de residências com qualidade garantida",
    price: "A partir de R$ 2.500/m²",
    category: "construcao",
    featured: true,
    image: "/service-construcao.jpg",
    rating: 4.8,
    duration: "6-12 meses",
    features: ["Projeto arquitetônico", "Estrutura", "Alvenaria", "Acabamento", "Instalações"],
    icon: Building2,
  },
  {
    id: 2,
    title: "Instalações Elétricas Residenciais",
    description: "Instalações elétricas completas para residências, seguindo normas de segurança e com materiais de qualidade.",
    shortDesc: "Instalações elétricas seguras e confiáveis",
    price: "A partir de R$ 150,00",
    category: "eletrica",
    featured: true,
    image: "/service-eletrica.jpg",
    rating: 4.9,
    duration: "1-3 dias",
    features: ["Padrão brasileiro", "Disjuntores", "Aterramento", "Iluminação", "Tomadas"],
    icon: Zap,
  },
  {
    id: 3,
    title: "Redes de Computadores",
    description: "Instalação e configuração de redes de computadores para residências e empresas.",
    shortDesc: "Soluções em redes de computadores",
    price: "A partir de R$ 200,00",
    category: "tecnologia",
    featured: false,
    image: "/service-tecnologia.jpg",
    rating: 4.7,
    duration: "1-2 dias",
    features: ["Cabeamento", "Roteadores", "Switches", "Wi-Fi", "Segurança"],
    icon: Cpu,
  },
  {
    id: 4,
    title: "Reformas Completas",
    description: "Reformas residenciais e comerciais completas, desde planejamento até execução.",
    shortDesc: "Reformas com planejamento e qualidade",
    price: "A partir de R$ 1.800/m²",
    category: "reformas",
    featured: true,
    image: "/service-reformas.jpg",
    rating: 4.6,
    duration: "2-6 meses",
    features: ["Planejamento", "Demolição", "Construção", "Acabamento", "Limpeza"],
    icon: Hammer,
  },
  {
    id: 5,
    title: "Manutenção Predial",
    description: "Serviços de manutenção predial preventiva e corretiva para condomínios e edifícios.",
    shortDesc: "Manutenção predial profissional",
    price: "A partir de R$ 120,00/h",
    category: "manutencao",
    featured: false,
    image: "/service-manutencao.jpg",
    rating: 4.5,
    duration: "Conforme necessidade",
    features: ["Preventiva", "Corretiva", "Emergencial", "Programada", "24h"],
    icon: Wrench,
  },
  {
    id: 6,
    title: "Consultoria de Segurança",
    description: "Consultoria em segurança do trabalho para empresas e obras.",
    shortDesc: "Segurança do trabalho especializada",
    price: "A partir de R$ 300,00",
    category: "seguranca",
    featured: false,
    image: "/service-seguranca.jpg",
    rating: 4.9,
    duration: "1-5 dias",
    features: ["PCMSO", "PPRA", "Treinamentos", "Auditoria", "Laudos"],
    icon: Shield,
  },
];

const categories = [
  { value: "all", label: "Todos os Serviços" },
  { value: "construcao", label: "Construção Civil" },
  { value: "eletrica", label: "Instalações Elétricas" },
  { value: "tecnologia", label: "Tecnologia" },
  { value: "reformas", label: "Reformas" },
  { value: "manutencao", label: "Manutenção" },
  { value: "seguranca", label: "Segurança" },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleServiceSelection = (serviceId: number) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId);
      } else if (prev.length < 3) {
        return [...prev, serviceId];
      }
      return prev;
    });
  };

  const selectedServicesData = services.filter(service => selectedServices.includes(service.id));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-primary-foreground">
                Nossos Serviços
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Soluções Profissionais para Todas as Necessidades
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Oferecemos uma gama completa de serviços com qualidade, segurança e 
                inovação para atender às suas expectativas.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/50 sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar serviços..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-64">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filtrar por categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Compare Button */}
              {selectedServices.length > 0 && (
                <Dialog open={showCompare} onOpenChange={setShowCompare}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      Comparar ({selectedServices.length})
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Comparar Serviços</DialogTitle>
                      <DialogDescription>
                        Compare os serviços selecionados lado a lado
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {selectedServicesData.map(service => (
                        <Card key={service.id}>
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-lg">{service.title}</CardTitle>
                                <CardDescription>{service.shortDesc}</CardDescription>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => toggleServiceSelection(service.id)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex justify-between">
                                <span className="font-medium">Preço:</span>
                                <span className="text-primary font-semibold">{service.price}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Duração:</span>
                                <span>{service.duration}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-medium">Avaliação:</span>
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                  <span>{service.rating}</span>
                                </div>
                              </div>
                              <div>
                                <span className="font-medium">Recursos:</span>
                                <ul className="text-sm mt-1">
                                  {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                      <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <Button className="w-full mt-4">
                                Solicitar Orçamento
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map(service => {
                const Icon = service.icon;
                const isSelected = selectedServices.includes(service.id);
                
                return (
                  <Card 
                    key={service.id} 
                    className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${
                      isSelected ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center ${
                          service.featured ? 'bg-primary/20' : ''
                        }`}>
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex items-center space-x-2">
                          {service.featured && (
                            <Badge variant="secondary">Destaque</Badge>
                          )}
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleServiceSelection(service.id)}
                            className="rounded border-gray-300 text-primary focus:ring-primary"
                          />
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {service.shortDesc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Image Placeholder */}
                      <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-muted-foreground">Imagem do Serviço</span>
                      </div>

                      {/* Rating and Duration */}
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{service.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-primary">
                          {service.price}
                        </span>
                      </div>

                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-green-600 mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Button className="flex-1">
                          Solicitar Orçamento
                        </Button>
                        <Button variant="outline" size="icon">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Nenhum serviço encontrado</h3>
                <p className="text-muted-foreground">
                  Tente ajustar seus filtros ou termos de busca.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}