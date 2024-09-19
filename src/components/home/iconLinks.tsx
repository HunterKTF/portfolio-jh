'use client'

import Link from "next/link";

import { RxDownload } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";

export default function IconLinks() {
    return (
        <div className="flex gap-5" id="icons">
            <Link href={"https://www.linkedin.com/in/j-hernandez-s/"} target="_blank"
                className="group p-2.5 rounded-full bg-transparent border border-primary w-fit hover:border-transparent hover:bg-primary hover:-translate-y-2 transition">
                <RxDownload className="text-primary size-4 group-hover:bg-primary group-hover:text-background" />

            </Link>
            <Link href={"https://www.linkedin.com/in/j-hernandez-s/"} target="_blank"
                className="group p-2.5 rounded-full bg-transparent border border-primary w-fit hover:border-transparent hover:bg-primary hover:-translate-y-2 transition">
                <FaLinkedinIn className="text-primary size-4 group-hover:bg-primary group-hover:text-background" />
            </Link>
            <Link href={"https://github.com/HunterKTF"} target="_blank"
                className="group p-2.5 rounded-full bg-transparent border border-primary w-fit hover:border-transparent hover:bg-primary hover:-translate-y-2 transition">
                <FaGithub className="text-primary size-4 group-hover:bg-primary group-hover:text-background" />
            </Link>
            <Link href={"https://dribbble.com/JR_Hernandez"} target="_blank"
                className="group p-2.5 rounded-full bg-transparent border border-primary w-fit hover:border-transparent hover:bg-primary hover:-translate-y-2 transition">
                <FaDribbble className="text-primary size-4 group-hover:bg-primary group-hover:text-background" />
            </Link>
            <Link href={"https://www.hackerrank.com/profile/jorgehernandez32"} target="_blank"
                className="group p-2.5 rounded-full bg-transparent border border-primary w-fit hover:border-transparent hover:bg-primary hover:-translate-y-2 transition">
                <FaHackerrank className="text-primary size-4 group-hover:bg-primary group-hover:text-background" />
            </Link>
        </div>
    )
}