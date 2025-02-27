import Image from "next/image";


export default function Header() {
  return (
    <>
      <header className="flex top-0 z-11 w-full h-[var(--nav-height)] items-center bg-[#0A192F] bg-opacity-85 backdrop-blur-lg transition-all px-[50px] pointer-events-auto user-select-auto">
        <nav className="flex items-center justify-between w-full text-[var(--lightest-slate)] font-mono z-12">
          <div className="flex items-center justify-center ">
            <button>
                
            </button>
          </div>

          <div className="flex items-center gap-6 font-mono text-[var(--lightest-slate)]">
            <ol className="flex gap-4 list-decimal list-inside">
              <li className="mx-1">About</li>
              <li className="mx-1">Experience</li>
              <li className="mx-1">Contact</li>
            </ol>
            <button className="ml-4 text-[var(--fz-xs)]">Resume</button>
          </div>
        </nav>
      </header>
    </>
  )
}
