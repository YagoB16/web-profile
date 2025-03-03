'use client'

import Header from "./Header"


export function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <body >
                <div className="bg-red-400 flex flex-col min-h-[100vh]">
                    <Header />

                    <main className="my-0 mx-auto max-w-[1600px] min-h-[100vh] py-50 px-37.5">
                        {children}
                    </main>
                    <footer>
                        footer
                    </footer>
                </div>
            </body>
        </>
    )
}
