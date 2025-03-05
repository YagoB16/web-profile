import React from 'react'
import bg from '../app/assets/image/bg.jpg';
import { workerData } from '../app/assets/assets'
import Image from 'next/image'

function Work() {
    return (
        <div id='work' className='px-5 py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>
                My portfolio
            </h4>
            <h2 className='text-center text-5xl'>
                My latest work
            </h2>

            <p className='text-center max-w-3xl mx-auto mt-5 mb-12'>
                Desenvolvimento do meu portfolio
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
                {workerData.map((project, index) => (
                    <div key={index}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                    relative cursor-pointer
                     group w-60 sm:w-full '
                        style={{ backgroundImage: `url(${bg.src})` }}>
                        <div className='bg-[var(--white)] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2>
                                    {project.title}
                                </h2>
                                <p>{project.description}</p>
                            </div>
                            <div>
                                <Image src={project.bgImage} alt={project.title} width={80} height={40} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
