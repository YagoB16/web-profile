'use client'
import Image from 'next/image'
import ImageLogo from '../app/assets/logo.svg'
import { AlignJustifyIcon } from 'lucide-react'
import { useState } from 'react'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="flex justify-between items-center text-black py-6 px-8 lg:px-32 bg-amber-400 drop-shadow-md">
        <div className="">
          <Image src={ImageLogo} alt="" width={140} height={40} />
        </div>
        <nav className="hidden md:flex items-center justify-between gap-8">
          <ol className="flex gap-6 text-base list-decimal list-inside marker:text-[var(--green)]">
            <li className="mx-1">
              <a
                href="https://example.com"
                className="p-3 rounded-md transition-all hover:text-[var(--green)]"
              >
                About
              </a>
            </li>
            <li className="mx-1">
              <a
                href="https://example.com"
                className="p-3 rounded-md transition-all hover:text-[var(--green)]"
              >
                Experience
              </a>
            </li>
            <li className="mx-1">
              <a
                href="https://example.com"
                className="p-3 rounded-md transition-all hover:text-[var(--green)]"
              >
                Contact
              </a>
            </li>
          </ol>

          <div className="border border-[var(--green)] rounded-md flex items-center justify-center py-3 px-4 hover:bg-[var(--green)] hover:text-[var(--gray-700)] transition duration-300">
            <a href="https://example.com" className=" text-[var(--fz-xs)]">
              Resume
            </a>
          </div>
        </nav>
        <AlignJustifyIcon
          className={`md:hidden block text-5xl cursor-pointer ${isMenuOpen ? 'hidden' : ''}`}
          onClick={() => setIsMenuOpen(isMenuOpen)}
        />

        <aside
          className={`fixed md:hidden top-0 right-0 w-60 bottom-0 h-dvh bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
        >
          <li className='list-none w-full text-center p-4 hover:text-[var(--green)] transition-all cursor-pointer'> Ola</li>
        </aside>
      </header>
    </>
  )
}
