"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="w-full bg-[#F1F1F1] rounded-t-[2rem] shadow-lg">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Логотип */}
                <Link href="/" className="flex items-center">
                    <Image src="/assets/icon/logo.svg" alt="vibEng" width={120} height={40} />
                </Link>

                {/* Іконки соцмереж */}
                <ul className="flex items-center gap-4">
                    <li>
                        <Link href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/icon/telegram.svg" alt="telegram" width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/icon/tiktok.svg" alt="tiktok" width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/icon/inst.svg" alt="instagram" width={32} height={32} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                            <Image src="/assets/icon/youtube.svg" alt="youtube" width={32} height={32} />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
