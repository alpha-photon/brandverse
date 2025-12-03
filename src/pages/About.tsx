import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import {
  Handshake,
  Lightbulb,
  TrendingUp,
  Heart,
  ArrowRight,
  Target,
  Sparkles,
} from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

const whyUs = [
  {
    icon: Handshake,
    title: "One-Stop Partner",
    description: "Complete digital brand solutions under one roof for seamless execution",
    color: "teal" as const,
  },
  {
    icon: Target,
    title: "Programmatic Expertise",
    description: "Advanced digital advertising & programmatic media that delivers ROI",
    color: "gold" as const,
  },
  {
    icon: TrendingUp,
    title: "Business Impact",
    description: "Strategies that deliver real, measurable results you can track",
    color: "teal" as const,
  },
  {
    icon: Heart,
    title: "Growth Partnership",
    description: "We grow when you grow — your success is our ultimate mission",
    color: "gold" as const,
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <Background3D variant="hero" />
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4" />
              About Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
              We Bring{" "}
              <span className="gradient-text">Brands to Life</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
              At Brandverse Studio, we believe every brand has a story waiting to be told — 
              a story that connects, inspires, and builds lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-card relative overflow-hidden">
        <Background3D variant="subtle" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <Card3D variant="elevated" className="overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Our creative workspace"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </Card3D>
            </div>

            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Brandverse Studio, we believe every brand has a story waiting to be told — 
                  a story that connects, inspires, and builds lasting impact. We are a team of 
                  strategists, creatives, and digital experts passionate about transforming 
                  businesses into memorable brands.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Founded on the principles of innovation and authenticity, we've helped 
                  countless businesses find their voice in the digital landscape and connect 
                  with audiences that matter.
                </p>
              </div>

              <Card3D variant="glass" className="p-6">
                <div className="flex items-start gap-4">
                  <div className="icon-box-gold w-12 h-12 shrink-0">
                    <Lightbulb className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      Our Philosophy
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Branding is about creating authentic conversations. We combine data-driven 
                      insights with bold creative thinking so your brand communicates with 
                      clarity and confidence.
                    </p>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <Background3D variant="mesh" />
        
        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Partner With Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Your success is our mission. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyUs.map((item, index) => (
              <Card3D
                key={item.title}
                variant="glow"
                className="p-8 flex items-start gap-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" } as React.CSSProperties}
              >
                <div className={`${item.color === 'teal' ? 'icon-box' : 'icon-box-gold'} w-14 h-14 shrink-0`}>
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse-soft animation-delay-200" />
        </div>
        
        <div className="section-container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-2xl md:text-3xl font-light text-secondary-foreground/90 leading-relaxed mb-10">
              "To transform businesses into brands people{" "}
              <span className="text-primary font-medium">love</span> and{" "}
              <span className="text-gold font-medium">remember</span>."
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
