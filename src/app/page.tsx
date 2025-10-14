"use client";

import About from "@/src/components/sections/About";
import NavBar from "@/src/components/layout/NavBar";
import Service from "@/src/components/sections/Service";

import Footer from "@/src/components/layout/Footer";
import Reveal from "@/src/components/features/Reveal";
import Hero from "@/src/components/sections/Hero";
import { useForm } from "../contexts/FormContext";

export default function Home() {

   const { isFormOpen } = useForm()
   
  return (
    <>
      <NavBar />
      <div
        className={`transition-all duration-300 ${isFormOpen ? "blur-sm" : ""}`}
      >
        <Reveal direction="up">
          <Hero id="home" />
        </Reveal>
        <Reveal direction="left" delay={0.3}>
          <About id="about" />
        </Reveal>
        <Reveal direction="rotate" delay={0.3}>
          <Service id="services" />
        </Reveal>
        {/* <Reveal direction="down" delay={0.3}>
        <Work id="work" />
      </Reveal> */}
      </div>
      <Footer />
    </>
  );
}
