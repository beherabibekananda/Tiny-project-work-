import { ReactNode } from "react";
import Footer from "./Footer";
import { assets } from "@/lib/assets";

import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const particles = Array.from({ length: 6 });

  return (
    <div className="flex min-h-screen flex-col relative bg-background">
      {/* Fixed Animated Background Layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-background">
        {/* Floating Blobs - Highly Optimized */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, 20, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[100px] will-change-transform"
          />

          <motion.div
            animate={{
              x: [0, -30, 15, 0],
              y: [0, 50, -25, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-[5%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[80px] will-change-transform"
          />
        </div>

        {/* Floating Particles - Simplified for smoothness */}
        <div className="absolute inset-0 hidden md:block">
          {particles.map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0.1
              }}
              animate={{
                y: ["-10%", "110%"],
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
                delay: -Math.random() * 20
              }}
              className="absolute w-1 h-1 bg-primary/20 rounded-full will-change-transform"
            />
          ))}
        </div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <motion.main
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
