'use client'
import Header from '@/src/components/Header'
import About from '../components/About'
import NavBar from '../components/NavBar'
import Service from '../components/Service'
import Work from '../components/Work'
import Footer from '@/src/components/Footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <Header id="home" />
      <About id="about" />
      <Service id="services" />
      <Work id="work" />
      <Footer />
    </>
  )
}
