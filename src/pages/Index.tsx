import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import {
  Heart,
  Stethoscope,
  Shield,
  Users,
  Clock,
  Award,
  ChevronRight,
  Star,
  Brain,
  Activity,
  Facebook,
  Smartphone,
  MessageCircle,
  ClipboardList,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { services } from "@/data/services";
import { useRef } from "react";
import { assets } from "@/lib/assets";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const features = [
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Extended hours and weekend appointments available.",
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Specialized pediatric therapists with years of clinical expertise.",
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Your comfort and well-being is our top priority.",
    },
  ];

  const testimonials = [
    {
      name: "Sandeep Rao",
      role: "Parent",
      content: "The care our son receives at Tiny Triumph is exceptional. The therapists always take the time to listen and explain the progress thoroughly.",
      rating: 5,
    },
    {
      name: "Meera Nair",
      role: "Parent",
      content: "I was worried about finding the right support for my daughter, but the team here made us feel welcome and hopeful from day one.",
      rating: 5,
    },
    {
      name: "Prakash Mohanty",
      role: "Parent",
      content: "As parents, we appreciate how wonderful they are with children. The therapeutic team at Tiny Triumph is truly amazing.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden py-16 md:py-32">
        {/* Background Image with Parallax & Overlay */}
        {/* Cinematic Video Background */}
        <motion.div
          style={{ opacity, y: y1 }}
          className="absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${assets.hero.reception})` }} />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white drop-shadow-2xl">
                <span className="text-hero-gradient">Nurturing Little Triumphs</span>
              </h1>
              <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg">
                A premier child development centre in Balasore dedicated to unlocking your child's full potential through
                <span className="text-white font-medium"> compassionate care</span> and <span className="text-white font-medium">expert therapy</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 md:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            >
              <button className="w-full sm:w-auto rounded-full bg-[#5ec2b4] px-8 py-4 text-base md:px-12 md:py-6 md:text-xl font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#4ea89c] flex items-center justify-center group">
                <a href="https://api.whatsapp.com/send?phone=919114222044&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tiny%20Triumph%20CDC." target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Book Appointment
                  <ChevronRight className="ml-2 h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </button>
              <Link
                to="/services"
                className="w-full sm:w-auto rounded-full border-2 border-white/40 bg-white/5 backdrop-blur-md px-8 py-4 text-base md:px-12 md:py-6 md:text-xl font-medium text-white transition-all duration-300 hover:bg-white/10 hover:border-white shadow-xl text-center"
              >
                Our Specialities
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-12 rounded-full bg-gradient-to-b from-white/20 to-transparent"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-28 bg-secondary/30 dark:bg-background/60 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-light-gradient dark:text-dark-gradient md:text-4xl">
              Specialized Child Development Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-900 dark:text-gray-100">
              We offer a full range of therapeutic interventions tailored to your child's unique needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block h-80 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2 group"
                >
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Black Shade Sweep Effect */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none bg-[#1d2f38]/10"
                    initial={{ y: "-210%", rotate: 90, scaleX: 0.5, scaleY: 1.5 }}
                    whileHover={{ y: "210%" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Light Sweep (Shine) Effect */}
                  <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                    <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 group-hover:translate-x-[300%]" />
                  </div>

                  <div className="relative z-20 flex h-full flex-col items-center justify-center p-8 text-center">
                    {/* Icon Container with Backwash */}
                    <div className="relative mb-6">
                      <div className={`flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-white/10 backdrop-blur-lg border border-white/10 transition-all duration-500 cubic-bezier(0.62, 0.21, 0.45, 1.52) group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 shadow-xl`}>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                          className={`transition-colors duration-300 delay-75 group-hover:text-white ${service.textColor}`}
                        >
                          <service.icon className="h-12 w-12" />
                        </motion.div>
                      </div>

                      {/* Inner Glow */}
                      <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>

                    <h3 className="font-display text-2xl font-bold transition-colors duration-300 group-hover:text-primary mb-4 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-semibold">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      View Details <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link to="/services">
                View All Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="bg-secondary/20 dark:bg-background/40 py-24 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-display text-4xl font-bold text-light-gradient dark:text-dark-gradient md:text-5xl leading-tight">
                Why Parents Trust <br />
                <span className="text-primary">Tiny Triumph</span>
              </h2>
              <p className="mt-6 text-xl text-gray-900 dark:text-gray-100 leading-relaxed">
                We provide a personalized sanctuary for development, combining clinical excellence with a nurturing heart.
              </p>

              <div className="mt-12 space-y-8">
                {features.map((feature, idx) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <motion.div
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-card shadow-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                    >
                      <feature.icon className="h-7 w-7" />
                    </motion.div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-gray-900 dark:text-gray-100 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl relative">
                <img
                  src={assets.services.occupationalTherapy}
                  alt="Therapy session at Tiny Triumph"
                  className="absolute inset-0 h-full w-full object-cover -rotate-90 scale-[1.25]"
                  loading="lazy"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 rounded-3xl glass dark:bg-black/60 dark:border-white/10 p-8 shadow-2xl max-w-[240px]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">4.9 ★</p>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Top Rated</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 h-40 w-40 bg-accent/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-60 w-60 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - already exists */}

      {/* Clinic in Action - Video Showcase */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold text-foreground md:text-5xl"
            >
              See Us in <span className="text-primary italic">Action</span>
            </motion.h2>
            <p className="mt-6 text-xl text-gray-900 dark:text-gray-100 font-medium leading-relaxed">
              Witness the dedicated care and specialized techniques our therapists use to empower every child.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { id: 1, ...assets.videos.showcase1, title: "Sensory Mastery" },
              { id: 2, ...assets.videos.showcase2, title: "Precision Motor Skills" },
              { id: 3, ...assets.videos.showcase3, title: "Social Interaction" },
            ].map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-96 overflow-hidden rounded-[2.5rem] bg-card shadow-2xl border border-white/10"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={item.poster}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                >
                  <source src={item.webm} type="video/webm" />
                  <source src={item.mp4} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                  <div className="mt-2 h-1 w-12 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Polish */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] translate-x-1/3" />
      </section>
      <section className="py-24 md:py-32 bg-background relative">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl font-bold text-foreground md:text-5xl"
            >
              Voices of Trust
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-gray-900 dark:text-gray-100 font-medium"
            >
              Real stories from families who have experienced the magic of Tiny Triumph.
            </motion.p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] overflow-hidden bg-secondary/10 group">
                  <CardContent className="p-10 flex flex-col h-full">
                    <div className="mb-6 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-gray-900 dark:text-gray-100 italic text-lg leading-relaxed mb-10 flex-grow font-medium">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white font-bold text-xl shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</p>
                        <p className="text-sm font-medium text-primary uppercase tracking-widest">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Footprints Section */}
      <section className="bg-secondary/20 dark:bg-background/40 py-24 md:py-32 overflow-hidden relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold text-foreground dark:text-white md:text-5xl"
            >
              Our Social Footprints
            </motion.h2>
            <p className="mt-6 text-xl text-gray-900 dark:text-gray-100 font-medium">
              Join our vibrant community and witness the daily triumphs of our little champions.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-8 overflow-x-auto pb-12 pt-4 px-8 scrollbar-hide snap-x snap-mandatory"
          >
            {[
              {
                id: 1,
                content: "Our young champion making great progress in physical therapy today! Every step counts.",
                type: "Achievement",
                date: "2 days ago",
                image: assets.gallery[6]
              },
              {
                id: 2,
                content: "New sensory play tools have arrived! Helping children explore and learn through touch and feel.",
                type: "Update",
                date: "1 week ago",
                image: assets.services.sensoryIntegration
              },
              {
                id: 3,
                content: "Speech therapy success stories! We're celebrating our little hero's first words this month.",
                type: "Success Story",
                date: "3 days ago",
                image: assets.services.speechTherapy
              },
              {
                id: 4,
                content: "Join us for our next parent-teacher workshop on understanding child behavioral patterns.",
                type: "Event",
                date: "Today",
                image: assets.gallery[7]
              },
              {
                id: 5,
                content: "A beautiful morning at Tiny Triumph! Creating a nurturing environment for every child.",
                type: "Clinic Life",
                date: "4 days ago",
                image: assets.gallery[8]
              }
            ].map((post) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
                transition={{ delay: post.id * 0.1 }}
                key={post.id}
                className="flex-shrink-0 w-[320px] sm:w-[400px] overflow-hidden rounded-[2.5rem] bg-card border border-border/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/30 snap-center group"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={post.image}
                    alt="Post representation"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      {post.type}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">{post.date}</span>
                  </div>
                  <p className="text-foreground dark:text-white leading-relaxed line-clamp-3 text-lg font-medium">
                    {post.content}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                        <Facebook className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-bold text-foreground dark:text-white">Tiny Triumph</span>
                    </div>
                    <a
                      href="https://www.facebook.com/p/Tiny-Triumph-child-development-centre-61566975311848/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-primary hover:underline hover:translate-x-1 transition-transform inline-flex items-center"
                    >
                      View Post <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays for visual depth */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/20 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/20 to-transparent z-10" />
        </div>

        <div className="container mt-16 pb-12">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button asChild variant="outline" className="h-14 w-full max-w-[280px] rounded-full px-8 text-lg border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto">
              <a
                href="https://www.facebook.com/p/Tiny-Triumph-child-development-centre-61566975311848/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-bold"
              >
                <Facebook className="mr-3 h-5 w-5 fill-blue-600 text-blue-600" />
                Follow on Facebook
              </a>
            </Button>
            <Button asChild variant="outline" className="h-14 w-full max-w-[280px] rounded-full px-8 text-lg border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:w-auto">
              <a
                href="https://api.whatsapp.com/send?phone=919114222044&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tiny%20Triumph%20CDC."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center font-bold"
              >
                <Smartphone className="mr-3 h-5 w-5 text-teal-600" />
                Connect on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="font-display text-5xl font-bold text-primary-foreground md:text-7xl leading-tight">
                Ready to Help Your <br />
                <span className="text-white/80">Child Thrive?</span>
              </h2>
              <p className="mt-8 text-2xl text-primary-foreground/90 font-light max-w-2xl mx-auto">
                Schedule your comprehensive evaluation today and start the journey towards
                <span className="font-bold text-white"> lasting success</span>.
              </p>
              <motion.div
                whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-12"
              >
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-6 py-6 h-auto text-lg md:px-12 md:py-8 md:text-2xl shadow-2xl hover:bg-white hover:text-primary transition-all duration-500 whitespace-normal text-center min-h-[4rem]"
                >
                  <a href="https://api.whatsapp.com/send?phone=919114222044&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tiny%20Triumph%20CDC." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    Book Your Appointment Now
                    <ChevronRight className="ml-2 h-6 w-6 md:ml-3 md:h-8 md:w-8 flex-shrink-0" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
