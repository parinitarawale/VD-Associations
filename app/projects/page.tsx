"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const PROJECTS = [
    // Bedrooms
    { id: 1000, src: "/Bedroom /bed1.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1001, src: "/Bedroom /bed2.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1002, src: "/Bedroom /bed3.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1003, src: "/Bedroom /bed4.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1004, src: "/Bedroom /bed5.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1005, src: "/Bedroom /bed6.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1006, src: "/Bedroom /bed7.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1007, src: "/Bedroom /bed8.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1008, src: "/Bedroom /bed9.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1009, src: "/Bedroom /bed10.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1010, src: "/Bedroom /bed11.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1011, src: "/Bedroom /bed12.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1012, src: "/Bedroom /bed13.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1013, src: "/Bedroom /bed14.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1014, src: "/Bedroom /bed15.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1015, src: "/Bedroom /bed16.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1016, src: "/Bedroom /bed17.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1017, src: "/Bedroom /bed18.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1018, src: "/Bedroom /bed19.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1019, src: "/Bedroom /bed20.jpeg", category: "Bedrooms", aspectRatio: "portrait" },
    { id: 1020, src: "/Bedroom /bed21.jpeg", category: "Bedrooms", aspectRatio: "portrait" },

    // Dining Table
    { id: 1021, src: "/Dining Table/dine1.jpeg", category: "Living Room", aspectRatio: "square" },
    { id: 1022, src: "/Dining Table/dine2.jpeg", category: "Living Room", aspectRatio: "square" },
    { id: 1023, src: "/Dining Table/dine3.jpeg", category: "Living Room", aspectRatio: "square" },
    { id: 1024, src: "/Dining Table/dine4.jpeg", category: "Living Room", aspectRatio: "square" },

    // Entrance
    { id: 1025, src: "/Entrance/entrance1.jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1026, src: "/Entrance/entrance2.jpeg", category: "Living Room", aspectRatio: "portrait" },

    // Kitchen
    { id: 1027, src: "/Kitchen/kitchen1.jpeg", category: "Kitchen", aspectRatio: "square" },
    { id: 1028, src: "/Kitchen/kitchen2.jpeg", category: "Kitchen", aspectRatio: "square" },
    { id: 1029, src: "/Kitchen/kitchen3.jpeg", category: "Kitchen", aspectRatio: "square" },
    { id: 1030, src: "/Kitchen/kitchen4.jpeg", category: "Kitchen", aspectRatio: "square" },
    { id: 1031, src: "/Kitchen/kitchen5.jpeg", category: "Kitchen", aspectRatio: "square" },

    // Mandir
    { id: 1032, src: "/Mandir/mandir1.jpeg", category: "Mandir", aspectRatio: "square" },
    { id: 1033, src: "/Mandir/mandir2.jpeg", category: "Mandir", aspectRatio: "square" },
    { id: 1034, src: "/Mandir/mandir3.jpeg", category: "Mandir", aspectRatio: "square" },
    { id: 1035, src: "/Mandir/mandir4.jpeg", category: "Mandir", aspectRatio: "square" },

    // Living Room
    { id: 1036, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.11.jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1037, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.12 (3).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1038, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.16 (1).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1039, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.19 (2).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1040, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.20 (3).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1041, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.20 (4).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1042, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.21 (1).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1043, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.21 (2).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1044, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.21 (3).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1045, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.21.jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1046, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.22 (2).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1047, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.23 (1).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1048, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.25 (1).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1049, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.26 (3).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1050, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.26 (4).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1051, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.30 (1).jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1052, src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.31.jpeg", category: "Living Room", aspectRatio: "portrait" },

    // Study table
    { id: 1053, src: "/Study table/desk1.jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1054, src: "/Study table/desk2.jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1055, src: "/Study table/desk3.jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1056, src: "/Study table/desk4.jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1057, src: "/Study table/desk5.jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1058, src: "/Study table/desk6.jpeg", category: "Living Room", aspectRatio: "portrait" },
    { id: 1059, src: "/Study table/desk7.jpeg", category: "Living Room", aspectRatio: "portrait" },
];

const CATEGORIES = ["All", "Bedrooms", "Living Room", "Kitchen", "Mandir"]

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

    const filtered = activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory)

    const openLightbox = (idx: number) => setLightboxIndex(idx)
    const closeLightbox = () => setLightboxIndex(null)

    const goNext = useCallback(() => {
        if (lightboxIndex === null) return
        setLightboxIndex((lightboxIndex + 1) % filtered.length)
    }, [lightboxIndex, filtered.length])

    const goPrev = useCallback(() => {
        if (lightboxIndex === null) return
        setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
    }, [lightboxIndex, filtered.length])

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox()
            if (e.key === "ArrowRight") goNext()
            if (e.key === "ArrowLeft") goPrev()
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [lightboxIndex, goNext, goPrev])

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => { document.body.style.overflow = "" }
    }, [lightboxIndex])

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
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <AnimatePresence>
                        {filtered.map((item, idx) => (
                            <ProjectCard key={item.id} item={item} idx={idx} onClick={() => openLightbox(idx)} />
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && filtered[lightboxIndex] && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[200] bg-ink-black/95 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 z-[210] p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                            aria-label="Close lightbox"
                        >
                            <X size={24} />
                        </button>

                        {/* Counter */}
                        <div className="absolute top-6 left-6 z-[210] text-white/60 font-sans text-xs font-bold uppercase tracking-widest">
                            {lightboxIndex + 1} / {filtered.length}
                        </div>

                        {/* Prev Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goPrev() }}
                            className="absolute left-4 md:left-8 z-[210] p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Image with Watermark */}
                        <div className="relative" onClick={(e) => e.stopPropagation()}>
                            <motion.img
                                key={filtered[lightboxIndex].id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                src={filtered[lightboxIndex].src}
                                alt="VD & Associates Project"
                                className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            />
                            {/* Lightbox Logo Watermark */}
                            <div className="absolute top-3 left-3 z-[220]">
                                <img
                                    src="/logo.png"
                                    alt="VD & Associates"
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                />
                            </div>
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goNext() }}
                            className="absolute right-4 md:right-8 z-[210] p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Category Label */}
                        <div className="absolute bottom-6 left-0 right-0 text-center z-[210]">
                            <span className="text-white/50 font-sans text-[10px] font-bold uppercase tracking-[0.3em]">
                                {filtered[lightboxIndex].category}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}

function ProjectCard({ item, idx, onClick }: { item: any; idx: number; onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group cursor-pointer"
            onClick={onClick}
        >
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-sketch-grey hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                <div className={cn(
                    "relative overflow-hidden rounded-xl bg-ink-black/10",
                    item.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
                )}>
                    {/* Placeholder Background */}
                    <div className="absolute inset-0 flex items-center justify-center text-graphite/10 font-bold italic text-sm">
                        VD & Associates
                    </div>
                    {/* Real Image */}
                    <img
                        src={item.src}
                        alt="VD & Associates Project"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Logo Watermark */}
                    <div className="absolute bottom-2 right-2 z-10">
                        <img
                            src="/logo.png"
                            alt="VD & Associates"
                            className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        />
                    </div>
                    {/* Zoom Hint Overlay */}
                    <div className="absolute inset-0 bg-ink-black/0 group-hover:bg-ink-black/30 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-sans text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                            View
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
