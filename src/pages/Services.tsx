import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import {
  Lightbulb,
  Search,
  Share2,
  FileText,
  MousePointerClick,
  Globe,
  BarChart3,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import servicesImage from "@/assets/services-laptop.jpg";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy & Communication",
    description:
      "We develop comprehensive brand strategies that define your unique positioning, messaging, and visual identity to create lasting impressions.",
    features: ["Brand Positioning", "Visual Identity", "Brand Guidelines", "Messaging Framework"],
    color: "teal" as const,
  },
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your visibility with data-driven SEO strategies that improve rankings, drive organic traffic, and increase conversions.",
    features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"],
    color: "gold" as const,
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build engaged communities and amplify your brand voice across all major social platforms with strategic content and campaigns.",
    features: ["Content Strategy", "Community Management", "Paid Social", "Influencer Marketing"],
    color: "teal" as const,
  },
  {
    icon: FileText,
    title: "Content Creation & Marketing",
    description:
      "Compelling stories and visuals that capture attention, engage audiences, and drive meaningful action.",
    features: ["Blog Writing", "Video Production", "Graphic Design", "Email Marketing"],
    color: "gold" as const,
  },
  {
    icon: MousePointerClick,
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Maximize ROI with targeted advertising campaigns across Google, social media, and programmatic networks.",
    features: ["Google Ads", "Display Advertising", "Retargeting", "Campaign Optimization"],
    color: "teal" as const,
  },
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Beautiful, responsive websites that convert visitors into customers with seamless user experiences.",
    features: ["UI/UX Design", "Web Development", "E-commerce", "Landing Pages"],
    color: "gold" as const,
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Transform data into actionable insights with comprehensive analytics and transparent reporting.",
    features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Strategic Insights"],
    color: "teal" as const,
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <Background3D variant="hero" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                Our Services
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
                Digital Solutions That{" "}
                <span className="gradient-text">Drive Results</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
                From brand strategy to execution, we offer comprehensive digital services 
                designed to elevate your brand and accelerate growth.
              </p>
            </div>

            <div className="animate-fade-in-right animation-delay-200">
              <Card3D variant="elevated" className="overflow-hidden">
                <img
                  src={servicesImage}
                  alt="Digital marketing analytics"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <Background3D variant="mesh" />
        
        <div className="section-container relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card3D
                key={service.title}
                variant="glow"
                className="p-8 opacity-0 animate-fade-in group"
                style={{ animationDelay: `${index * 80}ms`, animationFillMode: "forwards" } as React.CSSProperties}
              >
                {/* Service Number */}
                <div className="absolute top-6 right-6">
                  <span className="text-6xl font-bold text-muted/20 dark:text-muted/10 font-heading group-hover:text-primary/20 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`${service.color === 'teal' ? 'icon-box' : 'icon-box-gold'} w-16 h-16 mb-6`}>
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 pr-16">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <Background3D variant="gradient" />
        
        <div className="section-container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your brand, goals, and audience" },
              { step: "02", title: "Strategy", desc: "Crafting a tailored plan for success" },
              { step: "03", title: "Execution", desc: "Bringing your vision to life with precision" },
              { step: "04", title: "Optimize", desc: "Continuous improvement for lasting results" },
            ].map((item, index) => (
              <Card3D
                key={item.step}
                variant="glass"
                className="p-6 text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" } as React.CSSProperties}
              >
                <div className="text-4xl font-bold gradient-text-teal mb-3">{item.step}</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-pulse-soft animation-delay-300" />
        </div>

        <div className="section-container relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how we can help your brand reach its full potential.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
