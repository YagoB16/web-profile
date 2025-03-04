import React from 'react'
import Image from 'next/image'
import YagoIcon from '@/src/app/assets/yagueira-de-penny.jpg'
import { infoList } from './../app/assets/assets'

function About() {
    return (
        <>
            <div id='about' className='px-5 py-10 scroll-mt-20'>
                <h4 className='text-center mb-2 text-lg'>
                    About Me
                </h4>
                <h2 className='text-center text-5xl'>
                    Introduction
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
                        <h4>
                            Tools I use
                        </h4>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
