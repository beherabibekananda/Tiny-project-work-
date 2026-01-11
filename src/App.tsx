import React, { useState, useEffect, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { WhatsAppButton } from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import EntranceGate from "./components/ui/EntranceGate";
import Navbar from "./components/layout/Navbar";

// Lazy load page components
const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Booking = React.lazy(() => import("./pages/Booking"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ServiceDetail = React.lazy(() => import("./pages/ServiceDetail"));

const queryClient = new QueryClient();

import SmoothScroll from "./components/SmoothScroll";

const AppContent = () => {
  const location = useLocation();
  const [gateMode, setGateMode] = useState<"full" | "minimal" | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Initial load: show full entrance gate
    setGateMode("full");
    setIsInitialLoad(false);
  }, []);

  useEffect(() => {
    // Route changes: show minimal pulse ONLY on major navigation
    // if (!isInitialLoad) {
    //   setGateMode("minimal");
    // }
    // Removing minimal gate for every route change as it can feel clunky
    // Instead we use Framer Motion page transitions below
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <SmoothScroll>
          <AnimatePresence mode="wait">
            {gateMode && (
              <EntranceGate
                key={gateMode === "full" ? "full" : location.pathname}
                mode={gateMode}
                onComplete={() => setGateMode(null)}
              />
            )}
          </AnimatePresence>
          <Navbar />
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
            <ModeToggle />
            <WhatsAppButton />
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="transform-gpu"
            >
              <React.Suspense fallback={
                <div className="flex h-screen w-screen items-center justify-center bg-background">
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                </div>
              }>
                <Routes location={location}>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services/:id" element={<ServiceDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </React.Suspense>
            </motion.div>
          </AnimatePresence>
        </SmoothScroll>
      </TooltipProvider>
    </ThemeProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
