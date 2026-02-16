"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Neon Horizon",
        category: "Web Development",
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        span: "col-span-1 md:col-span-2",
    },
    {
        title: "Abstract Flow",
        category: "Generative Art",
        src: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2552&auto=format&fit=crop",
        span: "col-span-1",
    },
    {
        title: "Cyber Interface",
        category: "UI Design",
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        span: "col-span-1",
    },
    {
        title: "Dark Matter",
        category: "Brand Identity",
        src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop",
        span: "col-span-1 md:col-span-2",
    },
];

export function Portfolio() {
    return (
        <section className="py-24 px-4 md:px-10 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
                    <h2 className="text-sm uppercase tracking-widest text-zinc-500">
                        Selected Works
                    </h2>
                    <span className="font-serif italic text-2xl text-zinc-400">2023 — 2024</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className={`${project.span} group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/5`}
                        >
                            <Image
                                src={project.src}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
                                    <span className="text-zinc-400 text-xs uppercase tracking-widest mb-2 block">{project.category}</span>
                                    <div className="flex justify-between items-center mt-2">
                                        <h3 className="text-4xl font-serif text-white mb-2 italic">{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
