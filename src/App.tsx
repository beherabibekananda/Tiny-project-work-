import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
// Lazy load page components
const Index = React.lazy(() => import("./pages/Index"));
const About = React.lazy(() => import("./pages/About"));
const Services = React.lazy(() => import("./pages/Services"));
const Booking = React.lazy(() => import("./pages/Booking"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contact = React.lazy(() => import("./pages/Contact"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ServiceDetail = React.lazy(() => import("./pages/ServiceDetail"));


import { ModeToggle } from "@/components/mode-toggle";
import { WhatsAppButton } from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import EntranceGate from "./components/ui/EntranceGate";
import React, { useState, useEffect } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [showEntrance, setShowEntrance] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Show entrance on every mount (refresh/initial load)
    setShowEntrance(true);
    setIsInitialLoad(false);
  }, []);

  useEffect(() => {
    // Show transition pulse on every route change (except initial load)
    if (!isInitialLoad) {
      setShowTransition(true);
    }
  }, [location.pathname]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <AnimatePresence>
          {showEntrance && (
            <EntranceGate mode="full" onComplete={() => setShowEntrance(false)} />
          )}
          {showTransition && (
            <EntranceGate mode="minimal" onComplete={() => setShowTransition(false)} />
          )}
        </AnimatePresence>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
          <ModeToggle />
          <WhatsAppButton />
        </div>
        <AnimatePresence mode="wait">
          <React.Suspense fallback={
            <div className="flex h-screen w-screen items-center justify-center bg-background">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
            </div>
          }>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/:id" element={<ServiceDetail />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </AnimatePresence>
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
