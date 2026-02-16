"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="h-screen w-full flex flex-col justify-center px-4 md:px-10 relative overflow-hidden bg-black">
            {/* Ambient Spotlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-soft-light" />

            {/* Background Grain */}
            <div className="absolute inset-0 bg-noise pointer-events-none z-10 opacity-30 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto w-full z-20 relative flex flex-col h-full justify-center">
                <div className="md:mb-16 overflow-hidden">
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            mass: 1.2,
                            delay: 0.2
                        }}
                    >
                        <h1 className="font-display text-[13vw] leading-[0.8] font-bold tracking-tighter text-white mix-blend-difference">
                            HI, I'M
                            <br />
                            <span className="font-serif italic font-light text-zinc-300">Sajal</span>
                        </h1>
                    </motion.div>
                </div>

                {/* 3 Columns of Text */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8 overflow-hidden">
                    {[
                        { title: "Design", desc: "Crafting intuitive interfaces with a focus on typography and negative space." },
                        { title: "Development", desc: "Building scalable, high-performance applications with modern stacks." },
                        { title: "Strategy", desc: "Defining digital products from concept to launch with clear vision." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: "-200%" }}
                            animate={{ y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                mass: 1.5,
                                delay: 0.8 + (i * 0.1)
                            }}
                            className="flex flex-col gap-3"
                        >
                            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.title}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-light">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 z-30 mix-blend-plus-lighter"
            >
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown size={16} strokeWidth={1} />
                </motion.div>
            </motion.div>
        </section>
    );
}
