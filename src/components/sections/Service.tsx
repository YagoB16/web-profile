import React from "react";
import { serviceData } from "@/src/app/assets/assets";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

interface SectionProps {
  id: string;
}

function Service({ id }: SectionProps) {
  const { t } = useLanguage();

  return (
    <section id={id} className="px-5 py-10 scroll-mt-20 min-h-[80vh]">
      <h2 className="text-center !text-[#8892b0] text-5xl">
        {t("services.title")}
      </h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        {t("services.description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer shadow-black  hover:bg-[var(--green-tint)] hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 !text-[#8892b0]">{title}</h3>
            <p className="text-sm !text-[#8892b0] leading-5">
              {description}
            </p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
