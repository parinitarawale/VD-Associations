"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function AboutPage() {
    return (
        <main className="pt-24 min-h-screen">
            <div className="relative px-6 flex flex-col items-center text-center mb-20">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-sans font-bold uppercase text-4xl sm:text-6xl md:text-8xl text-ink-black tracking-tighter mb-4">
                        The Legacy
                    </h1>
                    <div className="w-24 h-1 bg-brand-red mx-auto mb-8" />
                    <h2 className="text-xl md:text-2xl font-sans font-bold text-ink-black uppercase tracking-widest max-w-4xl">
                        Bridging the Gap Between <br className="hidden md:block" /> <span className="text-brand-red">Civil Strength & Design Elegance</span>
                    </h2>
                </motion.div>
            </div>

            {/* Narrative Hero */}
            <section className="max-w-3xl mx-auto px-6 text-center mb-0">
                <p className="text-lg md:text-xl text-graphite font-body leading-relaxed mb-8">
                    For over four decades, VD Associates has stood at the intersection of strength and aesthetics. Our journey began in 1982 on a humble drafting table, driven by Mr. Sharad Sonavane’s unyielding commitment to civil excellence. Today, that legacy has evolved into a multi-disciplinary design studio under the visionary leadership of Dr. Vishal Sharad Sonavane.
                </p>
                <p className="text-lg md:text-xl text-graphite font-body leading-relaxed max-w-4xl mx-auto">
                    We are no longer just builders; we are curators of lifestyle. By fusing the structural rigor of the past with the immersive 3D technology and Scientific Vastu of the present, we offer a holistic approach to home-making. From the first brick laid to the final curtain hung, we honor the trust of generations by crafting spaces that are as durable as they are beautiful.
                </p>
            </section>

            {/* Stats Section (Moved Above Images) */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-[60px] px-6 bg-transparent"
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-12 md:gap-32 text-center">
                    <LegacyStat number={40} suffix="+" label="Years of Legacy" />
                    <LegacyStat number={400} suffix="+" label="Projects Delivered" />
                    <LegacyStat number={100} suffix="%" label="Vastu Compliance" />
                </div>
            </motion.section>

            {/* The Pioneer & The Visionary */}
            <section className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch mb-32">
                {/* The Pioneer */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col bg-white border border-sketch-grey rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
                >
                    <div className="aspect-[4/5] bg-ink-black/10 relative overflow-hidden">
                        {/* Photo Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-graphite/20 font-sans italic text-xl p-12 text-center">
                            [Mr. Sharad Sonavane Photo]
                        </div>
                    </div>
                    <div className="p-8 space-y-4">
                        <div className="inline-block px-4 py-1 bg-ink-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-2">
                            The Pioneer
                        </div>
                        <h3 className="text-3xl font-sans font-bold text-ink-black uppercase leading-tight">Mr. Sharad Sonavane</h3>
                        <p className="text-brand-red font-sans font-bold uppercase tracking-widest text-xs leading-none">Founder & Civil Expert</p>
                        <div className="h-0.5 w-12 bg-sketch-grey my-6" />
                        <p className="text-graphite font-body leading-relaxed">
                            "In 1982, Mr. Sharad Sonavane laid the foundation of this firm with a simple principle: Integrity in Construction. With decades of experience in core civil engineering and structural planning, he earned the trust of Thane and Mumbai’s homeowners by delivering spaces that were built to last. He brings the 'Old School' discipline—where a handshake is a contract and quality is non-negotiable."
                        </p>
                    </div>
                </motion.div>

                {/* The Visionary */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col bg-white border border-sketch-grey rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
                >
                    <div className="aspect-[4/5] bg-brand-red/5 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                        <img
                            src="/DrVishal.png"
                            alt="Dr. Vishal Sharad Sonavane"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-8 space-y-4">
                        <div className="inline-block px-4 py-1 bg-brand-red text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-2">
                            The Visionary
                        </div>
                        <h3 className="text-3xl font-sans font-bold text-ink-black uppercase leading-tight">Dr. Vishal Sharad Sonavane</h3>
                        <p className="text-brand-red font-sans font-bold uppercase tracking-widest text-xs leading-none">Principal Designer & Vastu Consultant</p>
                        <div className="h-0.5 w-12 bg-sketch-grey my-6" />
                        <p className="text-graphite font-body leading-relaxed">
                            "Taking the legacy forward, Dr. Vishal integrates modern aesthetics with the ancient science of Vastu Shastra. He transformed the firm from a civil-focused unit into a full-service Design Studio. With an eye for luxury and a deep understanding of energy flow (Vastu), he ensures that your home doesn't just look beautiful in 3D renders, but feels harmonious to live in."
                        </p>
                    </div>
                </motion.div>
            </section>

        </main>
    )
}

function LegacyStat({ number, suffix, label }: { number: number, suffix: string, label: string }) {
    return (
        <div className="flex flex-col">
            <div className="font-sans text-5xl md:text-7xl font-bold text-ink-black flex items-baseline justify-center">
                <Counter value={number} />{suffix}
            </div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-graphite mt-4">
                {label}
            </span>
        </div>
    )
}

function Counter({ value }: { value: number }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const end = value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
            start += increment
            if (start >= end) {
                setCount(end)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)

        return () => clearInterval(timer)
    }, [value])

    return <span>{count}</span>
}
