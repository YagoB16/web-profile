'use client'

import { motion } from "framer-motion"
import { useLanguage } from '@/src/contexts/LanguageContext'

interface SectionProps {
  id: string
}

export default function Hero({ id }: SectionProps) {
  const { t } = useLanguage()

  return (
    <motion.section
      id={id}
      className="px-5 py-10 scroll-mt-20 min-h-[120vh] lg:min-h-[90vh]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <section
        id={id}
        className="flex flex-col items-start justify-center min-h-[100vh] ease-in"
      >
        <div className="mb-7.5 ml-1">
          <h1 className="text-[clamp(var(--fz-sm),5vw,var(--fz-md))] font-normal text-[var(--green)]! ">
            {t('hero.greeting')}
          </h1>
        </div>
        <div className="!m-0">
          <h2 className=" text-[clamp(40px,_8vw,_80px)]">
            {t('hero.name')}
          </h2>
        </div>
        <div className="!mt-1.5 !mb-0">
          <h3 className=" !text-[var(--slate)] text-[clamp(40px,_8vw,_80px)]">
            {t('hero.subtitle')}
          </h3>
        </div>
        <div className="">
          <p className="mt-5">
            {t('hero.description')}
          </p>
        </div>
        <div className="mt-12.5">
          <a
            href="https://example.com"
            className="border border-[var(--green)] text-[var(--green)] rounded-md py-3 px-4 transition duration-300 hover:bg-[var(--green)] hover:text-black"
          >
            {t('hero.download_resume')}
          </a>
        </div>
      </section>
    </motion.section>
  )
}
