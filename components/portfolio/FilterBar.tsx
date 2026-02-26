"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FilterBarProps {
    categories: string[]
    activeCategory: string
    onSelect: (category: string) => void
}

export default function FilterBar({ categories, activeCategory, onSelect }: FilterBarProps) {
    return (
        <div className="sticky top-0 z-40 bg-white border-b border-stone-100">
            <div className="flex overflow-x-auto no-scrollbar py-4 px-4 gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onSelect(category)}
                        className={cn(
                            "px-5 py-2 rounded-full text-sm md:text-base font-bold font-sans whitespace-nowrap transition-all duration-300",
                            activeCategory === category
                                ? "bg-stone-900 text-white dark:bg-white dark:text-black shadow-md scale-105"
                                : "bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700 hover:border-stone-500 dark:hover:border-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}
