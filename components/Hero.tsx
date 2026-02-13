"use client"
import { motion } from "framer-motion"
import { ArrowDown, Github, Mail, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-black text-white relative overflow-hidden">

            {/* ... */}

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-4xl"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-6 inline-block"
                >
                    <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative w-32 h-32">
                        <Image
                            src="/placeholder-avatar.jpg"
                            alt="Profile"
                            fill
                            className="rounded-full border-4 border-black object-cover"
                            hidden
                        />
                        <div className="absolute inset-0 rounded-full bg-zinc-800 flex items-center justify-center text-3xl font-bold border-4 border-black">
                            AL
                        </div>
                    </div>
                </motion.div>


                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                    LYTVYN ARTEM
                </h1>
                <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
                    Junior Fullstack Developer
                </h2>
                <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
                    Self-taught Fullstack Developer with a focus on performance and scalability.
                    Skilled in <span className="text-blue-400">TypeScript</span>, <span className="text-purple-400">Next.js</span>, and <span className="text-green-400">PostgreSQL</span>.
                    Background in C++ game development provided me with strong algorithmic thinking.
                </p>

                <div className="flex gap-6 justify-center mb-16">
                    <Link href="https://github.com/artemqwer" target="_blank" className="p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all hover:scale-110">
                        <Github className="w-6 h-6 text-white" />
                    </Link>
                    <Link href="mailto:lytvynartem58@gmail.com" className="p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all hover:scale-110">
                        <Mail className="w-6 h-6 text-white" />
                    </Link>
                    <Link href="https://t.me/shiyukura" target="_blank" className="p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 hover:border-zinc-700 transition-all hover:scale-110">
                        <Send className="w-6 h-6 text-white" />
                    </Link>
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="w-8 h-8 text-gray-600" />
            </motion.div>
        </section>
    )
}
