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
      <section className="bg-secondary/30 py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Social Footprints
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join our growing community and stay updated with our latest activities and success stories.
            </p>
          </div>
        </div>

        <div className="relative group">
          <div className="flex animate-marquee whitespace-nowrap py-12 group-hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4">
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
                    className="inline-block w-[350px] overflow-hidden rounded-3xl bg-card border border-border/50 shadow-lg shadow-primary/5 transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl"
                  >
                    <div className="h-48 w-full">
                      <img
                        src={post.image}
                        alt="Post representation"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 whitespace-normal">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {post.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <p className="text-sm text-foreground line-clamp-3">
                        {post.content}
                      </p>
                      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                            <Facebook className="h-3 w-3" />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground">Tiny Triumph</span>
                        </div>
                        <a
                          href="https://www.facebook.com/p/Tiny-Triumph-child-development-centre-61566975311848/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-primary hover:underline"
                        >
                          View Post
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Gradient overlays for the fade effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary/30 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary/30 to-transparent z-10" />
        </div>

        <div className="container mt-12">
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" className="rounded-full">
              <a
                href="https://www.facebook.com/p/Tiny-Triumph-child-development-centre-61566975311848/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="mr-2 h-4 w-4" />
                Follow on Facebook
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href="https://wa.me/919114222044" target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-4 w-4" />
                Connect on WhatsApp
              </a>
            </Button>
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
