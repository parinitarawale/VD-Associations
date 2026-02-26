"use client"

import * as React from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface BookingDrawerProps {
    isOpen: boolean
    onClose: () => void
    selectedDate: Date
    selectedTime: string
}

export function BookingDrawer({ isOpen, onClose, selectedDate, selectedTime }: BookingDrawerProps) {
    const [name, setName] = React.useState("")
    const [whatsapp, setWhatsapp] = React.useState("")
    const [purpose, setPurpose] = React.useState("New Home")

    const purposes = ["New Home", "Renovation", "Vastu"]

    const handleSubmit = () => {
        // Basic validation
        if (!name || !whatsapp) return

        const message = `Hello VD Associates, I would like to reserve a slot.
    
    Name: ${name}
    Date: ${selectedDate.toDateString()}
    Time: ${selectedTime}
    Purpose: ${purpose}
    `

        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/91${whatsapp}?text=${encodedMessage}`

        // Open WhatsApp
        window.open(whatsappUrl, "_blank")
        onClose()
    }

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent side="bottom" className="h-[60vh] rounded-t-3xl border-t-0 p-6 bg-white dark:bg-stone-900">
                <SheetHeader className="text-left mb-8">
                    <SheetTitle className="font-serif text-2xl text-stone-900 dark:text-stone-50">
                        Confirm Appointment
                    </SheetTitle>
                    <SheetDescription className="font-sans font-bold text-stone-600 dark:text-stone-400">
                        {selectedDate.toLocaleDateString("en-IN", { weekday: 'short', day: 'numeric', month: 'short' })} @ {selectedTime}
                    </SheetDescription>
                </SheetHeader>

                <div className="space-y-8">
                    {/* Name Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-stone-500">Full Name</label>
                        <input
                            className="w-full border-b border-stone-300 dark:border-stone-700 bg-transparent py-2 text-stone-900 dark:text-stone-100 focus:outline-none focus:border-stone-900 dark:focus:border-stone-100 transition-colors"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* WhatsApp Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium uppercase tracking-wider text-stone-500">WhatsApp Number</label>
                        <div className="flex items-center border-b border-stone-300 dark:border-stone-700 pb-2">
                            <span className="text-stone-500 mr-2">+91</span>
                            <input
                                className="w-full bg-transparent text-stone-900 dark:text-stone-100 focus:outline-none placeholder:text-stone-300 dark:placeholder:text-stone-600"
                                placeholder="98765 43210"
                                type="tel"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                            />
                            {/* WhatsApp Icon inside input */}
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-stone-400"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </div>
                    </div>

                    {/* Purpose Pills */}
                    <div className="space-y-3">
                        <label className="text-xs font-medium uppercase tracking-wider text-stone-500">Purpose</label>
                        <div className="flex gap-2">
                            {purposes.map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPurpose(p)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                                        purpose === p
                                            ? "bg-red-700 text-white border-red-700"
                                            : "bg-transparent text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700 hover:border-stone-400"
                                    )}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                        onClick={handleSubmit}
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 rounded-xl mt-4"
                    >
                        <Send className="mr-2 h-4 w-4" /> Send Request via WhatsApp
                    </Button>

                </div>
            </SheetContent>
        </Sheet>
    )
}
