import Header from '@/src/components/Header'
import { Instagram, Github, Linkedin } from 'lucide-react'
export default function Home() {
  return (
    <>
      <Header />

      {/* Conteúdo principal (Centralizado) */}
      <main className="flex-1 flex justify-center items-center min-h-screen bg-gray-100">
        Conteúdo principal
      </main>
    </>
  )
}
