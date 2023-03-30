import React from 'react'

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>this is about Nav</nav>
            <main>
                {children}
            </main>

        </>
    )
}
