import { cn } from "@/lib/utils";
import { useMemo } from "react";

export function DotPattern({ className }: { className?: string }) {
    const id = useMemo(() => `dot-pattern-${Math.random().toString(36).substr(2, 9)}`, []);

    return (
        <svg
            className={cn("pointer-events-none fixed inset-0 z-[-1] h-full w-full fill-transparent", className)}
        >
            <defs>
                <pattern
                    id={id}
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                >
                    <path d="M0 40L40 40L40 0" fill="none" className="stroke-border/20" strokeWidth="3"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#${id})`}></rect>
        </svg>
    );
}
