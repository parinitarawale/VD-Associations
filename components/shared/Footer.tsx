"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Instagram, Facebook, Linkedin, ArrowUpRight, MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Footer() {
    const pathname = usePathname()
    const isContactPage = pathname === "/contact"

    return (
        <footer className="relative bg-ink-black text-white pt-20 px-6 pb-12 overflow-hidden border-t border-white/10">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className={cn(
                    "grid gap-12 items-center",
                    isContactPage ? "grid-cols-1 max-w-2xl mx-auto" : "grid-cols-1 md:grid-cols-2"
                )}>
                    {/* 1. The Interactive Map */}
                    {!isContactPage && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "circOut" }}
                            viewport={{ once: true }}
                            className="relative w-full h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                        >
                            <iframe
                                src="https://maps.google.com/maps?q=19.2088216,72.9805714&t=&z=18&ie=UTF8&iwloc=addr&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(1.2)" }}
                                allowFullScreen={true}
                                loading="lazy"
                                className="w-full h-full opacity-80"
                            />
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=19.2088216,72.9805714"
                                target="_blank"
                                rel="noreferrer"
                                className="absolute bottom-4 right-4 z-30 bg-white text-ink-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2"
                            >
                                Directions <ArrowUpRight size={14} />
                            </a>
                        </motion.div>
                    )}

                    {/* 2. Address & Contact */}
                    <div className="space-y-10">
                        <div className="w-full border-b border-white/10 pb-10 text-center">
                            <h2 className="font-sans font-black text-2xl md:text-3xl text-white uppercase mb-4 leading-none">VD ASSOCIATES</h2>
                            <p className="font-sans font-bold text-[10px] text-stone-500 uppercase tracking-[0.3em] leading-relaxed">
                                Shop no 07, Anandvan Society, Anand Park, Near Shreerang School, <br className="hidden sm:block" />
                                Thane West, Maharashtra 400607.
                            </p>
                        </div>

                        <div className={cn("grid grid-cols-2 gap-4", isContactPage && "max-w-md mx-auto")}>
                            <a href="tel:+918652434222" className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-center gap-3 hover:bg-brand-red/20 transition-colors">
                                <Phone size={16} className="text-brand-red" />
                                <span className="text-xs font-bold font-sans uppercase">Call</span>
                            </a>
                            <a href="mailto:contact@vdAssociates.com" className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-center gap-3 hover:bg-brand-red/20 transition-colors">
                                <Mail size={16} className="text-brand-red" />
                                <span className="text-xs font-bold font-sans uppercase">Email</span>
                            </a>
                            <a href="https://wa.me/918652434222" target="_blank" className="col-span-2 bg-white/5 border border-white/10 rounded-xl p-3 flex items-center justify-center gap-3 hover:bg-brand-red/20 transition-colors">
                                <MessageCircle size={16} className="text-brand-red" />
                                <span className="text-xs font-bold font-sans uppercase">WhatsApp Consultation</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center gap-6 border-t border-white/5 pt-8">
                    <div className="flex gap-8">
                        <a href="https://www.instagram.com/vd_associates_" target="_blank" rel="noreferrer">
                            <Instagram size={20} className="text-stone-500 hover:text-white cursor-pointer transition-colors" />
                        </a>
                        <a href="https://www.facebook.com/people/Vishal-Decorators-GROUP/100047639126143/" target="_blank" rel="noreferrer">
                            <Facebook size={20} className="text-stone-500 hover:text-white cursor-pointer transition-colors" />
                        </a>
                        <Linkedin size={20} className="text-stone-500 hover:text-white cursor-pointer transition-colors" />
                    </div>
                    <div className="text-center space-y-1">
                        <p className="font-sans text-[10px] text-stone-400 uppercase tracking-widest">
                            © 1982-2026 VD ASSOCIATES. <span className="mx-2 text-white/20">|</span> 4+ Decades of Drafting Dreams
                        </p>
                        <p className="font-sans text-[10px] text-stone-600 uppercase tracking-tight">Architects | Interior Designers | Scientific Vastu</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
