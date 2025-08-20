"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    content: "Excelente serviço! A equipe foi profissional, pontual e entregou tudo dentro do prazo. Superou todas as minhas expectativas.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    name: "Ana Santos",
    role: "Gerente de Projetos",
    content: "Contratamos os serviços de instalação elétrica e ficamos impressionados com a qualidade e segurança do trabalho executado.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    name: "Roberto Almeida",
    role: "Proprietário",
    content: "A reforma da minha casa foi feita com cuidado e atenção aos detalhes. Recomendo muito os serviços desta empresa.",
    rating: 4,
    image: "/api/placeholder/60/60",
  },
  {
    name: "Mariana Costa",
    role: "Diretora de TI",
    content: "Soluções tecnológicas modernas e eficientes. A equipe demonstrou grande conhecimento e profissionalismo.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
  {
    name: "José Oliveira",
    role: "Engenheiro",
    content: "Trabalho de construção civil de alta qualidade. Seguiram todas as normas de segurança e entregaram um projeto impecável.",
    rating: 5,
    image: "/api/placeholder/60/60",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  
  if (visibleTestimonials.length < 3) {
    visibleTestimonials.push(...testimonials.slice(0, 3 - visibleTestimonials.length));
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-4">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação de nossos clientes é nossa maior motivação. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 hidden lg:flex"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 hidden lg:flex"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="relative group">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                  
                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center space-x-2 mt-6 lg:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-6 lg:hidden">
            <Button variant="outline" size="sm" onClick={prevTestimonial}>
              <ChevronLeft className="w-4 h-4 mr-1" />
              Anterior
            </Button>
            <Button variant="outline" size="sm" onClick={nextTestimonial}>
              Próximo
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg">
            Solicite um Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}