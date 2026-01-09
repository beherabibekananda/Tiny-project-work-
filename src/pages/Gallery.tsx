import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Sparkles, ChevronRight, CheckCircle2, Play } from "lucide-react";
import { assets } from "@/lib/assets";

const Gallery = () => {
    const videoItems = [
        { title: "Sensory Mastery", ...assets.videos.showcase1 },
        { title: "Precision Motor Skills", ...assets.videos.showcase2 },
        { title: "Social Interaction", ...assets.videos.showcase3 },
    ];
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
                {/* Faded Background Image */}
                <div
                    className="absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: `url('${assets.hero.galleryHero}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <div className="absolute inset-0 bg-[#0a2a24]/40 z-0" />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-white space-y-8 flex flex-col items-center text-center max-w-4xl mx-auto"
                    >
                        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                            Our <br />
                            <span className="text-hero-gradient italic">Inspiring Spaces.</span>
                        </h1>
                        <p className="text-base md:text-xl text-white/70 leading-relaxed font-light max-w-2xl">
                            Step inside our specialized facilities, where every corner is designed to inspire joy, foster creativity, and support your child's developmental journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Video Showcase Section */}
            <section className="py-20 bg-secondary/10">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-3xl font-bold text-foreground md:text-5xl"
                        >
                            Clinic in <span className="text-primary italic">Motion</span>
                        </motion.h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            Witness the specialized therapeutic techniques and joyous moments within our centre.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {videoItems.map((video, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative aspect-square overflow-hidden rounded-xl bg-card shadow-sm border border-border/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                            >
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster={video.poster}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                >
                                    <source src={video.webm} type="video/webm" />
                                    <source src={video.mp4} type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="h-16 w-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                        <Play className="h-8 w-8 text-white fill-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-8 transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{video.title}</h3>
                                    <div className="mt-2 h-0.5 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Image Gallery Grid */}
            <section className="py-12 md:py-24 bg-secondary/5">
                <div className="container">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group relative aspect-square overflow-hidden rounded-xl bg-card border border-border/40 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-8">
                                    <h3 className="font-display text-xl font-bold text-white transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Gallery;
