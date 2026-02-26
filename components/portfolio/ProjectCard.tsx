"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
    src: string
    title: string
    category: string
    aspectRatio?: "square" | "portrait"
}

export default function ProjectCard({ src, title, category, aspectRatio = "portrait" }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="group relative w-full mb-4 break-inside-avoid"
        >
            <div className={cn(
                "relative overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-900",
                aspectRatio === "square" ? "aspect-square" : "aspect-[3/4]"
            )}>
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                />
            </div>
        </motion.div>
    )
}
