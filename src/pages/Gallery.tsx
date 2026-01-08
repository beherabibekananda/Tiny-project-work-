import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Sparkles, ChevronRight, CheckCircle2 } from "lucide-react";
import { assets } from "@/lib/assets";

const Gallery = () => {
    const galleryItems = [
        { title: "Our Specialists", image: assets.hero.specialist1 },
        { title: "Expert Consultations", image: assets.hero.specialist2 },
        { title: "Therapy Sessions", image: assets.gallery[0] },
        { title: "Sensory Play Area", image: assets.gallery[1] },
        { title: "Learning Zone", image: assets.gallery[2] },
        { title: "Pediatric Excellence", image: assets.gallery[20] },
        { title: "Developmental Care", image: assets.gallery[21] },
        { title: "World-Class Infrastructure", image: assets.gallery[22] },
    ];

    return (
        <Layout>
            {/* 1. Splendid Split-Screen Hero */}
            <section className="relative min-h-[85vh] flex items-center bg-[#0a2a24] overflow-hidden pt-20">
                <div className="container relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-white space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-teal-100 text-sm font-bold uppercase tracking-widest backdrop-blur-sm">
                            <Sparkles className="h-4 w-4" />
                            <span>A World of Discovery</span>
                        </div>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                            Our <br />
                            <span className="text-hero-gradient italic">Inspiring Spaces.</span>
                        </h1>
                        <p className="text-base md:text-lg text-white/70 leading-relaxed font-light max-w-2xl">
                            Step inside our specialized facilities, where every corner is designed to inspire joy, foster creativity, and support your child's developmental journey.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative lg:h-[80vh] flex items-center justify-center lg:items-center"
                    >
                        <div className="relative z-10 w-full max-w-xl aspect-[4/5] lg:aspect-auto lg:h-[85%] overflow-hidden rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 mb-12 lg:mb-0">
                            <img
                                src={assets.hero.specialist3}
                                alt="Tiny Triumph Multi-Sensory Play Area"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a24] via-transparent to-transparent opacity-60" />
                        </div>
                        {/* Background Decorations */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 rounded-full blur-[120px] -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 md:py-20 bg-background">
                <div className="container">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {galleryItems.map((item, index) => (
                            <div
                                key={index}
                                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-muted transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-6 text-center">
                                    <h3 className="font-display text-2xl font-bold text-primary-foreground transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                        {item.title}
                                    </h3>
                                    <div className="mt-2 h-1 w-12 bg-white rounded-full transform scale-x-0 transition-transform duration-500 delay-100 group-hover:scale-x-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Gallery;
