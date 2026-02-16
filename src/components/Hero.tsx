"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function Hero() {
    return (
        <section className="h-screen w-full flex flex-col justify-center px-4 md:px-10 relative overflow-hidden bg-black">
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-500/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-pink-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: "2s" }} />
                <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen animate-float" />
            </div>

            {/* Background Grain */}
            <div className="absolute inset-0 bg-noise pointer-events-none z-10 opacity-20 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto w-full z-20 relative flex flex-col h-full justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="md:mb-12"
                >
                    <h1 className="font-display text-[12vw] leading-[0.8] font-bold tracking-tighter text-white mix-blend-difference">
                        HI, I'M
                        <br />
                        <span className="text-gradient-vibrant">SAJAL</span>
                    </h1>
                </motion.div>

                {/* 3 Columns of Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm uppercase tracking-widest text-zinc-500">Design</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Combining aesthetics with functionality to create intuitive and visually stunning user interfaces. I focus on micro-interactions and clean typography.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm uppercase tracking-widest text-zinc-500">Development</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Building robust, scalable applications with modern technologies like Next.js and React. Performance and accessibility are at the core of my code.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-sm uppercase tracking-widest text-zinc-500">Strategy</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                            Understanding user needs and business goals to deliver products that actually work. I help define the product vision from idea to launch.
                        </p>
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
