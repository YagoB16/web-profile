'use client'

export function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <body>
                <div className="bg-[var(--navy)] flex flex-col">
                    <main className="my-0 mx-auto max-w-[1600px] min-h-[120vh] py-0 px-12.5 md:px-25 xl:px-37.5">
                        {children}
                    </main>
                </div>
            </body>
        </>
    )
}
