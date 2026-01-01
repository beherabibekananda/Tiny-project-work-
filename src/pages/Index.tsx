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
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";

const Index = () => {

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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-24 md:py-32">
        {/* Background Image with Overlay */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-clinic.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
        </motion.div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl drop-shadow-2xl">
                <span className="text-hero-gradient">Nurturing Little Triumphs</span>
              </h1>
              <p className="mt-8 text-xl text-white md:text-2xl leading-relaxed max-w-3xl mx-auto font-light drop-shadow-lg">
                A premier child development centre in Balasore dedicated to unlocking your child's full potential through
                <span className="text-white font-medium"> compassionate care</span> and <span className="text-white font-medium">expert therapy</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <button className="rounded-full bg-primary px-10 py-7 text-xl font-medium text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-primary/90 flex items-center group">
                <a href="https://api.whatsapp.com/send?phone=919114222044&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tiny%20Triumph%20CDC." target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Book Appointment
                  <ChevronRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </a>
              </button>
              <Link
                to="/services"
                className="rounded-full border-2 border-white/50 bg-white/10 px-10 py-7 text-xl font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white drop-shadow-xl"
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
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Specialized Child Development Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We offer a full range of therapeutic interventions tailored to your child's unique needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group relative block h-80 overflow-hidden rounded-[2.5rem] border border-border/50 bg-card shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
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
                      <div className={`flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-primary/10 transition-all duration-500 cubic-bezier(0.62, 0.21, 0.45, 1.52) group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30`}>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                          transition={{ duration: 0.5 }}
                          className={`transition-colors duration-300 delay-75 group-hover:text-white ${service.textColor}`}
                        >
                          <service.icon className="h-12 w-12" />
                        </motion.div>
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold transition-colors duration-300 group-hover:text-primary mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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
      <section className="bg-secondary/20 py-24 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl leading-tight">
                Why Parents Trust <br />
                <span className="text-primary">Tiny Triumph</span>
              </h2>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
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
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl">
                <img
                  src="/images/therapy-session.png"
                  alt="Therapy session at Tiny Triumph"
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 rounded-3xl glass p-8 shadow-2xl max-w-[240px]"
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

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold text-foreground md:text-5xl"
            >
              Voices of Trust
            </motion.h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Real stories from families who have experienced the magic of Tiny Triumph.
            </p>
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
                    <p className="text-foreground/80 italic text-lg leading-relaxed mb-10 flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white font-bold text-xl shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
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
      <section className="bg-secondary/20 py-24 md:py-32 overflow-hidden relative">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl font-bold text-foreground md:text-5xl"
            >
              Our Social Footprints
            </motion.h2>
            <p className="mt-6 text-xl text-muted-foreground">
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
                image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=400&h=300&fit=crop"
              },
              {
                id: 2,
                content: "New sensory play tools have arrived! Helping children explore and learn through touch and feel.",
                type: "Update",
                date: "1 week ago",
                image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=400&h=300&fit=crop"
              },
              {
                id: 3,
                content: "Speech therapy success stories! We're celebrating our little hero's first words this month.",
                type: "Success Story",
                date: "3 days ago",
                image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop"
              },
              {
                id: 4,
                content: "Join us for our next parent-teacher workshop on understanding child behavioral patterns.",
                type: "Event",
                date: "Today",
                image: "https://images.unsplash.com/photo-1573497620053-ea5310f94a17?w=400&h=300&fit=crop"
              },
              {
                id: 5,
                content: "A beautiful morning at Tiny Triumph! Creating a nurturing environment for every child.",
                type: "Clinic Life",
                date: "4 days ago",
                image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=300&fit=crop"
              }
            ].map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-[320px] sm:w-[400px] overflow-hidden rounded-[2.5rem] bg-card border border-border/50 shadow-xl transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:border-primary/30 snap-center group"
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
                  <p className="text-foreground leading-relaxed line-clamp-3 text-lg font-medium">
                    {post.content}
                  </p>
                  <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
                        <Facebook className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-bold text-foreground">Tiny Triumph</span>
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
              </div>
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-12"
              >
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full px-12 py-8 text-2xl shadow-2xl hover:bg-white hover:text-primary transition-all duration-500"
                >
                  <a href="https://api.whatsapp.com/send?phone=919114222044&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tiny%20Triumph%20CDC." target="_blank" rel="noopener noreferrer">
                    Book Your Appointment Now
                    <ChevronRight className="ml-3 h-8 w-8" />
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
