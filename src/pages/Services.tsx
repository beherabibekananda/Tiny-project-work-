import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  ChevronRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Star,
  Quote,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const Services = () => {

  return (
    <Layout>
      {/* 1. Theatrical Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden py-24 md:py-32">
        {/* Background Image with Overlay */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1600&h=900&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
        </motion.div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-xl font-bold tracking-[0.4em] text-white/90 uppercase mb-8 drop-shadow-lg">
                Clinical Excellence
              </h2>
              <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tight text-white leading-[1] mb-10 drop-shadow-2xl">
                Crafting <span className="italic text-hero-gradient">Brighter</span> Futures.
              </h1>
              <p className="mx-auto max-w-3xl text-2xl text-white leading-relaxed font-light drop-shadow-md">
                Tailored therapy programs designed to unlock the unique potential within every child. Experience world-class care in a boutique clinical setting.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Abstract Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </section>

      {/* 2. Boutique Services Showcase */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block h-[520px] overflow-hidden rounded-[3.5rem] bg-card border border-border/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] hover:-translate-y-2"
                >
                  {/* Black Shade Sweep Effect */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none bg-[#1d2f38]/5"
                    initial={{ y: "-210%", rotate: 90, scaleX: 0.5, scaleY: 1.5 }}
                    whileHover={{ y: "210%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Light Sweep Effect */}
                  <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:translate-x-[300%]" />
                  </div>

                  <div className="h-48 w-full overflow-hidden relative z-20">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>

                  <div className="relative z-30 flex h-full flex-col p-10 transition-all duration-300">
                    <div className="mb-6 relative">
                      {/* Icon Backwash Effect */}
                      <div className={`flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-background/80 backdrop-blur-sm shadow-xl transition-all duration-500 cubic-bezier(0.62, 0.21, 0.45, 1.52) group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 -mt-20 relative z-40 ${service.iconColor}`}>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                          className="transition-colors duration-300 delay-75 group-hover:text-white"
                        >
                          <service.icon className="h-10 w-10" />
                        </motion.div>
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-light line-clamp-2">
                      {service.headline}
                    </p>

                    <div className="mt-auto flex items-center gap-3 text-primary font-bold group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-xs uppercase tracking-[0.2em]">Explore Program</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Narrative "Our Philosophy" Section */}
      <section className="py-24 md:py-40 bg-secondary/5 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-10">
                Clinical Mastery. <br />
                <span className="text-primary italic">Compassionate</span> Results.
              </h2>
              <div className="space-y-8 text-2xl text-muted-foreground leading-relaxed font-light">
                <p>
                  At Tiny Triumph, we don't believe in one-size-fits-all. Every child's developmental path is a unique tapestry of strengths and opportunities.
                </p>
                <p>
                  Our boutique approach ensures that your child is seen, heard, and deeply supported by a multi-disciplinary team of clinical experts who are as invested in their success as you are.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-[4rem] bg-white shadow-2xl p-12 flex flex-col justify-center text-center">
                <Quote className="h-20 w-20 text-primary/20 mx-auto mb-10" />
                <h3 className="font-display text-4xl italic font-medium text-foreground mb-10">
                  "Our mission is to bridge the gap between clinical excellence and the joyful play of childhood."
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-primary/30" />
                  <span className="text-xl font-bold tracking-widest uppercase text-primary">Tiny Triumph Team</span>
                  <div className="h-px w-12 bg-primary/30" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Contact/CTA Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden group">
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-8">
              Ready to Experience the Difference?
            </h2>
            <p className="mx-auto max-w-2xl text-2xl text-primary-foreground/80 mb-12 font-light">
              Book a premium assessment today and start your child's journey toward clinical success.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-16 py-10 text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:scale-105 transition-all bg-white text-primary hover:bg-white/90"
            >
              <a href="https://api.whatsapp.com/send?phone=919114222044&text=Hi%2C%20I%20would%20like%20to%20book%20a%20clinical%20assessment%20at%20Tiny%20Triumph%20CDC." target="_blank" rel="noopener noreferrer">
                Begin Consultation
                <ChevronRight className="ml-3 h-8 w-8" />
              </a>
            </Button>
          </motion.div>
        </div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000" />
      </section>
    </Layout>
  );
};

export default Services;

