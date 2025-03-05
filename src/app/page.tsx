'use client'
import Header from '@/src/components/Header'
import About from '../components/About'
import NavBar from '../components/NavBar'
import Service from '../components/Service'

export default function Home() {
    return (
        <>
            <NavBar />
            <Header />
            <About />
            <Service />
        </>
    )
}
