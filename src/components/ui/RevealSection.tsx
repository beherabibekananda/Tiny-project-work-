import { motion } from "framer-motion";
import { ReactNode, memo } from "react";

interface RevealSectionProps {
    children: ReactNode;
    delay?: number;
}

export const RevealSection = memo(({ children, delay = 0 }: RevealSectionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="transform-gpu will-change-[transform,opacity,filter]"
        >
            {children}
        </motion.div>
    );
});

RevealSection.displayName = "RevealSection";
