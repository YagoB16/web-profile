import React from 'react'
import Image from 'next/image'
import YagoIcon from '@/src/app/assets/yagueira-de-penny.jpg'
import { infoList, toolsData } from './../app/assets/assets'

interface SectionProps {
    id: string;
}


function About({ id }: SectionProps) {
    return (
        <>
            <section id={id} className='px-5 py-10 scroll-mt-20  min-h-[120vh] lg:min-h-[90vh]'>
                <h4 className='text-center mb-2 text-lg'>
                    Introduction
                </h4>
                <h2 className='text-center text-5xl'>
                    About Me
                </h2>

                <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                    <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                        <Image src={YagoIcon} alt='Icon Yago' className='w-full rounded-3xl' />
                    </div>
                    <div className='flex-1'>
                        <p className='mb-10 max-w-3xl'>
                            I am a backend developer with just under 3 years of experience. I am currently improving my Frontend skills. I am part of a team of developers, where I collaborate on the development of software and learn from them.
                        </p>
                        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'>
                            {infoList.map(({ icon, title, description },
                                index) => (
                                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[var(--green-tint)] hover:-translate-y-1 duration-500 shadow-black'

                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    key={index}>
                                    <Image src={icon} alt={title} className='w-7 mt-3' />
                                    <h3 className='!my-4 !font-semibold text-[var(--slate)]'>{title}</h3>
                                    <p className='text-[var(--dark-slate)] !text-sm'>{description}</p>
                                </li>
                            ))}
                        </ul>
                        <h4 className='!my-6 text-[var(--slate)]'>
                            Tools I use
                        </h4>
                        <ul className='flex items-center gap-3 sm:gap-5'>
                            {toolsData.map((tool, index) => (
                                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400
                                rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    key={index}>
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
