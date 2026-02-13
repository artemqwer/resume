"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink, Terminal, Coffee, CloudRain } from "lucide-react"
import Link from "next/link"

const projects = [
    {
        title: "Weather App",
        description: "A real-time weather dashboard that provides accurate forecasts and current conditions. Features include efficient data fetching with custom hooks, comprehensive error handling, and a responsive UI that adapts to all device sizes.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
        demo: "https://weather-app-lac-pi-27.vercel.app/",
        github: "https://github.com/artemqwer/weather-app",
        color: "from-blue-600 to-cyan-400",
        icon: <CloudRain className="w-12 h-12 text-white" />
    },
    {
        title: "Tea Diary",
        description: "A personal journaling application for tea enthusiasts. Users can log their brewing parameters, tea varieties, and tasting notes. Built with persistence in mind using local storage and optimized for mobile devices.",
        tech: ["Next.js", "React", "Local Storage", "Framer Motion"],
        demo: "https://tea-diary.vercel.app",
        github: "https://github.com/artemqwer/tea-diary",
        color: "from-emerald-600 to-green-400",
        icon: <Coffee className="w-12 h-12 text-white" />
    },
    {
        title: "ASCII 3D Game Engine",
        description: "A high-performance pseudo-3D game engine built from scratch in C++. It renders 3D graphics directly to the command line console using raycasting algorithms, demonstrating low-level memory management and optimization skills.",
        tech: ["C++", "Windows API", "Raycasting", "Math"],
        github: "https://github.com/artemqwer",
        color: "from-gray-800 to-black",
        borderColor: "border-green-500/50",
        icon: <Terminal className="w-12 h-12 text-green-500" />
    }
]

export default function Projects() {
    return (
        <section className="py-24 px-6 bg-zinc-950 text-white relative" id="projects">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A selection of projects that showcase my passion for clean code and problem-solving.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: typeof projects[0] & { borderColor?: string }, index: number }) {
    const isEven = index % 2 === 0

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
        >
            {/* Project Visual */}
            <div className="w-full md:w-1/2 group">
                <div className={`relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br ${project.color} ${project.borderColor ? 'border-2 ' + project.borderColor : ''} shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-purple-500/20`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-8 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                            {project.icon}
                        </div>
                    </div>

                    {/* Mock UI Elements */}
                    <div className="absolute opacity-20 inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                </div>
            </div>

            {/* Project Info */}
            <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold flex items-center gap-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {project.title}
                    </span>
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-gray-300">
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 pt-4">
                    {project.github && (
                        <Link href={project.github} target="_blank" className="flex items-center gap-2 px-6 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-lg transition-colors border border-zinc-700 font-medium">
                            <Github className="w-4 h-4" /> Source
                        </Link>
                    )}
                    {project.demo && (
                        <Link href={project.demo} target="_blank" className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-medium shadow-lg shadow-blue-900/20">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    )
}
