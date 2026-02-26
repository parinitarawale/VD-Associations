"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-sketch-grey">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        V
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-sans font-bold text-sm tracking-widest text-ink-black uppercase">VD Associates</span>
                        <span className="font-sans text-[8px] tracking-[0.3em] text-brand-red font-bold uppercase">EST. 1982</span>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "font-sans text-xs font-bold uppercase tracking-widest transition-colors relative py-2",
                                    isActive ? "text-brand-red" : "text-graphite hover:text-ink-black"
                                )}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                                    />
                                )}
                            </Link>
                        )
                    })}
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center gap-4 relative z-[110]">
                    <Link
                        href="/contact"
                        className="text-[9px] font-bold uppercase tracking-widest text-white bg-brand-red px-4 py-2 rounded-full shadow-md"
                    >
                        Book
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-ink-black hover:text-brand-red transition-colors"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[120] bg-white flex flex-col pt-24 px-8 md:hidden"
                    >
                        {/* Explicit Close Button inside Overlay */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-2 text-ink-black hover:text-brand-red transition-all flex items-center gap-2 group"
                        >
                            <span className="font-sans font-bold text-[10px] uppercase tracking-widest group-hover:pr-1 transition-all">Close</span>
                            <X size={28} />
                        </button>

                        <div className="flex flex-col gap-8">
                            {NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "font-sans text-2xl font-bold uppercase tracking-widest transition-colors",
                                            isActive ? "text-brand-red" : "text-graphite"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                            <div className="mt-8 pt-8 border-t border-sketch-grey">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-brand-red text-white py-4 rounded-2xl font-sans font-bold uppercase tracking-widest"
                                >
                                    Start a Project
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
