import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { assets } from "@/lib/assets";

import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const particles = Array.from({ length: 6 });

  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden bg-background">
      {/* Fixed Animated Background Layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Floating Blobs */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, 40, 80, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 90, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.05, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[5%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, 100, -80, 0],
            y: [0, -80, 40, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] right-[15%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[160px]"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {particles.map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.1
              }}
              animate={{
                x: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`
                ],
                y: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`
                ],
              }}
              transition={{
                duration: 15 + Math.random() * 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-2 h-2 md:w-3 md:h-3 bg-primary/30 rounded-full blur-[1px]"
              style={{
                filter: `blur(${Math.random() * 3 + 1}px)`,
              }}
            />
          ))}
        </div>

        {/* Large Faded Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] dark:opacity-[0.04] overflow-hidden">
          <img
            src={assets.logos.main}
            alt=""
            className="w-[80%] h-[80%] object-contain animate-pulse-slow"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1.5px, transparent 1.5px)',
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
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
