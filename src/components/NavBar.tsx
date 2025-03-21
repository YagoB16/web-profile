'use client'

import { AlignJustifyIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ImageLogo from '../app/assets/logo.svg'

export default function NavBar() {
    const [isScroll, setIsScroll] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'services', 'work', 'contact'];
            let currentSection = 'home';



            // biome-ignore lint/complexity/noForEach: <explanation>
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const sectionTop = rect.top;
                    const sectionBottom = rect.bottom;
                    const viewportHeight = window.innerHeight;


                    if (sectionTop < viewportHeight * 0.6 && sectionBottom > viewportHeight * 0.4) {
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);




    return (
        <div className={`fixed z-50 left-0 right-0 max-w-full flex items-center h-[var(--nav-height)] bg-[var(--navy)] min-h-12  ${isScroll ? "bg-[var(--navy)] opacity-100 shadow-sm drop-shadow-md" : ""} font-semibold !text-[var(--lightest-slate)] md:px-10 px-5`}>
            <nav className="flex w-full justify-between items-center gap-8">
                <div>
                    <Image src={ImageLogo} alt="Logo" width={140} height={40} />
                </div>

                <div className="hidden md:flex items-center">
                    <ul className="flex gap-6 text-base">
                        {[
                            { id: 'home', label: 'Home' },
                            { id: 'about', label: 'About' },
                            { id: 'services', label: 'Services' },
                            { id: 'work', label: 'Work' },
                            { id: 'contact', label: 'Contact' }
                        ].map(({ id, label }) => (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={`p-3 rounded-md transition-all ${activeSection === id ? 'text-[var(--green)] font-bold' : 'hover:text-[var(--green)]'}`}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:hidden">
                    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                    <button
                        className="md:hidden block text-5xl cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Abrir menu"
                    >
                        <AlignJustifyIcon />
                    </button>
                    <aside
                        className={`fixed md:hidden top-20 left-0 w-full bg-[var(--navy)] flex flex-col items-center gap-6 pb-5 font-semibold text-lg transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                            }`}
                    >

                        <ul className="flex flex-col items-center flex-1 w-full gap-6 text-base">
                            <li className="text-center">
                                {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                <a href="#about"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                                    About
                                </a>
                            </li>
                            <li className="text-center">
                                {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                <a href="#services"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                                    Services
                                </a>
                            </li>
                            <li className="text-center">
                                {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                <a href="#work"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                                    Work
                                </a>
                            </li>
                            <li className="text-center">
                                {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
                                <a href=""
                                onClick={() => setIsMenuOpen(false)}
                                className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </nav>
        </div>
    );
}
