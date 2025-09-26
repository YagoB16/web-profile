import React from 'react'
import instaIcon from '@/src/app/assets/insta_icon.png'
import logoPlayboy from '@/src/app/assets/logo-playboy.png'
import mailIcon from '@/src/app/assets/mail_icon.png'

import Image from 'next/image'
function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={logoPlayboy} alt="" className="w-36 mx-auto mb-2 " />

                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={mailIcon} alt="" className="w-6" />
                    ybarbosa1608@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400  mt-12 py-6'>
                <p> © {new Date().getFullYear()} Yago Barbosa Portfolio.</p>
                <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                    <li>
                        <a target='_blank' rel="noreferrer" href="https://github.com/YagoB16">Github</a>
                    </li>
                    <li>
                        <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/yago-barbosa-35762b219/">LinkedIn</a>
                    </li>
                    <li>
                        <a target='_blank' rel="noreferrer" href="https://www.instagram.com/yy.agoo/">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
