'use client'

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

export default function PageTransition({ children }: Props) {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
                    }}
                    className="w-screen h-screen fixed bg-background top-0 pointer-events-none" />
                {children}
            </div>
        </AnimatePresence>
    )
}