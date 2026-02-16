"use client";

import { motion } from "framer-motion";

export function Opening() {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.8, delay: 2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter"
                >
                    SAJAL
                </motion.p>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    className="h-[1px] bg-zinc-700 w-full"
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-sm uppercase tracking-widest text-zinc-500"
                >
                    Portfolio
                </motion.p>
            </motion.div>
        </motion.div>
    );
}
