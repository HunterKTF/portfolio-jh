'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Portfolio",
        path: "/portfolio",
    },
    {
        name: "Contact",
        path: "/contact",
    },
]

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-row justify-center items-center gap-x-10">
            {/* Main navigation menu */}
            <div className="flex gap-x-10">
                {links.map((link, index) => {
                    return (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname && "text-secondary"
                            } capitalize font-medium hover:text-primary transition-all`}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </div>

            {/* Contact Me button */}
            <Link href={"/contact"}>
                <button className="px-[30px] py-[5px] bg-primary text-background rounded-full text-md hover:bg-secondary hover:-translate-y-2 transition" type="button">
                    Lets Talk
                </button>
            </Link>
        </nav>
    )
}