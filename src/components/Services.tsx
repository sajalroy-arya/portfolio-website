"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Web Development",
        description: "High-performance websites using Next.js and React.",
        src: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2664&auto=format&fit=crop",
    },
    {
        title: "UI/UX Design",
        description: "User-centric interfaces with focus on interaction.",
        src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    },
    {
        title: "Creative Strategy",
        description: "Defining the visual language of your brand.",
        src: "https://images.unsplash.com/photo-1558655146-d09347e0d7a8?q=80&w=2664&auto=format&fit=crop",
    },
    {
        title: "Motion Design",
        description: "Bringing static interfaces to life.",
        src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
    },
];

export function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-32 px-4 md:px-10 bg-black relative z-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-12 border-b border-zinc-800 pb-4">
                    Services
                </h2>

                <div className="flex flex-col">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-b border-zinc-800 py-12 cursor-pointer transition-colors hover:bg-zinc-900/30"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
                                <h3 className="font-serif text-4xl md:text-6xl text-zinc-500 group-hover:text-white transition-colors duration-500 italic">
                                    {service.title}
                                </h3>
                                <div className="flex items-center gap-4">
                                    <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300 text-sm md:text-base max-w-xs text-right hidden md:block">
                                        {service.description}
                                    </p>
                                    <ArrowUpRight
                                        className="text-zinc-600 group-hover:text-white transition-colors duration-300"
                                        size={32}
                                    />
                                </div>
                            </div>

                            {/* Mobile description */}
                            <p className="text-zinc-500 mt-4 text-sm md:hidden">
                                {service.description}
                            </p>

                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                        className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-lg overflow-hidden z-0 pointer-events-none shadow-2xl skew-x-12"
                                        style={{
                                            left: "50%",
                                        }}
                                    >
                                        <Image
                                            src={service.src}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
