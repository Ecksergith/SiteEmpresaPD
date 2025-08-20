"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Filter,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Building2,
  Zap,
  Cpu,
  Star
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "As Tendências da Construção Civil para 2024",
    excerpt: "Descubra as principais inovações e tendências que estão moldando o futuro da construção civil no Brasil.",
    content: "A construção civil está passando por uma revolução tecnológica...",
    author: "Carlos Silva",
    date: "15 de março de 2024",
    readTime: "8 min",
    category: "construcao",
    tags: ["construção civil", "inovação", "tecnologia"],
    featured: true,
    image: "/api/placeholder/400/250",
    views: 1250
  },
  {
    id: 2,
    title: "Segurança Elétrica Residencial: Guia Completo",
    excerpt: "Aprenda tudo sobre segurança elétrica em residências e proteja sua família contra riscos.",
    content: "A segurança elétrica é um aspecto fundamental em qualquer residência...",
    author: "Roberto Almeida",
    date: "12 de março de 2024",
    readTime: "12 min",
    category: "eletrica",
    tags: ["segurança", "elétrica", "residencial"],
    featured: true,
    image: "/api/placeholder/400/250",
    views: 890
  },
  {
    id: 3,
    title: "Automação Residencial: O Futuro é Agora",
    excerpt: "Como a automação residencial está transformando casas em lares inteligentes e eficientes.",
    content: "A automação residencial, também conhecida como domótica...",
    author: "Mariana Costa",
    date: "10 de março de 2024",
    readTime: "10 min",
    category: "tecnologia",
    tags: ["automação", "smart home", "tecnologia"],
    featured: false,
    image: "/api/placeholder/400/250",
    views: 756
  },
  {
    id: 4,
    title: "5 Dicas para Reformar seu Banheiro com Orçamento Limitado",
    excerpt: "Reformas criativas e econômicas para transformar seu banheiro sem gastar muito.",
    content: "Reformar um banheiro não precisa ser um processo caro...",
    author: "Ana Santos",
    date: "8 de março de 2024",
    readTime: "6 min",
    category: "reformas",
    tags: ["reformas", "banheiro", "orçamento"],
    featured: false,
    image: "/api/placeholder/400/250",
    views: 623
  },
  {
    id: 5,
    title: "Manutenção Predial: Como Evitar Dores de Cabeça",
    excerpt: "Guia completo sobre manutenção predial preventiva e como economizar a longo prazo.",
    content: "A manutenção predial é essencial para garantir a durabilidade...",
    author: "Carlos Silva",
    date: "5 de março de 2024",
    readTime: "9 min",
    category: "manutencao",
    tags: ["manutenção", "predial", "prevenção"],
    featured: false,
    image: "/api/placeholder/400/250",
    views: 545
  },
  {
    id: 6,
    title: "NR 10: Entenda as Normas de Segurança em Instalações Elétricas",
    excerpt: "Guia completo sobre a NR 10 e suas aplicações práticas em obras e instalações.",
    content: "A Norma Regulamentadora 10 (NR 10) estabelece os requisitos...",
    author: "Roberto Almeida",
    date: "3 de março de 2024",
    readTime: "15 min",
    category: "seguranca",
    tags: ["NR 10", "segurança", "normas"],
    featured: true,
    image: "/api/placeholder/400/250",
    views: 445
  }
];

const categories = [
  { value: "all", label: "Todos os Artigos" },
  { value: "construcao", label: "Construção Civil" },
  { value: "eletrica", label: "Instalações Elétricas" },
  { value: "tecnologia", label: "Tecnologia" },
  { value: "reformas", label: "Reformas" },
  { value: "manutencao", label: "Manutenção" },
  { value: "seguranca", label: "Segurança" },
];

const popularTags = [
  "construção civil", "segurança", "tecnologia", "inovação", "sustentabilidade", 
  "reformas", "elétrica", "automação", "manutenção", "NR 10"
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const popularPosts = blogPosts.sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4 text-primary-foreground">
                Blog
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Dicas e Artigos Profissionais
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Acompanhe nossas publicações sobre construção civil, instalações 
                elétricas, tecnologia e muito mais.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-muted/50 sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar artigos..."
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

              {/* Results Count */}
              <div className="text-sm text-muted-foreground">
                {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Posts */}
              {selectedCategory === "all" && searchTerm === "" && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Artigos em Destaque
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredPosts.slice(0, 2).map(post => (
                      <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                          <span className="text-muted-foreground">Imagem do Artigo</span>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary">{post.category}</Badge>
                            {post.featured && (
                              <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600">
                                Destaque
                              </Badge>
                            )}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* All Posts */}
              <section>
                <h2 className="text-2xl font-bold mb-6">
                  {selectedCategory === "all" ? "Todos os Artigos" : categories.find(c => c.value === selectedCategory)?.label}
                </h2>
                <div className="space-y-6">
                  {filteredPosts.map(post => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="w-32 h-24 bg-muted rounded-lg flex-shrink-0 flex items-center justify-center">
                            <span className="text-xs text-muted-foreground text-center">Imagem</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="secondary">{post.category}</Badge>
                              {post.featured && (
                                <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600">
                                  Destaque
                                </Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1">
                                  <User className="w-4 h-4" />
                                  <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{post.readTime}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <TrendingUp className="w-4 h-4" />
                                  <span>{post.views}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
                    <p className="text-muted-foreground">
                      Tente ajustar seus filtros ou termos de busca.
                    </p>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Artigos Populares</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {popularPosts.map(post => (
                      <div key={post.id} className="flex items-start space-x-3 cursor-pointer hover:bg-muted/50 p-2 rounded">
                        <div className="w-16 h-16 bg-muted rounded flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs text-muted-foreground">Imagem</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{post.views} visualizações</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Filter className="w-5 h-5" />
                    <span>Categorias</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.slice(1).map(category => (
                      <div 
                        key={category.value}
                        className="flex items-center justify-between p-2 hover:bg-muted/50 rounded cursor-pointer"
                      >
                        <span className="text-sm">{category.label}</span>
                        <Badge variant="outline" className="text-xs">
                          {blogPosts.filter(p => p.category === category.value).length}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="w-5 h-5" />
                    <span>Tags Populares</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>Newsletter</span>
                  </CardTitle>
                  <CardDescription>
                    Receba nossos melhores artigos diretamente no seu email.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="Seu melhor email" />
                    <Button className="w-full">
                      Inscrever-se
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Respeitamos sua privacidade. Cancele a qualquer momento.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Services Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Nossos Serviços</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-2 hover:bg-muted/50 rounded cursor-pointer">
                      <Building2 className="w-5 h-5 text-primary" />
                      <span className="text-sm">Construção Civil</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-muted/50 rounded cursor-pointer">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-sm">Instalações Elétricas</span>
                    </div>
                    <div className="flex items-center space-x-3 p-2 hover:bg-muted/50 rounded cursor-pointer">
                      <Cpu className="w-5 h-5 text-primary" />
                      <span className="text-sm">Tecnologia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Precisa de Ajuda Profissional?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Nossa equipe está pronta para ajudar com seu projeto. 
                Entre em contato e solicite um orçamento gratuito.
              </p>
              <Button size="lg" variant="secondary">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}