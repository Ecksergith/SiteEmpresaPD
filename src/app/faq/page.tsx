import Header from "@/components/header";
import Footer from "@/components/footer";
import FAQSection from "@/components/faq-section";

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Perguntas Frequentes
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Encontre respostas rápidas para as dúvidas mais comuns sobre nossos serviços.
              </p>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}