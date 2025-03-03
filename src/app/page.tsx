import Header from '@/src/components/Header'

export default function Home() {
    return (
        <>
            <section className='flex flex-col items-start justify-center min-h-[100vh] '>
                <div className='mb-7.5 ml-1'>
                    <h1 className='text-[clamp(var(--fz-sm),5vw,var(--fz-md))] font-normal text-[var(--green)]! '>
                        Hi, my name is
                    </h1>
                </div>
                <div className='text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
                    <h2 className='!m-0'>
                        Yago Barbosa
                    </h2>
                </div>
                <div className='text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl'>
                    <h3 className='!mt-1.5 !mb-0 !text-[var(--slate)]'>
                        I build things for the web.
                    </h3>
                </div>
                <div className='self-start'>
                    <p className='mt-5'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi possimus ducimus repellendus nihil ipsa odio quidem soluta consectetur expedita aliquam explicabo, eius in eveniet? Delectus incidunt at dolor dolorem est?</p>
                </div>
                <div className='mt-12.5'>
                    <a
                        href="https://example.com"
                        className="border border-[var(--green)] !text-[var(--green)] rounded-md py-3 px-4 transition duration-300 hover:bg-[var(--green)] hover:text-[var(--gray-700)]"
                    >
                        Download PDF
                    </a>
                </div>
            </section>
        </>
    )
}
