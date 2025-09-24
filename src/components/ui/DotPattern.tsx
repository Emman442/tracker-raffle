import { cn } from "@/lib/utils";
import { useMemo } from "react";

export function DotPattern({ className }: { className?: string }) {
    const id = useMemo(() => `dot-pattern-${Math.random().toString(36).substr(2, 9)}`, []);

    return (
        <svg
            className={cn("pointer-events-none fixed inset-0 z-[-1] h-full w-full fill-border/40", className)}
        >
            <defs>
                <pattern
                    id={id}
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                >
                    <circle cx="2" cy="2" r="1"></circle>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`}></rect>
        </svg>
    );
}
