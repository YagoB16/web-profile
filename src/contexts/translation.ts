import { Language } from "@/src/contexts/LanguageContext";

// Tipo que define a estrutura do objeto de traduções
interface TranslationKeys {
  // NavBar
  "nav.home": string;
  "nav.about": string;
  "nav.services": string;
  "nav.work": string;
  "nav.contact": string;

  "tango.tango": string;

  // Hero Section
  "hero.greeting": string;
  "hero.name": string;
  "hero.subtitle": string;
  "hero.description": string;
  "hero.download_resume": string;

  // About Section
  "about.introduction": string;
  "about.title": string;
  "about.description.first_paragrafh": string;
  "about.description.second_paragrafh": string;
  "about.tools_title": string;

  // Services Section
  "services.subtitle": string;
  "services.title": string;
  "services.description": string;
  "services.read_more": string;

  // Work Section
  "work.subtitle": string;
  "work.title": string;
  "work.description": string;
  "work.show_more": string;

  // Footer
  "footer.copyright": string;

  // Common
  "common.loading": string;
  "common.error": string;
}

// Tipo que mapeia o idioma (Language) para o conjunto de chaves (TranslationKeys)
export type Translations = Record<Language, TranslationKeys>;

export const translations: Translations = {
  pt: {
    // NavBar
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.work": "Trabalhos",
    "nav.contact": "Contato",

    "tango.tango": "Ola Yango",
    // Hero Section
    "hero.greeting": "Olá, meu nome é",
    "hero.name": "Yago Barbosa",
    "hero.subtitle": "Eu construo coisas para a web.",
    "hero.description":
      "Desenvolvedor Web com experiência na construção de páginas e aplicações web completas. Minhas habilidades incluem o desenvolvimento de interfaces modernas e responsivas com React no front-end e a criação de APIs robustas e escaláveis utilizando Node.js, Express e PostgreSQL no back-end.",
    "hero.download_resume": "Baixar currículo",

    // About Section
    "about.introduction": "Apresentação",
    "about.title": "Sobre Mim",
    "about.description.first_paragrafh":
      "Meu objetivo é ampliar meus conhecimentos e evoluir como Desenvolvedor FullStack, com foco em React e novas tecnologias do ecossistema web.",
    "about.description.second_paragrafh":
      "Tenho experiência em manutenção e integração de APIs, colaborando em projetos de software, criando soluções escaláveis e dinâmicas.",
    "about.tools_title": "Ferramentas que uso",

    // Services Section
    "services.subtitle": "O que eu ofereço",
    "services.title": "Meus serviços",
    "services.description":
      "Sou um desenvolvedor Backend de São Paulo, BR com 3 anos de experiência em sistemas B2B.",
    "services.read_more": "Ler mais",

    // Work Section
    "work.subtitle": "Meu portfólio",
    "work.title": "Meus trabalhos recentes",
    "work.description": "Desenvolvimento do meu portfólio",
    "work.show_more": "Mostrar mais",

    // Footer
    "footer.copyright": "Yago Barbosa Portfolio.",

    // Common
    "common.loading": "Carregando...",
    "common.error": "Erro",
  },
  en: {
    // NavBar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.contact": "Contact",

    "tango.tango": "Hello Yango",
    // Hero Section
    "hero.greeting": "Hi, my name is",
    "hero.name": "Yago Barbosa",
    "hero.subtitle": "I build things for the web.",
    "hero.description":
      "Web developer with experience building complete web pages and applications. My skills include developing modern, responsive interfaces with React on the front end and creating robust, scalable APIs using Node.js, Express, and PostgreSQL on the back end.",
    "hero.download_resume": "Download resume",

    // About Section
    "about.introduction": "Introduction",
    "about.title": "About Me",
    "about.description.first_paragrafh":
      "My goal is to expand my knowledge and evolve as a FullStack Developer, focusing on React and new technologies in the web ecosystem.",
    "about.description.second_paragrafh":
      "I have experience in API maintenance and integration, collaborating on software projects, creating scalable and dynamic solutions.",
    "about.tools_title": "Tools I use",

    // Services Section
    "services.subtitle": "What I offer",
    "services.title": "My services",
    "services.description":
      "I am a Backend developer from São Paulo, BR with 3 years of experience in B2B systems.",
    "services.read_more": "Read more",

    // Work Section
    "work.subtitle": "My portfolio",
    "work.title": "My latest work",
    "work.description": "Development of my portfolio",
    "work.show_more": "Show more",

    // Footer
    "footer.copyright": "Yago Barbosa Portfolio.",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
  },
};
