import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EntranceGateProps {
    onComplete: () => void;
    mode?: "full" | "minimal";
}

const EntranceGate = ({ onComplete, mode = "full" }: EntranceGateProps) => {
    const [animationStage, setAnimationStage] = useState<"ecg" | "peak" | "logo" | "thread" | "reveal" | "complete">("ecg");

    useEffect(() => {
        // Timeline adjustments based on mode
        let peakDelay = 1200;
        let logoDelay = 1800;
        let threadDelay = 2200;
        let revealDelay = 2800;
        let completeDelay = 5200;

        if (mode === "minimal") {
            peakDelay = 400;
            logoDelay = 401;
            threadDelay = 402;
            revealDelay = 800;
            completeDelay = 1800;
        }

        const peakTimer = setTimeout(() => setAnimationStage("peak"), peakDelay);

        const logoTimer = setTimeout(() => {
            if (mode === "full") setAnimationStage("logo");
            else setAnimationStage("reveal");
        }, logoDelay);

        const threadTimer = mode === "full" ? setTimeout(() => setAnimationStage("thread"), threadDelay) : null;
        const revealTimer = mode === "full" ? setTimeout(() => setAnimationStage("reveal"), revealDelay) : null;
        const completeTimer = setTimeout(() => onComplete(), completeDelay);

        return () => {
            clearTimeout(peakTimer);
            clearTimeout(logoTimer);
            if (threadTimer) clearTimeout(threadTimer);
            if (revealTimer) clearTimeout(revealTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete, mode]);

    const showLogo = mode === "full" && (animationStage === "peak" || animationStage === "logo" || animationStage === "thread" || animationStage === "reveal");
    const isRevealActive = animationStage === "reveal";
    const isThreadActive = animationStage === "thread" || animationStage === "reveal";

    // Complex 15-point polygon for the "Wrinkled Blanket" effect
    const initialPath = "polygon(0% 0%, 100% 0%, 100% 100%, 90% 100%, 80% 100%, 70% 100%, 60% 100%, 55% 100%, 50% 100%, 45% 100%, 40% 100%, 30% 100%, 20% 100%, 10% 100%, 0% 100%)";
    const wrinkledPath = "polygon(0% 0%, 100% 0%, 100% -20%, 92% -10%, 80% -30%, 72% -15%, 60% -45%, 55% -70%, 50% -110%, 45% -70%, 40% -45%, 28% -15%, 20% -30%, 8% -10%, 0% -20%)";

    return (
        <motion.div
            initial={mode === "minimal" ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
        >
            {/* The Wrinkled Blanket Banner */}
            <motion.div
                initial={mode === "full" ? { clipPath: initialPath } : { opacity: 1 }}
                animate={
                    mode === "full"
                        ? { clipPath: isRevealActive ? wrinkledPath : initialPath }
                        : { opacity: isRevealActive ? 0 : 1 }
                }
                transition={
                    mode === "full"
                        ? {
                            duration: 2.2,
                            ease: [0.77, 0, 0.175, 1],
                            type: "spring",
                            damping: 18,
                            stiffness: 60
                        }
                        : { duration: 0.8, ease: "easeOut" }
                }
                className={`absolute inset-0 bg-[#0a2a24] z-[45] ${mode === "minimal" ? "bg-opacity-100 shadow-none border-none" : ""}`}
            >
                {/* Panel Texture/Grid */}
                <div
                    className={`absolute inset-0 opacity-[0.06] pointer-events-none ${mode === "minimal" ? "opacity-[0.03]" : ""}`}
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '48px 48px'
                    }}
                />

                {/* The Thread (Visible in Full Mode) */}
                {mode === "full" && (
                    <div className="absolute inset-x-0 bottom-0 h-screen flex flex-col items-center justify-end">
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                                height: isThreadActive ? "60vh" : "0vh",
                                opacity: isThreadActive ? 1 : 0,
                                y: isRevealActive ? "-110vh" : "0vh" // Matching the deepest point of wrinkledPath
                            }}
                            transition={{
                                height: { duration: 0.8, ease: "easeOut" },
                                opacity: { duration: 0.3 },
                                y: {
                                    duration: 2.2,
                                    ease: [0.77, 0, 0.175, 1],
                                    type: "spring",
                                    damping: 18,
                                    stiffness: 60
                                }
                            }}
                            className="absolute top-0 left-1/2 w-[2px] bg-primary shadow-[0_0_15px_rgba(72,160,147,0.8)] z-50 origin-top -translate-x-1/2"
                        >
                            {/* Hook Point */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3 w-3 bg-primary rounded-full shadow-[0_0_10px_rgba(72,160,147,0.5)]" />
                        </motion.div>
                    </div>
                )}

                {/* Identity Presentation (Center) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence>
                        {showLogo && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, y: 30 }}
                                animate={{
                                    opacity: isRevealActive ? 0 : 1,
                                    scale: isRevealActive ? 1.2 : 1,
                                    y: isRevealActive ? -450 : 0, // Pull it up fast with the blanket
                                    filter: isRevealActive ? "blur(20px)" : "blur(0px)"
                                }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
                                className="relative z-[60] flex flex-col items-center"
                            >
                                {/* Logo with Pulse Glow */}
                                <div className="relative mb-10">
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.4, 1],
                                            opacity: [0.3, 0.6, 0.3]
                                        }}
                                        transition={{ duration: 2.5, repeat: Infinity }}
                                        className="absolute inset-0 bg-primary/40 blur-[80px] opacity-40 mix-blend-screen"
                                    />
                                    <div className="p-12 md:p-14 rounded-full border border-white/10 bg-white backdrop-blur-2xl relative overflow-hidden flex items-center justify-center h-48 w-48 md:h-64 md:w-64">
                                        <img src="/logo.webp" alt="Tiny Triumph" className="h-full w-full object-cover scale-[1.3] rounded-full" />
                                    </div>
                                </div>

                                <h2 className="text-white text-2xl sm:text-4xl md:text-7xl font-display font-bold tracking-[0.2em] sm:tracking-[0.45em] mb-4 sm:mb-6 drop-shadow-2xl text-center px-4">
                                    TINY <span className="text-primary italic">TRIUMPH</span>
                                </h2>

                                <div className="flex items-center gap-4 sm:gap-8 px-4">
                                    <div className="h-px w-8 sm:w-14 bg-primary/30" />
                                    <p className="text-white/40 text-[8px] sm:text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] sm:tracking-[1em] text-center">
                                        Nurturing Growth, Building Trust
                                    </p>
                                    <div className="h-px w-8 sm:w-14 bg-primary/30" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Corner Markers (Visible until reveal) */}
            {mode === "full" && !isRevealActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-[44] pointer-events-none"
                >
                    <div className="absolute top-16 left-16 w-12 h-12 border-l border-t border-white/10 hidden md:block" />
                    <div className="absolute top-16 right-16 w-12 h-12 border-r border-t border-white/10 hidden md:block" />
                    <div className="absolute bottom-16 left-16 w-12 h-12 border-l border-b border-white/10 hidden md:block" />
                    <div className="absolute bottom-16 right-16 w-12 h-12 border-r border-b border-white/10 hidden md:block" />
                </motion.div>
            )}

            {/* The Vital Line (ECG) Layer */}
            <AnimatePresence>
                {animationStage === "ecg" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center z-[100] h-[240px]"
                    >
                        <div className="w-full max-w-2xl px-12">
                            <svg viewBox="0 0 100 20" className="w-full overflow-visible">
                                <motion.path
                                    d="M 0 10 L 40 10 L 42 2 L 48 18 L 50 10 L 100 10"
                                    fill="transparent"
                                    strokeWidth="0.8"
                                    stroke="hsl(174, 45%, 55%)"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: [0, 1, 0.5, 1] }}
                                    transition={{ duration: mode === "minimal" ? 0.6 : 1.4, ease: "easeInOut" }}
                                    className="drop-shadow-[0_0_15px_rgba(72,160,147,0.8)]"
                                />
                            </svg>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default EntranceGate;
