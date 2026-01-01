import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { motion } from "framer-motion";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      {/* Global Animated Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-white">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0eb29a]/5 rounded-full blur-[120px] animate-drift" />
        <div className="absolute bottom-[10%] right-[-5%] w-[45%] h-[45%] bg-[#0eb29a]/10 rounded-full blur-[100px] animate-drift-slow" />
        <div className="absolute top-[30%] right-[10%] w-[35%] h-[35%] bg-accent/5 rounded-full blur-[150px] animate-drift-slower" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <Navbar />
      <motion.main
        className="flex-1 relative z-10"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
