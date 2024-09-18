import Link from "next/link";

// Components
import Nav from "./nav";
import MobileNav from "./mobileNav";

export default function Header() {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex flex-row justify-between items-center">
                <Link className="flex flex-row w-fit text-2xl" href={"/"}>
                    <h1 className="text-primary font-medium">&lt;</h1>
                    <h1 className="text-text_primary font-medium">Jorge</h1>
                    <h1 className="text-secondary font-medium">&gt;</h1>
                </Link>

                {/* Desktop navigation & hire me button */}
                <div className="hidden xl:flex">
                    <Nav />
                </div>

                {/* Mobile navigation */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}