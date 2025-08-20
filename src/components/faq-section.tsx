"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ChevronDown, 
  ChevronRight, 
  HelpCircle, 
  Search,
  Filter,
  Building2,
  Zap,
  Cpu,
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const faqCategories = [
  { value: "all", label: "Todas as Categorias", icon: HelpCircle },
  { value: "geral", label: "Geral", icon: HelpCircle },
  { value: "construcao", label: "Construção Civil", icon: Building2 },
  { value: "eletrica", label: "Instalações Elétricas", icon: Zap },
  { value: "tecnologia", label: "Tecnologia", icon: Cpu },
  { value: "seguranca", label: "Segurança", icon: Shield },
  { value: "orcamento", label: "Orçamento", icon: Users },
  { value: "prazos", label: "Prazos", icon: Clock },
];

const faqItems = [
  {
    id: 1,
    question: "Quais serviços vocês oferecem?",
    answer: "Oferecemos uma ampla gama de serviços incluindo construção civil, instalações elétricas, soluções tecnológicas, reformas, manutenção predial e consultoria em segurança do trabalho. Cada serviço é realizado por profissionais qualificados com anos de experiência.",
    category: "geral",
    tags: ["serviços", "construção", "elétrica", "tecnologia"],
    priority: "high"
  },
  {
    id: 2,
    question: "Como posso solicitar um orçamento?",
    answer: "Você pode solicitar um orçamento através do nosso formulário online, por telefone ou email. Basta preencher seus dados e descrever o serviço que precisa. Nossa equipe entrará em contato em até 24 horas úteis com uma proposta detalhada.",
    category: "orcamento",
    tags: ["orçamento", "contato", "proposta"],
    priority: "high"
  },
  {
    id: 3,
    question: "Qual é o prazo médio para execução dos serviços?",
    answer: "Os prazos variam conforme o tipo e porte do serviço. Pequenos serviços podem ser concluídos em 1-3 dias, enquanto obras maiores podem levar de 6 meses a 1 ano. Sempre fornecemos um cronograma detalhado no orçamento.",
    category: "prazos",
    tags: ["prazo", "tempo", "execução"],
    priority: "high"
  },
  {
    id: 4,
    question: "Vocês atendem em todo o Brasil?",
    answer: "Atuamos principalmente na região de São Paulo, mas podemos atender em outros estados dependendo do porte do projeto. Para projetos de grande porte, nossa equipe pode se deslocar para outras localidades.",
    category: "geral",
    tags: ["atendimento", "localidade", "região"],
    priority: "medium"
  },
  {
    id: 5,
    question: "Quais materiais vocês utilizam nas obras?",
    answer: "Trabalhamos apenas com materiais de alta qualidade e que seguem as normas técnicas brasileiras. Todos os materiais possuem certificação de qualidade e garantia do fabricante. Também podemos trabalhar com materiais especificados pelo cliente.",
    category: "construcao",
    tags: ["materiais", "qualidade", "normas"],
    priority: "medium"
  },
  {
    id: 6,
    question: "As instalações elétricas seguem as normas de segurança?",
    answer: "Sim, todas as nossas instalações elétricas seguem rigorosamente a NR 10 e outras normas aplicáveis. Nossos profissionais são qualificados e atualizados sobre as normas de segurança, garantindo instalações seguras e dentro dos padrões técnicos.",
    category: "eletrica",
    tags: ["segurança", "NR 10", "normas"],
    priority: "high"
  },
  {
    id: 7,
    question: "Vocês oferecem serviços de automação residencial?",
    answer: "Sim, oferecemos soluções completas de automação residencial incluindo iluminação inteligente, controle de temperatura, sistemas de segurança, automação de portões e integração com assistentes de voz. Projetamos e instalamos sistemas personalizados conforme sua necessidade.",
    category: "tecnologia",
    tags: ["automação", "smart home", "residencial"],
    priority: "medium"
  },
  {
    id: 8,
    question: "Os serviços têm garantia?",
    answer: "Sim, todos os nossos serviços possuem garantia que varia conforme o tipo de serviço. Construção civil tem garantia de 5 anos, instalações elétricas 2 anos, e serviços tecnológicos 1 ano. A garantia cobre defeitos de execução e materiais.",
    category: "geral",
    tags: ["garantia", "qualidade", "assistência"],
    priority: "high"
  },
  {
    id: 9,
    question: "Como funciona o pagamento dos serviços?",
    answer: "Trabalhamos com diversas formas de pagamento: dinheiro, transferência bancária, cartão de crédito (parcelado em até 12x), e para projetos maiores podemos oferecer condições especiais de pagamento. O cronograma de pagamento é definido no contrato.",
    category: "orcamento",
    tags: ["pagamento", "formas", "condições"],
    priority: "medium"
  },
  {
    id: 10,
    question: "Vocês possuem atendimento de emergência?",
    answer: "Sim, oferecemos atendimento 24h para emergências elétricas e problemas urgentes em manutenção predial. Nosso número de emergência está disponível no site e atendemos rapidamente para minimizar riscos e prejuízos.",
    category: "seguranca",
    tags: ["emergência", "24h", "urgência"],
    priority: "high"
  },
  {
    id: 11,
    question: "É necessário algum tipo de licença ou alvará para as obras?",
    answer: "Sim, para obras maiores é necessário obter as licenças e alvarás junto à prefeitura. Ajudamos nossos clientes a obter toda a documentação necessária, incluindo projetos arquitetônicos, cálculos estruturais e documentos para aprovação.",
    category: "construcao",
    tags: ["licença", "alvará", "documentação"],
    priority: "medium"
  },
  {
    id: 12,
    question: "Vocês fazem manutenção preventiva?",
    answer: "Sim, oferecemos planos de manutenção preventiva para edifícios, indústrias e residências. A manutenção preventiva ajuda a evitar problemas maiores, reduz custos a longo prazo e garante o bom funcionamento das instalações.",
    category: "manutencao",
    tags: ["manutenção", "preventiva", "planos"],
    priority: "medium"
  }
];

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const highPriorityFAQs = filteredFAQs.filter(item => item.priority === "high");
  const mediumPriorityFAQs = filteredFAQs.filter(item => item.priority === "medium");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Encontre respostas rápidas para as dúvidas mais comuns sobre nossos serviços.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar perguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {faqCategories.map(category => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.value)}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.label}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-sm text-muted-foreground">
            {filteredFAQs.length} pergunta{filteredFAQs.length !== 1 ? 's' : ''} encontrada{filteredFAQs.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {highPriorityFAQs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
                Perguntas Mais Frequentes
              </h3>
              <div className="space-y-3">
                {highPriorityFAQs.map(item => (
                  <Card key={item.id} className="border-l-4 border-l-orange-500">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium pr-4">
                            {item.question}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {faqCategories.find(c => c.value === item.category)?.label}
                            </Badge>
                            {expandedItems.has(item.id) ? (
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </button>
                      
                      {expandedItems.has(item.id) && (
                        <div className="px-6 pb-6">
                          <div className="border-t pt-4">
                            <p className="text-muted-foreground mb-4">
                              {item.answer}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {mediumPriorityFAQs.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
                Outras Perguntas
              </h3>
              <div className="space-y-3">
                {mediumPriorityFAQs.map(item => (
                  <Card key={item.id}>
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-medium pr-4">
                            {item.question}
                          </h4>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="text-xs">
                              {faqCategories.find(c => c.value === item.category)?.label}
                            </Badge>
                            {expandedItems.has(item.id) ? (
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </button>
                      
                      {expandedItems.has(item.id) && (
                        <div className="px-6 pb-6">
                          <div className="border-t pt-4">
                            <p className="text-muted-foreground mb-4">
                              {item.answer}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhuma pergunta encontrada</h3>
              <p className="text-muted-foreground mb-4">
                Tente ajustar seus filtros ou termos de busca.
              </p>
              <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>

        {/* Quick Help Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  Nossa equipe está pronta para ajudar. Entre em contato conosco 
                  e tire todas as suas dúvidas pessoalmente.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg">
                    Falar com Especialista
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}