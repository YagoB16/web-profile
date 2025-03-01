'use client'
import Image from 'next/image'
import ImageLogo from '../app/assets/logo.svg'
import { AlignJustifyIcon } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="flex justify-between items-center text-black py-6 px-8 lg:px-32 bg-amber-400 drop-shadow-md">
            {/* Logo */}
            <Image src={ImageLogo} alt="Logo" width={140} height={40} />

            {/* Navegação Desktop */}
            <nav className="hidden md:flex items-center gap-8">
                <ul className="flex gap-6 text-base">
                    <li>
                        <a href="https://example.com" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="https://example.com" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="https://example.com" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Botão Resume */}
                <a
                    href="https://example.com"
                    className="border border-[var(--green)] rounded-md py-3 px-4 transition duration-300 hover:bg-[var(--green)] hover:text-[var(--gray-700)]"
                >
                    Resume
                </a>
            </nav>

            {/* Botão Mobile */}

            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
                className="md:hidden block text-5xl cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Abrir menu"
            >
                <AlignJustifyIcon />
            </button>

            {/* Menu Mobile */}
            <aside
                className={`fixed md:hidden top-20 left-0 w-full h-[100vh] bg-white flex flex-col items-center justify-center gap-6 font-semibold text-lg transition-transform duration-600 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
            >
                <ul className="w-full flex flex-col h-[100vh] items-center justify-center gap-y-6 text-base">
                    <li>
                        <a href="https://example.com" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="https://example.com" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href="https://example.com" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                            Contact
                        </a>
                    </li>
                </ul>
            </aside>

        </header>
    )
}
