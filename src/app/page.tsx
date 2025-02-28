import Header from '@/src/components/Header'
import { Instagram, Github, Linkedin } from 'lucide-react';
export default function Home() {
    return (
        <>
            <Header />
            <div className="flex">
                {/* Sidebar (Lateral Esquerda) */}
                <div className="w-10 fixed bottom-0 left-10 z-10 text-[var(--light-slate)]">
                    <ul className='flex flex-col items-center'>
                        <li>
                            <Instagram />
                        </li>
                        <li>
                            <Github />
                        </li>
                        <li>
                            <Linkedin />
                        </li>
                    </ul>
                </div>

                {/* Conteúdo principal (Centralizado) */}
                <main className="flex-1 flex justify-center items-center min-h-screen bg-gray-100">
                    Conteúdo principal
                </main>
            </div>


        </>
    )
}
