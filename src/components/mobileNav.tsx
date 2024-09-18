'use client'

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Icons imports
import { CiMenuFries } from "react-icons/ci";

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

export default function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center" >
                <CiMenuFries className="text-3xl text-primary font-bold" />
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-foreground border border-foreground text-white" >
                {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href={"/"}>
                        <span className="text-primary">&lt;</span>
                        Jorge
                        <span className="text-secondary">&gt;</span>
                    </Link>
                </div>

                {/* Nav Bar */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link 
                                href={link.path}
                                key={index}
                                className={`${link.path === pathname && "text-secondary"} 
                                text-xl capitalize hover:text-primary transition-all`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}