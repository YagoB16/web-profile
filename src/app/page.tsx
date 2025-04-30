'use client'
import Header from '@/src/components/Header'
import About from '../components/About'
import NavBar from '../components/NavBar'
import Service from '../components/Service'
import Work from '../components/Work'
import Footer from '@/src/components/Footer'
import Reveal from '@/src/components/Reveal'

export default function Home() {
  return (
    <>
      <NavBar />
      <Reveal direction="left">
        <Header id="home" />
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
