"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TilesProps {
    className?: string
    rows?: number
    cols?: number
    tileClassName?: string
    tileSize?: "sm" | "md" | "lg"
}

const tileSizes = {
    sm: "tile-sm",
    md: "tile-md",
    lg: "tile-lg",
}

export function Tiles({
    className,
    rows = 100,
    cols = 10,
    tileClassName,
    tileSize = "md",
}: TilesProps) {
    const rowsArray = new Array(rows).fill(1)
    const colsArray = new Array(cols).fill(1)

    return (
        <div
            className={cn(
                "tiles-container",
                className
            )}
        >
            {rowsArray.map((_, i) => (
                <motion.div
                    key={`row-${i}`}
                    className={cn(
                        "tile-row",
                        tileClassName
                    )}
                >
                    {colsArray.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: `var(--tile-hover)`,
                                transition: { duration: 0 }
                            }}
                            animate={{
                                transition: { duration: 2 }
                            }}
                            key={`col-${j}`}
                            className={cn(
                                tileSizes[tileSize],
                                "tile",
                                tileClassName
                            )}
                        />
                    ))}
                </motion.div>
            ))}
        </div>
    )
}
