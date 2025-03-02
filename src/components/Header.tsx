'use client'
import Image from 'next/image'
import ImageLogo from '../app/assets/logo.svg'
import { AlignJustifyIcon } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="flex justify-between items-center bg-[var(--blue-dark)] text-[var(--lightest-slate)] py-6 px-8 lg:px-32 drop-shadow-md">
            {/* Logo */}
            <Image src={ImageLogo} alt="Logo" width={140} height={40} />

            {/* Navegação Desktop */}
            <nav className="hidden md:flex items-center gap-8 ">
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
                className={`fixed md:hidden top-20 left-0 w-full bg-[var(--blue-dark)] flex flex-col items-center gap-6 pb-5 font-semibold text-lg transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
            >

                <ul className="flex flex-col items-center flex-1 w-full gap-6 text-base">
                    <li className="text-center">
                        <a href="https://example.com" className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                            About
                        </a>
                    </li>
                    <li className="text-center">
                        <a href="https://example.com" className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                            Experience
                        </a>
                    </li>
                    <li className="text-center">
                        <a href="https://example.com" className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                            Contact
                        </a>
                    </li>
                </ul>
            </aside>
        </header>
    )
}
