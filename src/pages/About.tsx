import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import { Heart, Target, Eye, Users, ChevronRight } from "lucide-react";

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
      name: "Dr. Sarah Johnson",
      role: "Medical Director & Family Physician",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      bio: "With over 20 years of experience, Dr. Johnson leads our team with dedication to patient-centered care.",
    },
    {
      name: "Dr. Michael Chen",
      role: "Internal Medicine Specialist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      bio: "Dr. Chen specializes in preventive medicine and chronic disease management with a holistic approach.",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Pediatrician",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      bio: "Dr. Rodriguez brings warmth and expertise to pediatric care, making children feel comfortable.",
    },
    {
      name: "Dr. James Wilson",
      role: "General Practitioner",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      bio: "Dr. Wilson is passionate about building lasting relationships with patients and their families.",
    },
    {
      name: "Lisa Thompson",
      role: "Nurse Practitioner",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop",
      bio: "Lisa provides comprehensive care with a focus on patient education and wellness.",
    },
    {
      name: "David Park",
      role: "Physician Assistant",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
      bio: "David excels in acute care and works closely with our physicians to ensure quality treatment.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-light/30 to-background py-20 md:py-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-up font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              About Tiny Triumph
            </h1>
            <p className="mt-6 animate-fade-up text-lg text-muted-foreground md:text-xl" style={{ animationDelay: "0.1s" }}>
              Dedicated to providing specialized child development support and therapeutic interventions.
            </p>
          </div>
        </div>
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                  alt="CareWell Clinic building"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Tiny Triumph Child Development Centre is a dedicated facility in Balasore finding new ways to help children grow.
                  Our mission is to deliver tailored programs and therapeutic interventions based on each child’s needs.
                </p>
                <p>
                  We focus on early developmental milestones and functional abilities. Our compassionate professionals —
                  including occupational therapists, speech therapists, and special educators — design programs unique to every child.
                </p>
                <p>
                  With a strong reputation in the community and a commitment to excellence, we strive to be a partner
                  in your child's journey towards confidence and independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-primary/20 bg-card">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="mt-4 text-muted-foreground">
                  To provide accessible, high-quality healthcare that addresses the physical,
                  emotional, and social needs of our patients. We are committed to building
                  lasting relationships based on trust, respect, and excellent medical care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-card">
              <CardContent className="p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-4 text-muted-foreground">
                  To be the healthcare provider of choice in our community, recognized for
                  our clinical excellence, compassionate care, and commitment to improving
                  the health and well-being of every patient we serve.
                </p>
              </CardContent>
            </Card>
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
            <Button asChild size="lg" className="mt-8 rounded-full px-8 text-lg">
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

export default About;
