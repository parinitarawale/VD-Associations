"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle, Clock, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ContactPage() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedTimeSlot, setSelectedTimeSlot] = useState("")

    const sessions = {
        morning: ["10:00", "11:00", "12:00", "12:30"],
        evening: ["03:00", "04:00", "05:00", "06:00", "06:30"]
    }

    const dates = Array.from({ length: 14 }, (_, i) => {
        const d = new Date()
        d.setDate(d.getDate() + i)
        return d
    })

    return (
        <main className="pt-24 min-h-screen">
            <div className="px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-sans text-ink-black uppercase tracking-tight mb-4">
                        Start Your <span className="text-brand-red">Journey</span>
                    </h1>
                    <p className="font-sans text-sm md:text-base font-bold uppercase tracking-[0.3em] text-graphite mb-4">
                        Book a consultation with Dr. Vishal & Mr. Sharad
                    </p>
                    <div className="w-24 h-1 bg-brand-red mx-auto" />
                </motion.div>
            </div>

            <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-32">

                {/* Booking System */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-[32px] p-10 border border-sketch-grey shadow-2xl shadow-ink-black/5"
                >
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 bg-brand-red/5 text-brand-red rounded-2xl flex items-center justify-center border border-brand-red/10">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-sans font-bold text-ink-black uppercase leading-tight">Reserve Your Slot</h2>
                            <p className="text-[10px] text-graphite uppercase font-bold tracking-widest">Available for Mumbai, Thane & Pune</p>
                        </div>
                    </div>

                    {/* Date Strip */}
                    <div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x">
                        {dates.map((date, i) => {
                            const isSelected = date.toDateString() === selectedDate.toDateString()
                            const isSunday = date.getDay() === 0

                            return (
                                <button
                                    key={i}
                                    onClick={() => setSelectedDate(date)}
                                    disabled={isSunday}
                                    className={cn(
                                        "flex flex-col items-center justify-center min-w-[75px] h-[100px] rounded-2xl snap-start border-2 transition-all",
                                        isSelected
                                            ? "bg-brand-red text-white border-brand-red shadow-xl scale-105"
                                            : "bg-white border-sketch-grey text-ink-black hover:border-brand-red/50 hover:text-brand-red",
                                        isSunday && "opacity-20 cursor-not-allowed grayscale"
                                    )}
                                >
                                    <span className={cn("text-[9px] font-bold uppercase mb-1 tracking-widest", isSelected ? "text-white/70" : "text-graphite")}>
                                        {date.toLocaleDateString('en-IN', { weekday: 'short' })}
                                    </span>
                                    <span className="text-2xl font-black">
                                        {date.getDate()}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-10">
                        <TimeSession
                            label="Morning Alignment"
                            slots={sessions.morning}
                            selected={selectedTimeSlot}
                            onSelect={setSelectedTimeSlot}
                        />

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t-2 border-dashed border-sketch-grey" /></div>
                            <div className="relative flex justify-center"><span className="px-4 bg-white text-[10px] uppercase font-bold text-stone-400 tracking-[0.5em]">Midday Break</span></div>
                        </div>

                        <TimeSession
                            label="Evening Visioning"
                            slots={sessions.evening}
                            selected={selectedTimeSlot}
                            onSelect={setSelectedTimeSlot}
                        />
                    </div>

                    <button
                        disabled={!selectedTimeSlot}
                        className={cn(
                            "group w-full mt-12 py-6 rounded-2xl font-sans font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all",
                            selectedTimeSlot
                                ? "bg-brand-red text-white shadow-2xl hover:bg-ink-black transform hover:-translate-y-1"
                                : "bg-paper-grey text-stone-400 cursor-not-allowed border border-sketch-grey"
                        )}
                    >
                        Confirm Booking <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-[10px] text-graphite uppercase font-bold tracking-widest mt-6 opacity-60">Consultation handled by Dr. Vishal & Mr. Sharad</p>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-12 shrink-0"
                >
                    <div className="space-y-6">
                        <ContactCard
                            icon={<Phone size={24} />}
                            title="Direct Line"
                            detail="086524 34222"
                            link="tel:+918652434222"
                        />
                        <ContactCard
                            icon={<Mail size={24} />}
                            title="Inquiries"
                            detail="contact@vdAssociates.com"
                            link="mailto:contact@vdAssociates.com"
                        />
                        <div className="p-8 bg-paper-red/5 rounded-[32px] border border-brand-red/10 flex items-start gap-6">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-red shadow-sm border border-sketch-grey">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2 leading-none">Studio Location</p>
                                <p className="text-lg font-sans font-bold text-ink-black leading-snug">Shop no 07, Anandvan Society, Anand Park, Near Shreerang School, Thane West, Maharashtra 400607.</p>
                            </div>
                        </div>
                    </div>

                    {/* Simple Map Preview */}
                    <div className="bg-white rounded-[32px] p-2 border border-sketch-grey shadow-lg overflow-hidden h-[300px]">
                        <iframe
                            src="https://maps.google.com/maps?q=19.2088216,72.9805714&t=&z=18&ie=UTF8&iwloc=addr&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(1) contrast(1.1)" }}
                            allowFullScreen={true}
                            loading="lazy"
                            className="rounded-[28px]"
                        />
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

function TimeSession({ label, slots, selected, onSelect }: any) {
    return (
        <div>
            <h4 className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-6 border-l-2 border-brand-red pl-3 leading-none">{label}</h4>
            <div className="grid grid-cols-4 gap-4">
                {slots.map((time: string) => (
                    <button
                        key={time}
                        onClick={() => onSelect(time)}
                        className={cn(
                            "py-4 rounded-xl text-xs font-bold border-2 transition-all",
                            selected === time
                                ? "bg-ink-black border-ink-black text-white shadow-xl scale-105"
                                : "bg-white border-sketch-grey text-graphite hover:border-brand-red hover:text-brand-red shadow-sm"
                        )}
                    >
                        {time}
                    </button>
                ))}
            </div>
        </div>
    )
}

function ContactCard({ icon, title, detail, link }: any) {
    return (
        <a href={link} className="block group">
            <div className="p-8 bg-white rounded-[32px] border border-sketch-grey shadow-sm group-hover:shadow-2xl transition-all group-hover:border-brand-red flex items-center gap-6">
                <div className="w-14 h-14 bg-white border border-sketch-grey rounded-2xl flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest leading-none mb-2">{title}</p>
                    <p className="text-xl font-sans font-black text-ink-black truncate">{detail}</p>
                </div>
            </div>
        </a>
    )
}
