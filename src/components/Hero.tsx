"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Scene3D } from "./Scene3D";

export function Hero() {
    return (
        <section className="h-screen w-full flex flex-col justify-center px-4 md:px-10 relative overflow-hidden">
            {/* Background Grain */}
            <div className="absolute inset-0 bg-noise pointer-events-none z-20 opacity-20 mix-blend-overlay"></div>

            {/* Abstract Glowing Sphere/Ring */}
            <div className="absolute inset-0 z-10 opacity-60">
                <Scene3D />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/0 via-black/40 to-black z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full z-30 relative">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="font-display text-[12vw] leading-[0.8] font-bold tracking-tighter text-white mix-blend-difference">
                        HI, I'M
                        <br />
                        <span className="text-zinc-500/80">SAJAL</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
                >
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-md font-light mix-blend-plus-lighter">
                        Crafting digital experiences that merge art, code, and interaction.
                    </p>

                    <div className="flex flex-col gap-2 mix-blend-plus-lighter">
                        <span className="text-sm uppercase tracking-widest text-zinc-600">Based in San Francisco</span>
                        <span className="text-sm uppercase tracking-widest text-zinc-600">Available for freelance</span>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 z-30 mix-blend-plus-lighter"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
}
