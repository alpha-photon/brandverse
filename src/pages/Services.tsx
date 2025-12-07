import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import { cn } from "@/lib/utils";
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
  const heroRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        setMousePosition({ x, y });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      return () => hero.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const words = ["Digital Solutions", "That Drive", "Results"];
  const gradientWords = [false, false, true];

  return (
    <Layout>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-6rem)] lg:min-h-screen flex items-center overflow-hidden max-w-full"
      >
        <Background3D variant="hero" />
        
        {/* Animated gradient orbs that follow mouse */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal/20 dark:bg-teal/10 rounded-full blur-3xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gold/15 dark:bg-gold/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
        
        <div className="section-container relative z-10 py-6 sm:py-8 md:py-10 lg:py-12 max-w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 md:space-y-8 max-w-2xl w-full overflow-hidden px-2 sm:px-0">
              {/* Badge with animation */}
              <div
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium transition-all duration-1000 border border-primary/20",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span className="relative">
                  Our Services
                  <span className="absolute inset-0 bg-primary/20 blur-xl animate-pulse" />
                </span>
              </div>
              
              {/* Animated Headline */}
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] sm:leading-[1.1] md:leading-[1.15] tracking-tight break-words overflow-hidden">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={cn(
                      "block transition-all duration-1000",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8",
                      gradientWords[index] && "gradient-text"
                    )}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              
              <p
                className={cn(
                  "text-lg text-muted-foreground max-w-xl leading-relaxed transition-all duration-1000",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "600ms" }}
              >
                From brand strategy to execution, we offer comprehensive digital services 
                designed to elevate your brand and accelerate growth.
              </p>

              <div
                className={cn(
                  "flex flex-wrap gap-4 transition-all duration-1000 mt-6",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "800ms" }}
              >
                <Button
                  variant="hero"
                  asChild
                  className="group relative overflow-hidden"
                >
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </Button>
                <Button
                  variant="hero-outline"
                  asChild
                  className="group relative overflow-hidden"
                >
                  <Link to="/about">
                    <span className="relative z-10">Learn More</span>
                    <span className="absolute inset-0 bg-muted/50 dark:bg-muted/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </Button>
              </div>

              {/* Stats Row */}
              <div
                className={cn(
                  "flex flex-wrap gap-8 pt-8 transition-all duration-1000",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "1000ms" }}
              >
                {[
                  { value: "7+", label: "Services" },
                  { value: "500+", label: "Projects" },
                  { value: "98%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <p className="text-3xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero SVG Illustration */}
            <div
              className={cn(
                "relative transition-all duration-1000 lg:ml-auto lg:mr-0 w-full",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              )}
              style={{
                transitionDelay: "400ms",
              }}
            >
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal/20 via-transparent to-gold/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center p-2">
                {/* Simple Services Details SVG */}
                <svg
                  viewBox="0 0 600 450"
                  className="w-full h-full max-w-4xl scale-110 md:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="serviceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(175, 54%, 48%)" />
                      <stop offset="100%" stopColor="hsl(42, 50%, 54%)" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Card 1: Brand Strategy */}
                  <g transform="translate(50, 50)" className="group-hover:translate-y-[-5px] transition-transform duration-300">
                    <rect x="0" y="0" width="140" height="100" rx="12" fill="hsl(var(--card))" stroke="url(#serviceGrad)" strokeWidth="2" opacity="0.9" className="group-hover:opacity-100 transition-opacity" />
                    <circle cx="70" cy="30" r="20" fill="url(#serviceGrad)" opacity="0.2" />
                    {/* Lightbulb Icon */}
                    <g transform="translate(70, 30)">
                      <circle cx="0" cy="-5" r="8" fill="url(#serviceGrad)" opacity="0.7" />
                      <rect x="-4" y="5" width="8" height="6" rx="2" fill="url(#serviceGrad)" opacity="0.7" />
                    </g>
                    <text x="70" y="65" textAnchor="middle" fontSize="18" fontWeight="bold" fill="hsl(var(--foreground))">Brand</text>
                    <text x="70" y="85" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Strategy</text>
                  </g>
                  
                  {/* Card 2: Digital Marketing */}
                  <g transform="translate(230, 50)" className="group-hover:translate-y-[-5px] transition-transform duration-300">
                    <rect x="0" y="0" width="140" height="100" rx="12" fill="hsl(var(--card))" stroke="url(#serviceGrad)" strokeWidth="2" opacity="0.9" className="group-hover:opacity-100 transition-opacity" />
                    <circle cx="70" cy="30" r="20" fill="url(#serviceGrad)" opacity="0.2" />
                    {/* Target Icon */}
                    <g transform="translate(70, 30)">
                      <circle cx="0" cy="0" r="12" stroke="url(#serviceGrad)" strokeWidth="2" fill="none" />
                      <circle cx="0" cy="0" r="6" stroke="url(#serviceGrad)" strokeWidth="2" fill="none" />
                      <circle cx="0" cy="0" r="2" fill="url(#serviceGrad)" />
                    </g>
                    <text x="70" y="65" textAnchor="middle" fontSize="18" fontWeight="bold" fill="hsl(var(--foreground))">Digital</text>
                    <text x="70" y="85" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Marketing</text>
                  </g>
                  
                  {/* Card 3: SEO & Growth */}
                  <g transform="translate(410, 50)" className="group-hover:translate-y-[-5px] transition-transform duration-300">
                    <rect x="0" y="0" width="140" height="100" rx="12" fill="hsl(var(--card))" stroke="url(#serviceGrad)" strokeWidth="2" opacity="0.9" className="group-hover:opacity-100 transition-opacity" />
                    <circle cx="70" cy="30" r="20" fill="url(#serviceGrad)" opacity="0.2" />
                    {/* Growth Chart Icon */}
                    <g transform="translate(70, 30)">
                      <path d="M-10 10 L-5 5 L0 8 L5 2 L10 -2" stroke="url(#serviceGrad)" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </g>
                    <text x="70" y="65" textAnchor="middle" fontSize="18" fontWeight="bold" fill="hsl(var(--foreground))">SEO &amp;</text>
                    <text x="70" y="85" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Growth</text>
                  </g>
                  
                  {/* Central Services Card */}
                  <g transform="translate(150, 200)" className="group-hover:scale-105 transition-transform duration-500">
                    {/* Card Background */}
                    <rect x="0" y="0" width="300" height="200" rx="16" fill="hsl(var(--card))" stroke="url(#serviceGrad)" strokeWidth="2" opacity="0.9" />
                    
                    {/* Title */}
                    <text x="150" y="35" textAnchor="middle" fontSize="22" fontWeight="bold" fill="hsl(var(--foreground))">Our Services</text>
                    
                    {/* Key Points */}
                    <g transform="translate(40, 60)">
                      {/* Point 1 */}
                      <g transform="translate(0, 0)">
                        <circle cx="0" cy="0" r="4" fill="url(#serviceGrad)" />
                        <text x="15" y="5" fontSize="14" fill="hsl(var(--foreground))">Comprehensive Solutions</text>
                      </g>
                      
                      {/* Point 2 */}
                      <g transform="translate(0, 30)">
                        <circle cx="0" cy="0" r="4" fill="url(#serviceGrad)" />
                        <text x="15" y="5" fontSize="14" fill="hsl(var(--foreground))">Data-Driven Approach</text>
                      </g>
                      
                      {/* Point 3 */}
                      <g transform="translate(0, 60)">
                        <circle cx="0" cy="0" r="4" fill="url(#serviceGrad)" />
                        <text x="15" y="5" fontSize="14" fill="hsl(var(--foreground))">Proven Results</text>
                      </g>
                      
                      {/* Point 4 */}
                      <g transform="translate(0, 90)">
                        <circle cx="0" cy="0" r="4" fill="url(#serviceGrad)" />
                        <text x="15" y="5" fontSize="14" fill="hsl(var(--foreground))">Custom Strategies</text>
                      </g>
                    </g>
                    
                    {/* Decorative Line */}
                    <line x1="50" y1="50" x2="250" y2="50" stroke="url(#serviceGrad)" strokeWidth="2" opacity="0.3" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 w-full px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>What We Offer</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Comprehensive digital solutions tailored to elevate your brand and drive measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card3D
                key={service.title}
                variant="glass"
                className={cn(
                  "group relative p-8 h-full flex flex-col hover:scale-[1.02] transition-all duration-700 overflow-hidden",
                  "border-2 border-border/30 hover:border-primary/30",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                {/* Subtle background gradient */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-50 transition-opacity duration-700",
                  service.color === 'teal' 
                    ? "from-teal/10 via-transparent to-teal/5" 
                    : "from-gold/10 via-transparent to-gold/5"
                )} />
                
                {/* Faded hover overlay */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none",
                  service.color === 'teal' 
                    ? "from-teal/15 via-teal/5 to-transparent" 
                    : "from-gold/15 via-gold/5 to-transparent"
                )} />
                
                {/* Service Number - More subtle */}
                <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-50 transition-opacity duration-700">
                  <span className="text-4xl font-bold text-muted-foreground/20 font-heading">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with elegant styling */}
                  <div className={cn(
                    "w-14 h-14 mb-4 rounded-xl flex items-center justify-center transition-all duration-700",
                    service.color === 'teal' 
                      ? "bg-teal/10 group-hover:bg-teal/20 border border-teal/20 group-hover:border-teal/30" 
                      : "bg-gold/10 group-hover:bg-gold/20 border border-gold/20 group-hover:border-gold/30"
                  )}>
                    <service.icon className={cn(
                      "h-7 w-7 transition-all duration-700",
                      service.color === 'teal' 
                        ? "text-teal group-hover:text-teal/80" 
                        : "text-gold group-hover:text-gold/80"
                    )} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 pr-12 group-hover:text-primary/90 transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm group-hover:text-foreground/80 transition-colors duration-500">
                    {service.description}
                  </p>
                  
                  {/* Features with elegant styling */}
                  <div className="space-y-2 pt-4 border-t border-border/30 group-hover:border-primary/30 transition-colors duration-500">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground group-hover:text-foreground/80 transition-all duration-500"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full transition-all duration-500 flex-shrink-0",
                          service.color === 'teal'
                            ? "bg-teal/40 group-hover:bg-teal/70 group-hover:scale-125"
                            : "bg-gold/40 group-hover:bg-gold/70 group-hover:scale-125"
                        )} />
                        <span className="group-hover:translate-x-1 transition-transform duration-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Elegant arrow indicator */}
                  <div className={cn(
                    "mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-500",
                    service.color === 'teal' ? "text-teal" : "text-gold"
                  )}>
                    <span className="text-xs font-medium">Learn more</span>
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
                
                {/* Subtle shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-16 w-full px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Our Approach</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
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
                className="p-6 text-center group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="text-4xl font-bold gradient-text mb-3">{item.step}</div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10 max-w-full">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>Get Started</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Ready to Get{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">Started?</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-teal/50 via-gold/50 to-teal/50 blur-xl opacity-60" />
              </span>
          </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's discuss how we can help your brand reach its full potential.
          </p>
            
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="group relative overflow-hidden px-8 py-6 text-lg shadow-2xl shadow-teal/20 hover:shadow-teal/30 transition-all duration-300"
            >
            <Link to="/contact">
                <span className="relative z-10 flex items-center gap-3">
              Start Your Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
