"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const HERO_IMAGES = [
  { src: "/Living Room/WhatsApp Image 2026-02-17 at 10.05.11.jpeg", alt: "Luxury living at VD Associates" },
  { src: "/Entrance/entrance1.jpeg", alt: "Grand Entrance Design" },
  { src: "/Bedroom /bed1.jpeg", alt: "Executive Bedroom Suite" },
  { src: "/Kitchen/kitchen1.jpeg", alt: "Modern Gourmet Kitchen" },
  { src: "/Mandir/mandir1.jpeg", alt: "Serene Temple Space" }
]

const TESTIMONIALS = [
  {
    quote: "We were worried about handling contractors, but Mr. Sharad Sonavane’s experience really shows. The civil work was flawless. Dr. Vishal gave us a design that our friends can't stop complimenting. A perfect father-son duo!",
    author: "The Deshmukh Family",
    location: "Hiranandani Estate, Thane"
  },
  {
    quote: "I wanted a home that followed Vastu principles but didn't look old-fashioned. Dr. Vishal found the perfect balance. The 3D renders were exactly what we got in the end.",
    author: "Mr. Rajesh Iyer",
    location: "Dadar West, Mumbai"
  },
  {
    quote: "Their attention to detail in the kitchen design was exceptional. It's now the heart of our home. Ergonomic, stylish, and perfect for our needs.",
    author: "Mrs. Meena Kulkarni",
    location: "Eon Waterfront, Pune"
  },
  {
    quote: "From the first meeting over chai to the final handover, the process was transparent. Mr. Sharad's civil expertise gave us immense peace of mind.",
    author: "The Kapoor Family",
    location: "Worli, Mumbai"
  }
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="flex flex-col">
      {/* The Living Canvas Hero */}
      <section className="relative min-h-[95vh] flex items-center justify-center p-4 md:p-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative w-full md:w-[85%] h-[70vh] md:h-[80vh] bg-white p-3 md:p-6 shadow-2xl rounded-sm border-[1px] border-brand-red/20 overflow-hidden"
        >
          <div className="absolute inset-2 md:inset-4 border border-brand-red pointer-events-none z-10 opacity-30" />

          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <motion.img
                  src={HERO_IMAGES[currentIndex].src}
                  alt={HERO_IMAGES[currentIndex].alt}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 4.5, ease: "linear" }}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-black/80 via-ink-black/20 to-transparent" />

            <div className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center px-6 pb-12">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="max-w-4xl"
              >
                <h1 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase tracking-tighter leading-none mb-3">
                  V. D. <span className="text-brand-red">Associates</span> <br />
                </h1>
                <p className="text-white/80 font-sans font-bold text-[8px] md:text-xs uppercase tracking-[0.4em] mb-6">
                  Crafting Legacies Since 1982
                </p>

                <div className="flex flex-row flex-wrap gap-3 justify-center items-center">
                  <Link
                    href="/projects"
                    className="px-6 py-3 bg-brand-red text-white font-sans font-bold uppercase tracking-widest text-[9px] rounded-full hover:bg-white hover:text-brand-red transition-all shadow-xl whitespace-nowrap"
                  >
                    View Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans font-bold uppercase tracking-widest text-[9px] rounded-full hover:bg-white hover:text-ink-black transition-all whitespace-nowrap"
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-10 right-10 z-20 hidden md:block">
              <p className="font-sans font-black text-white/50 text-xs uppercase tracking-[0.5em] origin-right rotate-90 translate-y-full">EST. 1982</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-ink-black text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-sans font-bold uppercase mb-2">4 Decades of Excellence</h2>
            <p className="text-stone-400 font-body">Two Generations. One Vision. Your Sanctuary.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            <StatItem value={40} suffix="+" label="Years" />
            <StatItem value={400} suffix="+" label="Projects" />
            <StatItem value={100} suffix="%" label="Vastu" />
          </div>
        </div>
      </section>

      {/* Voices of Trust (Infinite Marquee) */}
      <section className="py-32 px-6 bg-transparent overflow-hidden border-t border-sketch-grey">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl font-sans font-bold text-ink-black uppercase text-center underline decoration-brand-red underline-offset-8 decoration-2">
            Voices of <span className="text-brand-red">Trust</span>
          </h2>
        </div>

        <div className="relative flex overflow-hidden group">
          <motion.div
            className="flex whitespace-nowrap gap-8 py-10"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* Array tripled for seamless loop across large screens */}
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard
                key={i}
                quote={t.quote}
                author={t.author}
                location={t.location}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blue-Grey Philosophy Block */}
      <section className="py-16 bg-slate-900 text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-drafting-paper opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-4xl font-sans font-bold uppercase tracking-tighter leading-none">
              Building Beyond <span className="text-brand-red">Blueprint</span>
            </h2>
            <p className="text-slate-400 font-body text-lg md:text-xl italic max-w-3xl mx-auto font-light leading-relaxed">
              "We don't just create structures; we engineer the backdrop of your life's most precious moments. 40 years of precision, now entering a new era of luxury."
            </p>
            <div className="flex justify-center gap-4">
              <div className="h-0.5 w-12 bg-white/20 my-auto" />
              <div className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              <div className="h-0.5 w-12 bg-white/20 my-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Teaser */}
      <section className="py-32 px-6 border-t border-sketch-grey relative z-10 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-ink-black uppercase leading-tight">
              From Sketch <br /> to <span className="text-brand-red">Handover</span>
            </h2>
            <p className="text-xl text-graphite font-body">
              We specialize in premium residential architecture, blending hand-drawn precision with modern 3D visualization.
            </p>
            <Link href="/process" className="inline-flex items-center gap-2 text-brand-red font-sans font-bold uppercase tracking-widest group">
              View Our Process <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden border border-sketch-grey shadow-lg mt-8">
              <img src="/Dining Table/WhatsApp Image 2026-02-17 at 10.05.20.jpeg" className="w-full h-full object-cover" alt="Bespoke Dining Area" />
            </div>
            <div className="aspect-[3/4] bg-white rounded-2xl overflow-hidden border border-sketch-grey shadow-lg">
              <img src="/Living Room/WhatsApp Image 2026-02-17 at 10.05.21.jpeg" className="w-full h-full object-cover" alt="Architectural Detail" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-sans font-black text-brand-red">
        <Counter value={value} />{suffix}
      </p>
      <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-stone-500 mt-2">{label}</p>
    </div>
  )
}

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

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
  }, [value, hasStarted])

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true }}
    >
      {count}
    </motion.span>
  )
}

function TestimonialCard({ quote, author, location }: any) {
  return (
    <div
      className="bg-white p-8 rounded-3xl border border-sketch-grey shadow-sm hover:shadow-xl transition-all relative w-[400px] flex-shrink-0 whitespace-normal h-full flex flex-col"
    >
      <div className="text-brand-red mb-6">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor">
          <path d="M10 25c0-5.5 4.5-10 10-10v-5c-8.3 0-15 6.7-15 15s6.7 15 15 15v-5c-5.5 0-10-4.5-10-10zm20 0c0-5.5 4.5-10 10-10v-5c-8.3 0-15 6.7-15 15s6.7 15 15 15v-5c-5.5 0-10-4.5-10-10z" />
        </svg>
      </div>
      <p className="text-graphite font-body italic text-base leading-relaxed mb-6">"{quote}"</p>
      <div className="border-t border-sketch-grey pt-6 mt-auto">
        <p className="font-sans font-bold text-ink-black uppercase text-xs">{author}</p>
        <p className="text-[10px] text-graphite uppercase tracking-widest font-medium mt-1">{location}</p>
      </div>
    </div>
  )
}
