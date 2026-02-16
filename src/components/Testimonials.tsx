"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "The attention to detail is unmatched. Truly a master of the craft.",
        author: "Alex Morgan",
        role: "Art Director, Studio X",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
        className: "md:col-span-2 bg-zinc-900/50",
    },
    {
        quote: "Delivered beyond our expectations.",
        author: "Sarah Chen",
        role: "CEO, Techflow",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
        className: "md:col-span-1 bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20",
    },
    {
        quote: "A seamless blend of design and functionality.",
        author: "Marcus Ray",
        role: "Product Lead",
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        className: "md:col-span-1 bg-zinc-900/50",
    },
    {
        quote: "Transformed our digital presence completely.",
        author: "Elena Rodriguez",
        role: "Founder, Zenith",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
        className: "md:col-span-2 bg-gradient-to-bl from-pink-900/10 to-black border border-pink-500/10",
    },
];

export function Testimonials() {
    return (
        <section className="py-32 px-4 md:px-10 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">
                    Client <span className="text-zinc-600">Stories</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9, borderColor: "rgba(255,255,255,0.05)" }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                borderColor: ["rgba(168,85,247,0)", "rgba(168,85,247,0.5)", "rgba(255,255,255,0.1)"]
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                borderColor: { duration: 1.5, delay: index * 0.2 }
                            }}
                            className={`p-8 rounded-3xl flex flex-col justify-between h-full min-h-[300px] border border-white/5 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-900/40 transition-colors ${item.className}`}
                        >
                            <Quote className="text-purple-500/50 mb-6" size={40} />
                            <div>
                                <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed text-zinc-200">
                                    "{item.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-zinc-700">
                                        <Image src={item.src} alt={item.author} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">{item.author}</h4>
                                        <p className="text-sm text-zinc-500">{item.role}</p>
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
