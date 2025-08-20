import type { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  noIndex?: boolean;
}

const defaultMetadata: Metadata = {
  title: 'Serviços Profissionais | Construção, Elétrica e Tecnologia',
  description: 'Empresa especializada em prestação de serviços diversos de construção civil, elétrica e tecnologia. Qualidade, segurança e inovação para seu projeto.',
  keywords: ['serviços', 'construção civil', 'elétrica', 'tecnologia', 'orçamento', 'profissionais', 'qualidade'],
  authors: [{ name: 'Serviços Profissionais' }],
  creator: 'Serviços Profissionais',
  publisher: 'Serviços Profissionais',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://servicosprofissionais.com.br',
    siteName: 'Serviços Profissionais',
    title: 'Serviços Profissionais | Construção, Elétrica e Tecnologia',
    description: 'Empresa especializada em prestação de serviços diversos de construção civil, elétrica e tecnologia.',
    images: [
      {
        url: '/hero-banner.jpg',
        width: 1440,
        height: 720,
        alt: 'Serviços Profissionais - Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serviços Profissionais | Construção, Elétrica e Tecnologia',
    description: 'Empresa especializada em prestação de serviços diversos de construção civil, elétrica e tecnologia.',
    images: ['/hero-banner.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://servicosprofissionais.com.br'),
};

export function createSEO(props: SEOProps = {}): Metadata {
  const {
    title,
    description,
    keywords,
    ogImage,
    ogType = 'website',
    canonical,
    noIndex = false,
  } = props;

  const finalTitle = title ? `${title} | Serviços Profissionais` : defaultMetadata.title || 'Serviços Profissionais';
  const finalDescription = description || defaultMetadata.description || 'Empresa especializada em prestação de serviços diversos de construção civil, elétrica e tecnologia.';
  const finalKeywords = keywords ? [...defaultMetadata.keywords!, ...keywords] : defaultMetadata.keywords;

  const metadata: Metadata = {
    ...defaultMetadata,
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType as 'website' | 'article',
      locale: 'pt_BR',
      url: 'https://servicosprofissionais.com.br',
      siteName: 'Serviços Profissionais',
      title: finalTitle,
      description: finalDescription,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: finalTitle as string,
            },
          ]
        : [
            {
              url: '/hero-banner.jpg',
              width: 1440,
              height: 720,
              alt: finalTitle as string,
            },
          ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: finalTitle,
      description: finalDescription,
      images: ogImage ? [ogImage] : defaultMetadata.twitter?.images,
    },
  };

  if (canonical) {
    metadata.alternates = {
      canonical,
    };
  }

  return metadata;
}

export const pageSEO = {
  home: createSEO({
    title: 'Serviços Profissionais de Excelência',
    description: 'Transforme seus projetos em realidade com nossos serviços de construção civil, instalações elétricas e soluções tecnológicas. Qualidade, segurança e inovação.',
    keywords: ['construção civil', 'instalações elétricas', 'tecnologia', 'serviços profissionais', 'qualidade'],
  }),
  
  services: createSEO({
    title: 'Nossos Serviços',
    description: 'Conheça nossos serviços de construção civil, instalações elétricas, tecnologia, reformas, manutenção e segurança. Qualidade e profissionalismo garantidos.',
    keywords: ['serviços', 'construção civil', 'elétrica', 'tecnologia', 'reformas', 'manutenção', 'segurança'],
  }),
  
  quote: createSEO({
    title: 'Solicitar Orçamento',
    description: 'Solicite um orçamento gratuito e sem compromisso para seu projeto. Atendimento rápido e personalizado.',
    keywords: ['orçamento', 'solicitar orçamento', 'cotar serviços', 'preços', 'orçamento gratuito'],
  }),
  
  about: createSEO({
    title: 'Sobre Nós',
    description: 'Conheça nossa história, missão, valores e equipe. Há mais de 15 anos transformando projetos em realidade.',
    keywords: ['sobre nós', 'história', 'missão', 'valores', 'equipe', 'empresa'],
  }),
  
  blog: createSEO({
    title: 'Blog',
    description: 'Acompanhe nossas dicas, artigos e novidades sobre construção civil, instalações elétricas e tecnologia.',
    keywords: ['blog', 'artigos', 'dicas', 'notícias', 'construção', 'elétrica', 'tecnologia'],
  }),
  
  faq: createSEO({
    title: 'Perguntas Frequentes',
    description: 'Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processos.',
    keywords: ['faq', 'perguntas', 'respostas', 'dúvidas', 'ajuda'],
  }),
  
  contact: createSEO({
    title: 'Contato',
    description: 'Entre em contato conosco. Estamos prontos para atender suas necessidades com profissionalismo e rapidez.',
    keywords: ['contato', 'telefone', 'email', 'endereço', 'atendimento'],
  }),
};