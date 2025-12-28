import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", data);
    setIsSuccess(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "UPHC Hospital, Near Sunhat,\nChandan Bagicha, Mallikashpur,\nBalasore, Odisha 756002",
      link: "https://maps.google.com/?q=Tiny+Triumph+Child+Development+Centre+Balasore",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9114222044",
      link: "tel:+919114222044",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@tinytriumph.com",
      link: "mailto:contact@tinytriumph.com",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon - Sun: 08:00 AM - 09:00 PM",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-light/30 to-background py-16 md:py-20">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="animate-fade-up font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 animate-fade-up text-lg text-muted-foreground" style={{ animationDelay: "0.1s" }}>
              Have questions? We're here to help. Reach out to us anytime.
            </p>
          </div>
        </div>
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Contact Content */}
      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you have a question about our services, need to schedule an appointment,
                or just want to say hello, we'd love to hear from you.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-border/50">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="mt-1 text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border/50">
                <iframe
                  title="CareWell Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50">
                <CardContent className="p-6 md:p-8">
                  {isSuccess ? (
                    <div className="text-center py-8">
                      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Message Sent!
                      </h3>
                      <p className="mt-2 text-muted-foreground">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSuccess(false);
                          form.reset();
                        }}
                        className="mt-6 rounded-full"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        Send us a Message
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Fill out the form below and we'll respond as soon as possible.
                      </p>

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid gap-4 sm:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="john@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number</FormLabel>
                                  <FormControl>
                                    <Input type="tel" placeholder="(555) 123-4567" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                  <Input placeholder="How can we help?" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us more about your inquiry..."
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button
                            type="submit"
                            size="lg"
                            className="w-full rounded-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              "Sending..."
                            ) : (
                              <>
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Need an Appointment?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Skip the wait - book your appointment online now.
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

export default Contact;
