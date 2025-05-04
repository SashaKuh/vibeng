// app/layout.jsx
import "./globals.css"
import { Inter } from "next/font/google"
import {Footer} from "@/components/Footer"
import {Header} from "@/components/Header";
import { ReactNode } from "react";

interface RootLayoutProps {
    children: ReactNode;
}
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "vibEng",
    description: "Feel the Vibe, Speak the Language",
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="uk">
        <body
            className={`${inter.className} flex flex-col min-h-screen`}
        >
        {/* хедер */}
        <Header/>
        {/* головний контент займає всю доступну висоту */}
        <main className="flex-grow w-full mx-auto mt-14">
            {children}
        </main>

        {/* футер «прилизаний» до низу */}
        <Footer />
        </body>
        </html>
    )
}
