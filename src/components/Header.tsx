'use client'


export default function Header() {


    return (
        <div id='home' className='flex flex-col items-start justify-center min-h-[100vh] '>
            <div className='mb-7.5 ml-1'>
                <h1 className='text-[clamp(var(--fz-sm),5vw,var(--fz-md))] font-normal text-[var(--green)]! '>
                    Hi, my name is
                </h1>
            </div>
            <div className='!m-0'>
                <h2 className=' text-[clamp(40px,_8vw,_80px)]'>
                    Yago Barbosa
                </h2>
            </div>
            <div className='!mt-1.5 !mb-0'>
                <h3 className=' !text-[var(--slate)] text-[clamp(40px,_8vw,_80px)]'>
                    I build things for the web.
                </h3>
            </div>
            <div className=''>
                <p className='mt-5'>Sou desenvolvedor web com foco em back-end, atualmente estou me aprimorando para a stack de front-end utilizando React.</p>
            </div>
            <div className='mt-12.5'>
                <a
                    href="https://example.com"
                    className="border border-[var(--green)] text-[var(--green)] rounded-md py-3 px-4 transition duration-300 hover:bg-[var(--green)] hover:text-black"
                >
                    Download resume
                </a>
            </div>
        </div>
    )
}
