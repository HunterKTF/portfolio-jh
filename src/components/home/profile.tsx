'use client'

import { motion } from "framer-motion";
import Image from "next/image";


export default function Profile() {
    return (
        <div className="w-[298px] h-[298px] xl:w-[478px] xl:h-[478px] flex justify-center items-center relative">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.1, duration: 0.2, ease: 'easeIn' } }}>
                <div className="w-[290px] h-[290px] xl:w-[470px] xl:h-[470px] mix-blend-light absolute top-0">
                    <Image className="rounded-full xl:p-10 p-6 object-contain"
                        src="/img/IMG_9036.JPG"
                        priority
                        quality={100}
                        fill
                        alt="Profile picture" />
                </div>
            </motion.div>
            <motion.svg className={"w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] "}
                fill={"transparent"}
                viewBox={"0 0 506 506"}
                xmlns={"http://www.w3.org/2000/svg"}>
                <motion.circle
                    cx={"249"}
                    cy={"249"}
                    r={"250"}
                    stroke={"#F59E0B"}
                    strokeWidth={"4"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    initial={{ strokeDasharray: "24 10 0 0" }}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }} />
            </motion.svg>
        </div>


    )
}
