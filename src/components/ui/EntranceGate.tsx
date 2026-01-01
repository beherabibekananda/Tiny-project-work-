import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Stethoscope, Sparkles } from "lucide-react";

const EntranceGate = ({ onComplete }: { onComplete: () => void }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000); // Start opening after 1s

        const completionTimer = setTimeout(() => {
            onComplete();
        }, 2500); // Remove component after 2.5s

        return () => {
            clearTimeout(timer);
            clearTimeout(completionTimer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[9999] flex overflow-hidden pointer-events-none">
            {/* Left Door */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isOpen ? "-100%" : 0 }}
                transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
                className="relative w-1/2 h-full bg-[#0a2a24] border-r border-white/10 flex flex-col items-end justify-center pointer-events-auto"
            >
                <div className="mr-8 space-y-4 text-center">
                    <motion.div
                        animate={{
                            y: isOpen ? [0, -10, 0] : 0,
                            opacity: isOpen ? 0.5 : 1
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="p-4 rounded-full bg-primary/20 text-primary border border-primary/30">
                            <Stethoscope className="h-12 w-12" />
                        </div>
                        <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Opening Doors</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Right Door */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isOpen ? "100%" : 0 }}
                transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
                className="relative w-1/2 h-full bg-[#0a2a24] border-l border-white/10 flex flex-col items-start justify-center pointer-events-auto"
            >
                <div className="ml-8 space-y-4 text-center">
                    <motion.div
                        animate={{
                            y: isOpen ? [0, -10, 0] : 0,
                            opacity: isOpen ? 0.5 : 1
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <div className="p-4 rounded-full bg-accent/20 text-accent border border-accent/30">
                            <Sparkles className="h-12 w-12" />
                        </div>
                        <span className="text-white/60 text-xs font-bold uppercase tracking-widest">To Triumphs</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Center Logo/Text that fades out */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="absolute inset-0 flex items-center justify-center z-20"
                    >
                        <div className="text-center space-y-4 p-12 rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10">
                            <img src="/logo.png" alt="Tiny Triumph" className="h-24 w-auto mx-auto mb-4" />
                            <h2 className="text-white text-3xl font-display font-medium tracking-widest">TINY TRIUMPH</h2>
                            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EntranceGate;
