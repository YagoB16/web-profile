import Image from 'next/image'
import ImageLogo from '../app/assets/logo.svg'
export default function Header() {
  return (
    <>
      <header className="flex top-0 z-11 w-full h-[var(--nav-height)] items-center bg-[#0A192F] bg-opacity-85 backdrop-blur-lg transition-all px-[50px] pointer-events-auto user-select-auto">
        <nav className="flex items-center justify-between w-full text-[var(--lightest-slate)] z-12">
          <div className="flex items-center justify-center ">
            <Image src={ImageLogo} alt="" width={150} height={40} />
          </div>

          <div className="flex items-center gap-6 font-fira text-[var(--lightest-slate)]">
            <ol className="flex gap-4 list-decimal list-inside">
              <li className="mx-1">
                <a href="" className="hover:text-[var(--green)]">
                  About
                </a>
              </li>
              <li className="mx-1">
                <a href="" className="hover:text-[var(--green)]">
                  Experience
                </a>
              </li>
              <li className="mx-1">
                <a href="" className="hover:text-[var(--green)]">
                  Contact
                </a>
              </li>
            </ol>
            <div className="border border-[var(--green)] rounded-md flex items-center justify-center py-3 px-4 hover:bg-[var(--green)] hover:text-[var(--gray-700)] transition duration-300">
              <a href="" className=" text-[var(--fz-xs)]">
                Resume
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
