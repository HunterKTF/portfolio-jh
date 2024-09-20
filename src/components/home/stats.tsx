'use client'

import CountUp from "react-countup";

const stats = [
    {
        text: "Years of Experience",
        num: 2,
    },
    {
        text: "Proyects Made",
        num: 8,
    },
    {
        text: "Professional Certificates",
        num: 7,
    },
    {
        text: "Code Commits",
        num: 100,
    },
]

export default function Stats() {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div className="flex flex-1 gap-4 items-center justify-center xl:justify-start" key={index}>
                                <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                                <p className={
                                    `${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-lg text-white/80`
                                }>{item.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}