import Header from '@/src/components/Header'

export default function Home() {
  return (
    <>
      <Header />

      {/* Conteúdo principal (Centralizado) */}
      <main className="flex-1 flex justify-center items-center h-[100dhv] bg-gray-100">
       main
      </main>

      <footer className='flex items-center justify-between bg-amber-300'>
        Footer
      </footer>
    </>
  )
}
