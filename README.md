# Projeto Portfolio - Yago Barbosa

## 🏗️ Arquitetura do Projeto

### Estrutura de Diretórios
```
web-profile/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx          # Página sobre (não utilizada na home)
│   │   ├── assets/               # Imagens e recursos estáticos
│   │   ├── globals.css           # Estilos globais e variáveis CSS
│   │   ├── layout.tsx            # Layout raiz da aplicação
│   │   └── page.tsx              # Página principal (Home)
│   └── components/
│       ├── ui/
│       │   └── skeleton.tsx      # Componente Skeleton do shadcn/ui
│       ├── About.tsx             # Seção sobre
│       ├── Experience.tsx        # Componente vazio (não implementado)
│       ├── Footer.tsx            # Rodapé
│       ├── Header.tsx            # Seção hero/banner principal
│       ├── Layout.tsx            # Layout wrapper
│       ├── NavBar.tsx            # Navegação principal
│       ├── Reveal.tsx            # Componente de animações
│       ├── Service.tsx           # Seção de serviços
│       └── Work.tsx              # Seção de trabalhos/projetos
├── components/
│   └── ui/
│       └── skeleton.tsx          # Duplicação do componente skeleton
├── lib/
│   └── utils.ts                  # Utilitários (cn function)
├── components.json               # Configuração do shadcn/ui
├── eslint.config.mjs            # Configuração ESLint
├── next.config.ts               # Configuração Next.js
├── package.json                 # Dependências e scripts
├── postcss.config.mjs           # Configuração PostCSS
├── tailwind.config.js           # Configuração Tailwind CSS
└── tsconfig.json                # Configuração TypeScript
```

### Padrões Arquiteturais Utilizados
- **App Router (Next.js 13+)**: Estrutura baseada em `app/` directory
- **Component-Based Architecture**: Componentes React reutilizáveis
- **Single Page Application (SPA)**: Navegação por seções com scroll suave
- **Responsive Design**: Layout adaptável para diferentes dispositivos
- **Animation System**: Sistema de animações com Framer Motion

## ⚙️ Configuração do Ambiente

### Versões e Compatibilidade
- **Node.js**: Compatível com versões LTS (recomendado 18+)
- **Next.js**: 15.2.3
- **React**: 19.0.0
- **TypeScript**: 5.x

### Scripts de Desenvolvimento
```bash
# Desenvolvimento com Turbopack
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start

# Linting
npm run lint
```

### Configurações Importantes

#### ESLint
- Configuração baseada no padrão Next.js
- Desabilita regras específicas como `react/no-unescaped-entities`
- Configuração moderna usando flat config

#### Tailwind CSS
- Versão 4.0.9 (versão mais recente)
- Configuração customizada com cores do tema
- Integração com PostCSS
- Suporte a variáveis CSS customizadas

#### TypeScript
- Configuração strict ativada
- Suporte a JSX preserve
- Paths mapping configurado para `@/*`

## 🛠️ Tecnologias Utilizadas

### Core Framework
- **Next.js 15.2.3**: Framework React para produção
- **React 19.0.0**: Biblioteca para interfaces de usuário
- **TypeScript 5**: Superset tipado do JavaScript

### Styling & UI
- **Tailwind CSS 4.0.9**: Framework CSS utilitário
- **PostCSS**: Processamento de CSS
- **Framer Motion 12.9.2**: Biblioteca de animações
- **shadcn/ui**: Componentes UI (Skeleton Labs integration)
- **Boxicons**: Biblioteca de ícones
- **Lucide React**: Ícones SVG para React

### Utilitários
- **clsx & tailwind-merge**: Manipulação condicional de classes CSS
- **class-variance-authority**: Sistema de variantes para componentes
- **tw-animate-css**: Animações CSS adicionais

### Desenvolvimento
- **ESLint**: Linting de código
- **PostCSS**: Processamento de CSS
- **Turbopack**: Build tool moderna para desenvolvimento

### Tema e Design System
- **Paleta de Cores Customizada**: Sistema baseado em navy/slate
- **Variáveis CSS**: Sistema robusto de design tokens
- **Dark Theme**: Suporte nativo a tema escuro
- **Typography System**: Sistema tipográfico com fontes mono

## 📦 Instruções de Deploy

### Pré-requisitos
1. Node.js 18+ instalado
2. npm ou yarn como gerenciador de pacotes
3. Git para versionamento

### Deploy Local
```bash
# 1. Clonar o repositório
git clone [url-do-repositorio]
cd web-profile

# 2. Instalar dependências
npm install

# 3. Executar em desenvolvimento
npm run dev

# 4. Build para produção
npm run build

# 5. Testar build localmente
npm run start
```

### Deploy em Vercel (Recomendado)
```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Fazer login na Vercel
vercel login

# 3. Deploy
vercel --prod
```

### Deploy em Netlify
```bash
# 1. Build do projeto
npm run build

# 2. Deploy da pasta .next
# Configurar build command: npm run build
# Configurar publish directory: .next
```

### Deploy em Outras Plataformas
- **Configuração de Build**: `npm run build`
- **Diretório de Output**: `.next/`
- **Node.js Version**: 18+
- **Environment Variables**: Não há variáveis específicas configuradas

### Variáveis de Ambiente
Atualmente o projeto não utiliza variáveis de ambiente específicas, mas pode ser necessário configurar:
```env
# Exemplo para Analytics (opcional)
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-id

# Exemplo para domínio personalizado
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

### Otimizações para Produção
- **Image Optimization**: Configurado via Next.js automaticamente
- **Font Optimization**: Usando next/font com Geist
- **Bundle Analysis**: Adicionar `@next/bundle-analyzer` se necessário
- **SEO**: Metadados básicos configurados no layout

### Monitoramento e Performance
- **Next.js Analytics**: Pode ser habilitado via Vercel
- **Web Vitals**: Integração nativa do Next.js
- **Error Tracking**: Considerar Sentry para produção

