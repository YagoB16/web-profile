import React, { useState, useEffect } from "react";
import Image from "next/image";
import YagoIcon from "@/src/app/assets/yagueira-de-penny.jpg";
import { infoList, toolsData } from "@/src/app/assets/assets";
import { Skeleton } from "@/src/components/ui/skeleton";
import { useLanguage } from "@/src/contexts/LanguageContext";

interface SectionProps {
  id: string;
}

function About({ id }: SectionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { t } = useLanguage();

  // Simula carregamento
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id={id}
      className="px-5 py-10 scroll-mt-20 min-h-[120vh] lg:min-h-[90vh]"
    >
      <h4 className="text-center mb-2 text-lg">{t("about.introduction")}</h4>
      <h2 className="text-center text-5xl">{t("about.title")}</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Skeleton para imagem com variant específico */}
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          {!imageLoaded && (
            <Skeleton
              variant="image"
              className="w-full h-64 sm:h-80 rounded-3xl"
            />
          )}
          <Image
            src={YagoIcon}
            alt="Icon Yago"
            className={`w-full rounded-3xl transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        <div className="flex-1">
          {/* Skeleton para texto com variant text */}
          {isLoading ? (
            <div className="mb-10 max-w-3xl space-y-3">
              <Skeleton variant="text" className="h-4 w-full" />
              <Skeleton variant="text" className="h-4 w-full" />
              <Skeleton variant="text" className="h-4 w-3/4" />
              <Skeleton variant="text" className="h-4 w-5/6" />
            </div>
          ) : (
            <div>
              <p className="mb-10 max-w-3xl">
                {t("about.description.first_paragrafh")}
              </p>
              <p className="mb-10 max-w-3xl">
                {t("about.description.second_paragrafh")}
              </p>
            </div>
          )}

          {/* Skeleton para cards com variant card */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mb-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 space-y-4"
                >
                  <Skeleton variant="avatar" className="w-7 h-7" />
                  <Skeleton variant="text" className="h-5 w-3/4" />
                  <div className="space-y-2">
                    <Skeleton variant="text" className="h-3 w-full" />
                    <Skeleton variant="text" className="h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              {infoList.map(({ icon, title, description }, index) => (
                <li
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[var(--green-tint)] hover:-translate-y-1 duration-500 shadow-black"
                  key={index}
                >
                  <Image src={icon} alt={title} className="w-7 mt-3" />
                  <h3 className="!my-4 !font-semibold text-[var(--slate)]">
                    {title}
                  </h3>
                  <p className="text-[var(--dark-slate)] !text-sm">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {/* Skeleton para título das ferramentas */}
          {isLoading ? (
            <Skeleton variant="text" className="h-5 w-32 my-6" />
          ) : (
            <h4 className="!my-6 text-[var(--slate)]">Tools I use</h4>
          )}

          {/* Skeleton para ferramentas */}
          {isLoading ? (
            <div className="flex items-center gap-3 sm:gap-5">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Skeleton
                  key={item}
                  variant="card"
                  className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg"
                />
              ))}
            </div>
          ) : (
            <ul className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <li
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                                rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                  key={index}
                >
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
