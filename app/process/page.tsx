"use client"

import { motion } from "framer-motion"
import { Coffee, Ruler, Key, Shield, Clock, CheckCircle2, DraftingCompass, Home, Compass } from "lucide-react"

export default function ProcessPage() {
    const steps = [
        {
            number: "01",
            title: "The Discovery",
            subtitle: "Chai & Listen",
            icon: <Coffee />,
            image: "/Entrance/WhatsApp Image 2026-02-17 at 10.05.25.jpeg",
            desc: "Requirement Analysis: We start by listening. We meet (over a cup of chai) to understand your family structure, your lifestyle needs, and your budget. We treat this as a partnership, not a transaction.",
            hook: "Partnership Focused"
        },
        {
            number: "02",
            title: "The Alignment",
            subtitle: "Vastu",
            icon: <Compass />,
            image: "/Mandir/WhatsApp Image 2026-02-17 at 10.05.26.jpeg",
            desc: "Directional Planning: Before drawing a single line, Dr. Vishal analyzes the Vastu of your apartment or villa. We align the layout to ensure health, wealth, and prosperity flow through your new home.",
            hook: "Scientific Vastu"
        },
        {
            number: "03",
            title: "The Concept",
            subtitle: "The Sketch",
            icon: <DraftingCompass />,
            image: "/Study table/WhatsApp Image 2026-02-17 at 10.05.13.jpeg",
            desc: "2D Layouts & Space Planning: We maximize every inch of space. Using precise architectural grids, we create furniture layouts that prioritize movement, ventilation, and functionality.",
            hook: "Precision Grids"
        },
        {
            number: "04",
            title: "The Vision",
            subtitle: "The Render",
            icon: <Ruler />,
            image: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.11.jpeg",
            desc: "3D Visualization: See the future. We create photo-realistic 3D images of your home. You will see the lighting, colors, and textures exactly as they will appear in reality.",
            hook: "Photo Realistic"
        },
        {
            number: "05",
            title: "The Selection",
            subtitle: "Material Sourcing",
            icon: <CheckCircle2 />,
            image: "/Kitchen/WhatsApp Image 2026-02-17 at 10.05.15.jpeg",
            desc: "We accompany you to showrooms to select tiles, veneers, fabrics, and lights. We ensure the materials chosen match the 3D design and your budget.",
            hook: "Curation & Budget"
        },
        {
            number: "06",
            title: "The Handover",
            subtitle: "Execution & Delivery",
            icon: <Key />,
            image: "/Bedroom /WhatsApp Image 2026-02-17 at 10.05.14.jpeg",
            desc: "Our civil team, led by the experience of Mr. Sharad Sonavane, executes the design with military precision. We hand over the keys to your cleaned, finished home. On time.",
            hook: "Military Precision"
        }
    ]

    return (
        <main className="pt-24 min-h-screen">
            <div className="px-6 mb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-sans text-ink-black uppercase tracking-tight mb-4 leading-none">
                        From Sketch <br className="md:hidden" /> to <span className="text-brand-red">Sanctuary</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-graphite font-body leading-relaxed mb-6">
                        "We don't believe in guesswork. Our 6-step process ensures you know exactly what you are getting, how much it costs, and when it will be delivered."
                    </p>
                    <div className="w-24 h-1 bg-brand-red mx-auto" />
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                {steps.map((step, idx) => (
                    <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-3xl border border-sketch-grey shadow-sm hover:shadow-2xl transition-all relative overflow-hidden h-full flex flex-col"
                    >
                        {/* Step Image Header */}
                        <div className="h-48 overflow-hidden relative">
                            <img src={step.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={step.title} />
                            <div className="absolute inset-0 bg-ink-black/40 group-hover:bg-ink-black/20 transition-colors" />
                            <div className="absolute top-4 right-4 text-4xl font-black text-white/30 group-hover:text-white/50 transition-colors">
                                {step.number}
                            </div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-red border border-brand-red/10 group-hover:bg-brand-red group-hover:text-white transition-colors">
                                {step.icon}
                            </div>
                        </div>

                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-sans font-bold text-ink-black uppercase leading-tight mb-1">{step.title}</h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-4">{step.subtitle}</p>
                                <p className="text-graphite font-body text-sm leading-relaxed mb-6">{step.desc}</p>
                            </div>

                            <div className="flex items-center gap-2 pt-6 border-t border-sketch-grey">
                                <ShieldIcon size={14} className="text-brand-red" />
                                <span className="text-[10px] font-bold uppercase tracking-wider text-ink-black">{step.hook}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom CTA */}
            <section className="bg-brand-red py-24 px-6 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white opacity-5 rounded-full -translate-y-1/2" />
                <div className="relative z-10">
                    <Home size={48} className="mx-auto mb-8 opacity-50" />
                    <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase mb-6 tracking-tight">Ready for your <br className="md:hidden" /> Consultation?</h2>
                    <p className="font-body text-white/80 mb-10 max-w-xl mx-auto text-lg">
                        Book a session with Dr. Vishal & Mr. Sharad to begin your architectural journey.
                    </p>
                    <a href="/contact" className="inline-block px-12 py-5 bg-white text-brand-red font-sans font-bold uppercase tracking-widest rounded-2xl shadow-2xl hover:bg-ink-black hover:text-white transition-all transform hover:-translate-y-1">
                        Reserve Your Slot
                    </a>
                </div>
            </section>
        </main>
    )
}

function ShieldIcon({ size, className }: any) {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
    )
}
