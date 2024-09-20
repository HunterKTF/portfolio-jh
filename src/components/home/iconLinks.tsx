'use client'

import Link from "next/link";

import { RxDownload } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

export default function IconLinks() {
    return (
        <div className="flex flex-col xl:flex-row gap-10 justify-center items-center w-full xl:w-fit" id="icons">
            <Link href={"https://www.linkedin.com/in/j-hernandez-s/"} target="_blank"
                className="group py-3 px-8 rounded-full bg-transparent border border-primary w-fit hover:border-transparent hover:bg-primary hover:-translate-y-1 transition flex gap-3 justify-center items-center">
                <p className="text-lg text-primary group-hover:text-background">Download CV</p>
                <RxDownload className="text-primary size-6 group-hover:bg-primary group-hover:text-background" />
            </Link>
            <div className="flex gap-5 justify-center items-center w-fit">
                <Link href={"https://www.linkedin.com/in/j-hernandez-s/"} target="_blank"
                    className="group p-2.5 rounded-full bg-transparent border border-primary w-fit h-fit hover:border-transparent hover:bg-primary hover:-translate-y-1 transition">
                    <FaLinkedinIn className="text-primary size-5 group-hover:bg-primary group-hover:text-background" />
                </Link>
                <Link href={"https://github.com/HunterKTF"} target="_blank"
                    className="group p-2.5 rounded-full bg-transparent border border-primary w-fit h-fit hover:border-transparent hover:bg-primary hover:-translate-y-1 transition">
                    <FaGithub className="text-primary size-5 group-hover:bg-primary group-hover:text-background" />
                </Link>
                <Link href={"https://dribbble.com/JR_Hernandez"} target="_blank"
                    className="group p-2.5 rounded-full bg-transparent border border-primary w-fit h-fit hover:border-transparent hover:bg-primary hover:-translate-y-1 transition">
                    <FaDribbble className="text-primary size-5 group-hover:bg-primary group-hover:text-background" />
                </Link>
                <Link href={"https://www.hackerrank.com/profile/jorgehernandez32"} target="_blank"
                    className="group p-2.5 rounded-full bg-transparent border border-primary w-fit h-fit hover:border-transparent hover:bg-primary hover:-translate-y-1 transition">
                    <FaHackerrank className="text-primary size-5 group-hover:bg-primary group-hover:text-background" />
                </Link>
            </div>
        </div>
    )
}