"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

interface ReviewCardProps {
    review: string
    author: string
    rating?: number
}

export default function ReviewCard({ review, author, rating = 5 }: ReviewCardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mb-4 break-inside-avoid rounded-2xl p-6 bg-stone-50 dark:bg-stone-900 border border-transparent dark:border-stone-800 shadow-sm"
        >
            {/* Quote Icon */}
            <Quote className="text-red-700/20 fill-current w-8 h-8 mb-3" />

            {/* Review Text */}
            <p className="font-serif italic text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                &quot;{review}&quot;
            </p>

            {/* Footer: Author & Rating */}
            <div className="mt-4 flex items-center justify-between border-t border-stone-200 dark:border-stone-800 pt-3">
                <span className="font-sans font-bold text-[10px] text-stone-400 uppercase tracking-wider">
                    — {author}
                </span>

                <div className="flex gap-0.5">
                    {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} size={10} className="fill-amber-500 text-amber-500" />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
