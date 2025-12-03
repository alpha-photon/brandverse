import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import { toast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  Instagram,
  Send,
  MapPin,
  Sparkles,
} from "lucide-react";
import contactImage from "@/assets/contact-support.jpg";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <Background3D variant="hero" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              Contact Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
              Let's Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
              Have a project in mind? We'd love to hear about it. Get in touch and 
              let's create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <Background3D variant="subtle" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-10">
                <a href="tel:8937888833" className="block">
                  <Card3D variant="glass" className="p-6 flex items-center gap-4">
                    <div className="icon-box w-12 h-12">
                      <Phone className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">
                        8937888833
                      </p>
                    </div>
                  </Card3D>
                </a>

                <a href="mailto:support@thebrandversestudio.com" className="block">
                  <Card3D variant="glass" className="p-6 flex items-center gap-4">
                    <div className="icon-box-gold w-12 h-12">
                      <Mail className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">
                        support@thebrandversestudio.com
                      </p>
                    </div>
                  </Card3D>
                </a>

                <a
                  href="https://instagram.com/the_bvsofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card3D variant="glass" className="p-6 flex items-center gap-4">
                    <div className="icon-box-navy w-12 h-12">
                      <Instagram className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Instagram</p>
                      <p className="font-semibold text-foreground">
                        @the_bvsofficial
                      </p>
                    </div>
                  </Card3D>
                </a>
              </div>

              {/* Image */}
              <Card3D variant="elevated" className="overflow-hidden">
                <div className="relative">
                  <img
                    src={contactImage}
                    alt="Our support team"
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent rounded-2xl" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-secondary-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Ready to help 24/7</span>
                  </div>
                </div>
              </Card3D>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <Card3D variant="glow" className="p-8 lg:p-10">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Input
                      id="service"
                      placeholder="e.g., Brand Strategy, SEO, Social Media"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card3D>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
