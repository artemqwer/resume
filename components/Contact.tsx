"use client"
import { motion } from "framer-motion"
import { Github, Mail, Send } from "lucide-react"
import Link from "next/link"

export default function Contact() {
    return (
        <footer className="bg-black text-white py-20 px-6 border-t border-zinc-900">
            <div className="max-w-4xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Connect</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        I&apos;m currently available for freelance work and full-time opportunities.
                        If you have a project that needs some creative touch, or just want to say hi, feel free to reach out.
                    </p>

                    <a
                        href="mailto:lytvynartem58@gmail.com"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
                    >
                        Say Hello
                    </a>
                </motion.div>

                <div className="flex justify-center gap-8 mb-12">
                    <Link href="https://github.com/artemqwer" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-6 h-6" />
                    </Link>
                    <Link href="https://t.me/chlyukura" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <Send className="w-6 h-6" />
                    </Link>
                    <Link href="mailto:lytvynartem58@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail className="w-6 h-6" />
                    </Link>
                </div>

                <p className="text-zinc-600 text-sm">
                    &copy; {new Date().getFullYear()} Artem Lytvyn. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
