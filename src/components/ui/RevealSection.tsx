import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealSectionProps {
    children: ReactNode;
    delay?: number;
}

export const RevealSection = ({ children, delay = 0 }: RevealSectionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom 'Super Smooth' Cubic Bezier
            }}
        >
            {children}
        </motion.div>
    );
};
