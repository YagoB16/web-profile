"use client";

import { AlignJustifyIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageLogo from "@/src/app/assets/logo.svg";
import LanguageSwitcher from "@/src/contexts/ui/LanguageSwitcher";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function NavBar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "work", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionBottom = rect.bottom;
          const viewportHeight = window.innerHeight;

          if (
            sectionTop < viewportHeight * 0.6 &&
            sectionBottom > viewportHeight * 0.4
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items com traduções
  const menuItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "services", label: t("nav.services") },
    { id: "work", label: t("nav.work") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <div
      className={`fixed z-50 left-0 right-0 max-w-full flex items-center h-[var(--nav-height)] bg-[var(--navy)] min-h-12  ${
        isScroll ? "bg-[var(--navy)] opacity-100 shadow-sm drop-shadow-md" : ""
      } font-semibold !text-[var(--lightest-slate)] md:px-10 px-5`}
    >
      <nav className="flex w-full justify-between items-center gap-8">
        <div>
          <Image src={ImageLogo} alt="Logo" width={140} height={40} />
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex gap-6 text-base">
            {menuItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`p-3 rounded-md transition-all ${
                    activeSection === id
                      ? "text-[var(--green)] font-bold"
                      : "hover:text-[var(--green)]"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden flex items-center gap-2">
          {/* Seletor de Idioma Mobile */}
          <LanguageSwitcher />

          <button
            className="block text-5xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            <AlignJustifyIcon />
          </button>

          <aside
            className={`fixed md:hidden top-20 left-0 w-full bg-[var(--navy)] flex flex-col items-center gap-6 pb-5 font-semibold text-lg transition-transform duration-500 ease-in-out ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <ul className="flex flex-col items-center flex-1 w-full gap-6 text-base">
              {menuItems.map(({ id, label }) => (
                <li key={id} className="text-center">
                  <a
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 block rounded-md transition-all hover:text-[var(--green)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </nav>
    </div>
  );
}
