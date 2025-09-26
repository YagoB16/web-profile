'use client'

import About from '@/src/components/sections/About'
import NavBar from '@/src/components/layout/NavBar'
import Service from '@/src/components/sections/Service'
import Work from '@/src/components/sections/Work'
import Footer from '@/src/components/layout/Footer'
import Reveal from '@/src/components/features/Reveal'
import Hero from '@/src/components/sections/Hero'

export default function Home() {
  return (
    <>
      <NavBar />
      <Reveal direction="left">
        <Hero id="home" />
      </Reveal>
      <Reveal direction="zoom" delay={0.3}>
        <About id="about" />
      </Reveal>
      <Reveal direction="rotate" delay={0.3}>
        <Service id="services" />
      </Reveal>
      <Reveal direction="down" delay={0.3}>
        <Work id="work" />
      </Reveal>
      <Footer />
    </>
  )
}
