"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="bg-[#F1EFEF] rounded-b-[2rem] shadow-md">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Логотип */}
                <Link href="/public" className="flex items-center">
                    <Image src="/assets/icon/logo.svg" alt="vibEng" width={120} height={40} />
                </Link>

                {/* Десктоп-меню */}
                <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <Link href="#about" className="hover:text-gray-900">Про Школу</Link>
                    <Link href="#courses" className="hover:text-gray-900">Курси</Link>
                    <Link href="#reviews" className="hover:text-gray-900">Відгуки</Link>
                    <Link href="#faq" className="hover:text-gray-900">FAQ</Link>
                    <Link href="#contacts" className="hover:text-gray-900">Контакти</Link>
                </nav>

                {/* Кнопка та бургер */}
                <div className="flex items-center">
                    <Link
                        href="#get-started"
                        className="hidden md:inline-block bg-[#9481AF] hover:bg-[#9068cc] text-white font-semibold px-4 py-2 rounded-lg transition"
                    >
                        Почати навчання
                    </Link>
                    <button
                        className="md:hidden ml-4 p-2 focus:outline-none"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen
                            ? <XMarkIcon className="h-6 w-6 text-gray-700" />
                            : <Bars3Icon className="h-6 w-6 text-gray-700" />
                        }
                    </button>
                </div>
            </div>

            {/* Мобільне меню */}
            {mobileOpen && (
                <nav className="md:hidden bg-white px-6 pb-4 space-y-2 text-gray-700 font-medium">
                    <Link href="#about" className="block py-2 hover:text-gray-900">Про Школу</Link>
                    <Link href="#courses" className="block py-2 hover:text-gray-900">Курси</Link>
                    <Link href="#reviews" className="block py-2 hover:text-gray-900">Відгуки</Link>
                    <Link href="#faq" className="block py-2 hover:text-gray-900">FAQ</Link>
                    <Link href="#contacts" className="block py-2 hover:text-gray-900">Контакти</Link>
                    <Link
                        href="#get-started"
                        className="block mt-2 bg-[#A77EDF] hover:bg-[#9068cc] text-white text-center py-2 rounded-lg"
                    >
                        Почати навчання
                    </Link>
                </nav>
            )}
        </header>
    );
}
