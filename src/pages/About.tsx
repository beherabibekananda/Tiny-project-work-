import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Eye, Users, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every patient with kindness, empathy, and respect.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in medical care.",
    },
    {
      icon: Eye,
      title: "Integrity",
      description: "We are honest and transparent in all our interactions.",
    },
    {
      icon: Users,
      title: "Community",
      description: "We are committed to improving the health of our community.",
    },
  ];

  const team = [
    {
      name: "Dr. Anjali Sharma",
      role: "Lead Pediatric Consultant",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      bio: "With extensive experience in child development, Dr. Sharma guides our clinical approach with compassion.",
    },
    {
      name: "Rajesh Kumar",
      role: "Senior Occupational Therapist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      bio: "Rajesh specializes in sensory integration and helping children develop crucial daily living skills.",
    },
    {
      name: "Priya Das",
      role: "Speech Language Pathologist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      bio: "Priya is passionate about helping children find their voice and improve their communication abilities.",
    },
    {
      name: "Amit Patel",
      role: "Special Educator",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      bio: "Amit designs tailored educational programs that cater to the unique learning styles of every child.",
    },
    {
      name: "Sunita Mohanty",
      role: "Physiotherapist",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop",
      bio: "Sunita focuses on improving mobility, posture, and strength through engaging physical exercises.",
    },
    {
      name: "Vikram Singh",
      role: "Behavior Therapy Specialist",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      bio: "Vikram works closely with families to implement effective behavior intervention strategies.",
    },
  ];

  return (
    <Layout>
      {/* 1. Splendid Split-Screen Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-[#0a2a24] overflow-hidden pt-20">
        <div className="container relative z-10 grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-teal-100 text-sm font-bold uppercase tracking-widest backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Pioneering Pediatric Excellence</span>
            </div>
            <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight">
              Crafting Brighter <br />
              <span className="text-hero-gradient italic">Futures Today.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light max-w-2xl">
              Tiny Triumph is more than a clinic; it's a sanctuary where clinical precision meets heart-centered care, nurturing every child's unique path to success.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Button asChild size="lg" className="rounded-full px-8 py-7 text-lg bg-primary hover:bg-primary/90 shadow-2xl hover-lift">
                <a href="https://wa.me/919114222044" target="_blank" rel="noopener noreferrer">
                  Begin the Journey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:h-[80vh] flex items-end justify-center"
          >
            <div className="relative z-10 w-full max-w-xl aspect-[4/5] lg:aspect-auto lg:h-[90%] overflow-hidden rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10">
              <img
                src="/about-hero-specialist.png"
                alt="Our Lead Pediatric Specialist"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a24] via-transparent to-transparent opacity-60" />
            </div>
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story - High Contrast Section */}
      <section className="relative py-24 md:py-36 bg-white overflow-hidden">
        <div className="container relative z-10">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-secondary/20">
                <img
                  src="/our-story-consultation.png"
                  alt="Professional Pediatric Consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl -z-10" />
              <div className="absolute -top-8 -right-8 h-48 w-48 rounded-full bg-primary/10 blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-primary text-xs font-bold uppercase tracking-widest">
                <span>Our Heritage</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0a2a24] leading-tight">
                A Legacy of <br />
                <span className="text-primary italic">Nurturing Growth.</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tiny Triumph Child Development Centre was born from a simple yet profound vision: to create a sanctuary where every child's potential is recognized, respected, and rigorously nurtured.
                </p>
                <p>
                  Our journey began in Balasore with a team of dedicated specialists who believed that therapy should be as compassionate as it is clinical. Today, we are a hub of excellence, combining advanced developmental science with deeply personal care.
                </p>
                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#0a2a24]">Empowerment</h4>
                      <p className="text-sm">Giving families the tools to support their child's daily triumphs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#0a2a24]">Excellence</h4>
                      <p className="text-sm">Driven by evidence-based practices and clinical precision.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision - Sleek Floating Cards */}
      <section className="py-24 md:py-32 bg-[#0a2a24] text-white overflow-hidden">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/20 pointer-events-none">
                <Target className="h-32 w-32" />
              </div>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 text-primary border border-primary/30">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                To provide accessible, world-class developmental support that transforms the lives of children and their families through clinical excellence and radical compassion.
              </p>
              <div className="mt-8 h-1 w-24 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group p-12 rounded-[3rem] bg-white/5 border border-accent/10 backdrop-blur-xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-accent/20 pointer-events-none">
                <Eye className="h-32 w-32" />
              </div>
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/20 text-accent border border-accent/30">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="font-display text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                To be the definitive choice for pediatric development, recognized globally for nurturing the spark of potential and fostering independence in every child.
              </p>
              <div className="mt-8 h-1 w-24 bg-accent rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="border-border/50 bg-card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dedicated professionals committed to your health and well-being.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Card
                key={member.name}
                className="group overflow-hidden border-border/50 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to Experience the Difference?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Schedule your first appointment and see why our patients trust us with their care.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full px-8 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <a href="https://api.whatsapp.com/send?phone=919114222044&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Tiny%20Triumph%20CDC." target="_blank" rel="noopener noreferrer">
                Book an Appointment
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
