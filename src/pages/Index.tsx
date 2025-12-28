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
  MessageCircle
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Users,
      title: "Occupational Therapy",
      description: "Helps children build daily living and motor skills for independence.",
    },
    {
      icon: MessageCircle,
      title: "Speech Therapy",
      description: "Improves communication and speech abilities for better expression.",
    },
    {
      icon: Brain,
      title: "ABA Therapy",
      description: "Structured skill learning for behavioral development.",
    },
    {
      icon: Activity,
      title: "Physical Therapy",
      description: "Support for movement, posture, strength, and coordination.",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Extended hours and weekend appointments available.",
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Board-certified physicians with decades of experience.",
    },
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Your comfort and well-being is our top priority.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Patient since 2018",
      content: "The care I receive at CareWell is exceptional. Dr. Johnson always takes the time to listen and explain everything thoroughly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Patient since 2020",
      content: "I was nervous about finding a new doctor, but the staff here made me feel welcome from day one. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Patient since 2019",
      content: "As a mom of three, I appreciate how wonderful they are with my kids. The pediatric team is amazing.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-light/30 to-background py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-up font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Welcome to
              <span className="text-primary"> Tiny Triumph</span>
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "0.1s" }}>
              A trusted centre in Balasore dedicated to nurturing your child’s growth, development, and confidence.
              Through tailored programs and expert therapies, we help children thrive at every stage.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="animate-fade-up rounded-full px-8 text-lg">
                <Link to="/booking">
                  Book an Appointment
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="animate-fade-up rounded-full px-8 text-lg" style={{ animationDelay: "0.3s" }}>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                style={{ animationDelay: `${index * 0.1} s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/services">
                View All Services
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Why Choose Tiny Triumph?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide a personalized approach for every child with a professional and caring therapy team.
              </p>

              <div className="mt-10 space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=600&fit=crop"
                  alt="Caring doctor with patient"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Award className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">4.9 ★</p>
                    <p className="text-sm text-muted-foreground">Top Rated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              What Our Patients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from the families who trust us with their healthcare needs.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="border-border/50 bg-card"
                style={{ animationDelay: `${index * 0.1} s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Footprints Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Social Footprints
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Connect with us online for daily updates, success stories, and real-time support.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Left Column: Facebook Feed */}
            <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-primary/5">
              <div className="p-4 border-b border-border/50 bg-primary/5">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-primary">
                  <Facebook className="h-5 w-5" />
                  Live Facebook Feed
                </h3>
              </div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FTiny-Triumph-child-development-centre-61566975311848%2F&tabs=timeline&width=600&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                width="600"
                height="500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Tiny Triumph Live Facebook Feed"
                className="w-full min-h-[500px]"
              ></iframe>
            </div>

            {/* Right Column: Social Engagement Cards */}
            <div className="flex flex-col gap-6">
              {/* Facebook Direct Link Card */}
              <a
                href="https://www.facebook.com/p/Tiny-Triumph-child-development-centre-61566975311848/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl bg-blue-600 p-8 text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 opacity-10">
                  <Facebook className="h-full w-full" />
                </div>
                <div className="relative z-10">
                  <h3 className="mb-2 font-display text-2xl font-bold">Follow Our Page</h3>
                  <p className="mb-6 opacity-90">Join our growing community of parents and caregivers on Facebook for tips and updates.</p>
                  <span className="inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-blue-600 transition-colors group-hover:bg-blue-50">
                    Visit Profile <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </a>

              {/* WhatsApp Quick Chat Card */}
              <a
                href="https://wa.me/919114222044"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-3xl bg-green-500 p-8 text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 opacity-10">
                  <Smartphone className="h-full w-full" />
                </div>
                <div className="relative z-10">
                  <h3 className="mb-2 font-display text-2xl font-bold">24/7 WhatsApp Support</h3>
                  <p className="mb-6 opacity-90">Have urgent questions or need to book quickly? Message us directly anytime.</p>
                  <span className="inline-flex items-center rounded-full bg-white px-6 py-2 text-sm font-semibold text-green-600 transition-colors group-hover:bg-green-50">
                    Chat Now <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </a>

              {/* Community Trust Badge */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 text-center">
                <p className="font-display text-xl font-bold text-primary">Trusted by 500+ Families</p>
                <p className="mt-1 text-sm text-muted-foreground">in Balasore and surrounding regions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Help Your Child Thrive?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Schedule your appointment today and experience the Tiny Triumph difference.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="mt-8 rounded-full px-8 text-lg"
            >
              <Link to="/booking">
                Book Your Appointment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
