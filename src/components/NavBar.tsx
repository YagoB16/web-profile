'use client'

import { AlignJustifyIcon } from 'lucide-react'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import ImageLogo from '../app/assets/logo.svg'
import { useState } from 'react'

export default function NavBar() {
    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isUpNav, setIsUpNav] = useState(false);

    const divRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const handleMouseOver = () => {
            setIsUpNav(!isUpNav);
        };

        const handleMouseOut = () => {
            setIsUpNav(isUpNav);
        };


    }, [isUpNav]);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 20) {
                setIsScroll(true)
            }
        })
    })
    return (
        <div ref={divRef} className={`fixed z-1 left-0 right-0 max-w-full flex items-center h-[var(--nav-height)] bg-[var(--navy)] min-h-12  ${isScroll ? " bg-[var(--navy)] opacity-100 shadow-sm drop-shadow-md" : ""}  font-semibold !text-[var(--lightest-slate)] md:px-10 px-5 `}>
            <nav className="flex w-full justify-between items-center gap-8 z-50 ">
                <div>
                    <Image src={ImageLogo} alt="Logo" width={140} height={40} />
                </div>

                <div className='hidden md:flex items-center'>
                    <ul className={`flex gap-6 text-base opacity-100 ${isScroll ? "" : "bg-[var(--navy)] opacity-50"}`}>
                        <li>
                            <a href="#home" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#work" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                                Work
                            </a>
                        </li>
                        <li>
                            <a href="" className="p-3 rounded-md transition-all hover:text-[var(--green)]">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="border border-[var(--green)] rounded-md py-2 px-4 transition duration-300 hover:bg-[var(--green)] hover:text-[var(--gray-700)] ml-2.5"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>

                </div>

                <div className='md:hidden'>
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
                                <a href="#about" className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                                    About
                                </a>
                            </li>
                            <li className="text-center">
                                <a href="#services" className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                                    Services
                                </a>
                            </li>
                            <li className="text-center">
                                <a href="#work" className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                                    Work
                                </a>
                            </li>
                            <li className="text-center">
                                <a href="" className="p-3 block rounded-md transition-all hover:text-[var(--green)]">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </aside>
                </div>
            </nav>
        </div >
    )
}
