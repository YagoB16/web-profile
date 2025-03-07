import React from 'react'
import bg from '../app/assets/image/bg.jpg'
import { workerData } from '../app/assets/assets'
import Image from 'next/image'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'

function Work() {
  return (
    <div
      id="work"
      className="px-5 py-10 scroll-mt-20 flex flex-col max-sm:items-center"
    >
      <h4 className="text-center mb-2 text-lg">My portfolio</h4>
      <h2 className="text-center text-5xl">My latest work</h2>

      <p className="text-center max-w-3xl mx-auto mt-5 mb-12">
        Desenvolvimento do meu portfolio
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10">
        {workerData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                    relative cursor-pointer
                     group w-50 max-sm:w-70 sm:w-full "
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <div className="bg-[var(--white)] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 !p-5 flex items-center justify-between duration-500 group-hover:bottom-7 !text-[var(--slate)]">
              <div>
                <h2 className="!text-zinc-700 font-semibold">
                  {project.title}
                </h2>
                <p className="!text-gray-700 text-sm">{project.description}</p>
              </div>
              <div>
                <ArrowRightIcon size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] !border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[var(--light-slate)] duration-500'>
        Show more <ArrowRight size={16} />
      </a>
    </div>
  )
}

export default Work
