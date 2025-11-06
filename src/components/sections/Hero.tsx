"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/src/contexts/LanguageContext";
import { TypeAnimation } from "react-type-animation";
interface SectionProps {
  id: string;
}

export default function Hero({ id }: SectionProps) {
  const { t } = useLanguage();

  return (
    <motion.section
      id={id}
      className="px-5 py-10 scroll-mt-20 min-h-[120vh] lg:min-h-[90vh]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <section
        id={id}
        className="flex flex-col items-start justify-center min-h-[100vh] ease-in w-full"
      >
        {/* Greeting - Altura fixa */}
        <div className="mb-7.5 ml-1 h-8 flex items-end">
          <h1 className="text-[clamp(var(--fz-sm),5vw,var(--fz-md))] font-normal text-[var(--green)]">
            {t("hero.greeting")}
          </h1>
        </div>

        {/* Nome - Altura fixa */}
        <div className="!m-0 h-22 inline-block items-center overflow-hidden whitespace-nowrap font-mono">
          <h2 className="text-[clamp(40px,_8vw,_80px)] leading-none">

             <TypeAnimation
              sequence={[t("hero.name"), 1000, " ", 1000]}
              speed={5}
              repeat={Infinity}
            />
          </h2>
        </div>

        {/* Subtítulo - Container com altura mínima fixa */}
        <div className="!mt-2.5 !mb-0 min-h-[80px] flex items-center">
          <h3 className="!text-[var(--slate)] text-outline text-[clamp(32px,_6vw,_65px)] leading-tight max-w-4xl">
               {t("hero.subtitle")}
          </h3>
        </div>

        {/* Descrição - Container com altura fixa para evitar variação */}
        <div className="min-h-[120px] flex items-start pt-5 max-w-3xl">
          <p className="text-[var(--slate)] leading-relaxed text-lg">
            {t("hero.description")}
          </p>
        </div>

        {/* Botão - Altura padronizada */}
        <div className="mt-12.5">
          <a
            href="/Yago_Barbosa_Currículo.pdf"
            className="inline-flex items-center justify-center relative group border border-[var(--green)] text-[var(--green)] rounded-md py-4 px-6 font-medium min-w-[180px] text-center z-0 overflow-hidden transition-colors duration-500"
          >
            <span className="absolute top-0 left-0 w-0 h-full bg-[var(--green)] z-[-1] transition-all duration-500 group-hover:w-full"></span>

            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              {t("hero.download_resume")}
            </span>
          </a>
        </div>
      </section>
    </motion.section>
  );
}
