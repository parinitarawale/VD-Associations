"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

const PROJECTS = [
    // Bedroom -> Luxury Apartments
    { id: 1000, src: "/Bedroom /bed1.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1001, src: "/Bedroom /bed2.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1002, src: "/Bedroom /bed3.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1003, src: "/Bedroom /bed4.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1004, src: "/Bedroom /bed5.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1005, src: "/Bedroom /bed6.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1006, src: "/Bedroom /bed7.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1007, src: "/Bedroom /bed8.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1008, src: "/Bedroom /bed9.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1009, src: "/Bedroom /bed10.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1010, src: "/Bedroom /bed11.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1011, src: "/Bedroom /bed12.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1012, src: "/Bedroom /bed13.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1013, src: "/Bedroom /bed14.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1014, src: "/Bedroom /bed15.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1015, src: "/Bedroom /bed16.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1016, src: "/Bedroom /bed17.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1017, src: "/Bedroom /bed18.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1018, src: "/Bedroom /bed19.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1019, src: "/Bedroom /bed20.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1020, src: "/Bedroom /bed21.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },

    // Dining Table -> Private Villas
    { id: 1021, src: "/Dining Table/dine1.jpeg", category: "Private Villas", aspectRatio: "square" },
    { id: 1022, src: "/Dining Table/dine2.jpeg", category: "Private Villas", aspectRatio: "square" },
    { id: 1023, src: "/Dining Table/dine3.jpeg", category: "Private Villas", aspectRatio: "square" },
    { id: 1024, src: "/Dining Table/dine4.jpeg", category: "Private Villas", aspectRatio: "square" },

    // Entrance -> Private Villas
    { id: 1025, src: "/Entrance/entrance1.jpeg", category: "Private Villas", aspectRatio: "portrait" },
    { id: 1026, src: "/Entrance/entrance2.jpeg", category: "Private Villas", aspectRatio: "portrait" },

    // Kitchen -> Chef's Kitchens
    { id: 1027, src: "/Kitchen/kitchen1.jpeg", category: "Chef's Kitchens", aspectRatio: "square" },
    { id: 1028, src: "/Kitchen/kitchen2.jpeg", category: "Chef's Kitchens", aspectRatio: "square" },
    { id: 1029, src: "/Kitchen/kitchen3.jpeg", category: "Chef's Kitchens", aspectRatio: "square" },
    { id: 1030, src: "/Kitchen/kitchen4.jpeg", category: "Chef's Kitchens", aspectRatio: "square" },
    { id: 1031, src: "/Kitchen/kitchen5.jpeg", category: "Chef's Kitchens", aspectRatio: "square" },

    // Mandir -> Traditional Spaces
    { id: 1032, src: "/Mandir/mandir1.jpeg", category: "Traditional Spaces", aspectRatio: "square" },
    { id: 1033, src: "/Mandir/mandir2.jpeg", category: "Traditional Spaces", aspectRatio: "square" },
    { id: 1034, src: "/Mandir/mandir3.jpeg", category: "Traditional Spaces", aspectRatio: "square" },
    { id: 1035, src: "/Mandir/mandir4.jpeg", category: "Traditional Spaces", aspectRatio: "square" },

    // Living Room -> Luxury Apartments
    { id: 1036, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.11.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1037, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.12 (3).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1038, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.16 (1).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1039, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.19 (2).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1040, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.20 (3).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1041, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.20 (4).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1042, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.21 (1).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1043, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.21 (2).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1044, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.21 (3).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1045, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.21.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1046, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.22 (2).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1047, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.23 (1).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1048, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.25 (1).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1049, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.26 (3).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1050, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.26 (4).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1051, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.30 (1).jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1052, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.31.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },

    // Study table -> Luxury Apartments
    { id: 1053, src: "/Study table/desk1.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1054, src: "/Study table/desk2.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1055, src: "/Study table/desk3.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1056, src: "/Study table/desk4.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1057, src: "/Study table/desk5.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1058, src: "/Study table/desk6.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
    { id: 1059, src: "/Study table/desk7.jpeg", category: "Luxury Apartments", aspectRatio: "portrait" },
];

const CATEGORIES = ["All", "Luxury Apartments", "Private Villas", "Chef's Kitchens", "Traditional Spaces"]

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filtered = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory)

    return (
        <main className="pt-24 min-h-screen">
            <div className="px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-sans text-ink-black uppercase tracking-tight mb-2">
                        Selected Works
                    </h1>
                    <p className="font-sans text-[10px] md:text-sm uppercase tracking-[0.4em] text-brand-red font-bold">
                        Curated Living Spaces
                    </p>
                    <div className="w-16 h-1 bg-brand-red mt-4" />
                </motion.div>
            </div>

            {/* Filter Bar */}
            <div className="px-6 mb-12 overflow-x-auto no-scrollbar flex gap-4">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            "px-6 py-3 rounded-2xl font-sans text-[10px] font-bold uppercase tracking-widest border transition-all whitespace-nowrap",
                            activeCategory === cat
                                ? "bg-brand-red border-brand-red text-white shadow-xl"
                                : "bg-white/10 backdrop-blur-md border-sketch-grey text-graphite hover:border-ink-black hover:text-ink-black"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="px-4 pb-20">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                    <AnimatePresence>
                        {filtered.map((item, idx) => (
                            <ProjectCard key={item.id} item={item} idx={idx} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    )
}

function ProjectCard({ item, idx }: { item: any; idx: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="break-inside-avoid mb-6 group cursor-pointer"
        >
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-sketch-grey hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                <div className={cn(
                    "relative overflow-hidden rounded-xl bg-ink-black/10",
                    item.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}>
                    {/* Placeholder Background */}
                    <div className="absolute inset-0 flex items-center justify-center text-graphite/10 font-bold italic text-sm">
                        VD Associates
                    </div>
                    {/* Real Image */}
                    <img
                        src={item.src}
                        alt="VD Associates Project"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/90 backdrop-blur-md p-3 rounded-full text-brand-red shadow-lg">
                            <Maximize2 size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
