"use client"
import { motion } from "framer-motion"
import { Code2, Database, Layout, Wrench } from "lucide-react"

const skills = [
    {
        category: "Core & Languages",
        icon: <Code2 className="w-8 h-8 mb-4 text-blue-400" />,
        items: ["JavaScript (ES6+)", "TypeScript", "C++ (Algorithmic Thinking)"],
    },
    {
        category: "Frontend Engineering",
        icon: <Layout className="w-8 h-8 mb-4 text-purple-400" />,
        items: ["React", "Next.js (App Router)", "Tailwind CSS", "Mobile-First Design", "Framer Motion"],
    },
    {
        category: "Backend & Database",
        icon: <Database className="w-8 h-8 mb-4 text-green-400" />,
        items: ["Node.js", "Next.js API Routes", "Prisma ORM", "PostgreSQL (Neon)", "REST API Design"],
    },
    {
        category: "Tools & DevOps",
        icon: <Wrench className="w-8 h-8 mb-4 text-orange-400" />,
        items: ["Git / GitHub", "Vercel CI/CD", "Project IDX", "VS Code"],
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
}

export default function Skills() {
    return (
        <section className="py-24 px-6 bg-zinc-950 text-white" id="skills">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                        Technical Expertise
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable web applications.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1 group"
                        >
                            <div className="group-hover:scale-110 transition-transform duration-300 origin-left">
                                {skillGroup.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-100 group-hover:text-white transition-colors">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-2">
                                {skillGroup.items.map((skill, i) => (
                                    <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
