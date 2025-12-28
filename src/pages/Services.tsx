import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import {
  Stethoscope,
  Heart,
  Shield,
  Users,
  Baby,
  Activity,
  Brain,
  Pill,
  Syringe,
  Microscope,
  Thermometer,
  Clipboard,
  ChevronRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Occupational Therapy",
      description: "Helping children achieve independence in their daily lives through improved motor skills, sensory processing, and coordination.",
      features: ["Fine motor skills", "Sensory integration", "Daily living skills", "Hand-eye coordination"],
    },
    {
      icon: Activity,
      title: "Speech Therapy",
      description: "Focused on improving communication skills, including articulation, language development, and social communication.",
      features: ["Articulation correction", "Language development", "Social skills", "Fluency & voice"],
    },
    {
      icon: Brain,
      title: "ABA Therapy",
      description: "Applied Behavior Analysis therapy to encourage positive behaviors and improve social, communication, and learning skills.",
      features: ["Behavior modification", "Social skills training", "Skill acquisition", "Parent training"],
    },
    {
      icon: Activity,
      title: "Physical Therapy",
      description: "Enhancing physical abilities including strength, balance, coordination, and mobility for better functional independence.",
      features: ["Strength building", "Balance & coordination", "Gait training", "Motor planning"],
    },
    {
      icon: Clipboard,
      title: "Special Education",
      description: "Tailored educational support to help children with learning differences achieve their academic potential.",
      features: ["Individualized learning", "Academic support", "Cognitive skills", "Learning strategies"],
    },
    {
      icon: Stethoscope,
      title: "Early Intervention",
      description: "Support for infants and toddlers with developmental delays to help them reach critical milestones.",
      features: ["Developmental support", "Milestone tracking", "Family guidance", "Play-based therapy"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-light/30 to-background py-20 md:py-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-up font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "0.1s" }}>
              Comprehensive development services designed to help your child grow and thrive.
            </p>
          </div>
        </div>
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative h-full overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-500 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Default State */}
                <div className="relative z-10 flex h-full flex-col p-6 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Reveal State */}
                <div className="absolute inset-0 z-20 flex flex-col justify-center bg-primary p-6 text-primary-foreground opacity-0 transition-all duration-500 translate-y-full group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-primary-foreground/90">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                        <div className="h-1.5 w-1.5 rounded-full bg-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Insurance & Payment
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We accept most major insurance plans and offer flexible payment options.
              Contact our office to verify your coverage or discuss payment plans.
            </p>
            <Button asChild variant="outline" className="mt-8 rounded-full">
              <Link to="/contact">
                Contact Us About Insurance
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Book your appointment today and take the first step toward better health.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 rounded-full px-8 text-lg"
            >
              <Link to="/booking">
                Book an Appointment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
