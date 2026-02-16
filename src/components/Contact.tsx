"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Instagram, Twitter, Linkedin } from "lucide-react";

export function Contact() {
    return (
        <section className="py-32 px-4 md:px-10 bg-black text-white relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-display font-bold mb-8"
                >
                    Let's create <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        something iconic.
                    </span>
                </motion.h2>

                <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                    Ready to elevate your brand? Drop me a line and let's discuss your next project.
                </p>

                <form className="max-w-md mx-auto flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-6 py-4 rounded-full bg-zinc-900/50 border border-zinc-800 focus:border-purple-500 outline-none transition-colors text-center text-white placeholder:text-zinc-600"
                    />
                    <button className="group w-full px-6 py-4 rounded-full bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                        Start a project
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-zinc-900 pt-8">
                    <div className="flex gap-6">
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Mail size={20} /></a>
                    </div>
                    <p className="text-zinc-600 text-sm">
                        © {new Date().getFullYear()} Creative Developer. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}
