import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import { cn } from "@/lib/utils";
import {
  Handshake,
  Lightbulb,
  TrendingUp,
  Heart,
  ArrowRight,
  Target,
  Sparkles,
} from "lucide-react";

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

  const words = ["We Bring", "Brands", "to Life"];
  const gradientWords = [false, true, false];

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
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium transition-all duration-1000",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <Sparkles className="h-4 w-4 animate-pulse" />
                <span className="relative">
                  About Brandverse Studio
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
                At Brandverse Studio, we believe every brand has a story waiting to be told — 
                a story that connects, inspires, and builds lasting impact.
              </p>

              <div
                className={cn(
                  "flex flex-wrap gap-4 transition-all duration-1000 mt-4",
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
                      Work With Us
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
                  <Link to="/services">
                    <span className="relative z-10">Explore Our Services</span>
                    <span className="absolute inset-0 bg-muted/50 dark:bg-muted/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </Button>
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
                {/* Simple About Us Details SVG */}
                <svg
                  viewBox="0 0 600 450"
                  className="w-full h-full max-w-4xl scale-110 md:scale-125"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
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
                  
                  {/* Card 1: Our Team */}
                  <g transform="translate(50, 50)" className="group-hover:translate-y-[-5px] transition-transform duration-300">
                    <rect x="0" y="0" width="140" height="100" rx="12" fill="hsl(var(--card))" stroke="url(#aboutGrad)" strokeWidth="2" opacity="0.9" className="group-hover:opacity-100 transition-opacity" />
                   
                    {/* Team Icon */}
                   
                    <text x="70" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="hsl(var(--foreground))">Expert</text>
                    <text x="70" y="75" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Team</text>
                  </g>
                  
                  {/* Card 2: Our Mission */}
                  <g transform="translate(230, 50)" className="group-hover:translate-y-[-5px] transition-transform duration-300">
                    <rect x="0" y="0" width="140" height="100" rx="12" fill="hsl(var(--card))" stroke="url(#aboutGrad)" strokeWidth="2" opacity="0.9" className="group-hover:opacity-100 transition-opacity" />
                    
                    <text x="70" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="hsl(var(--foreground))">Mission</text>
                    <text x="70" y="75" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Driven</text>
                  </g>
                  
                  {/* Card 3: Our Values */}
                  <g transform="translate(410, 50)" className="group-hover:translate-y-[-5px] transition-transform duration-300">
                    <rect x="0" y="0" width="140" height="100" rx="12" fill="hsl(var(--card))" stroke="url(#aboutGrad)" strokeWidth="2" opacity="0.9" className="group-hover:opacity-100 transition-opacity" />
                   
                    <text x="70" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="hsl(var(--foreground))">Core</text>
                    <text x="70" y="75" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">Values</text>
                  </g>
                  
                  {/* Central About Us Card */}
                  <g transform="translate(150, 200)" className="group-hover:scale-105 transition-transform duration-500">
                    {/* Card Background */}
                    <rect x="0" y="0" width="300" height="200" rx="16" fill="hsl(var(--card))" stroke="url(#aboutGrad)" strokeWidth="2" opacity="0.9" />
                    
                    {/* Title */}
                    <text x="150" y="35" textAnchor="middle" fontSize="22" fontWeight="bold" fill="hsl(var(--foreground))">About Brandverse</text>
                    
                    {/* Key Points */}
                    <g transform="translate(40, 60)">
                      {/* Point 1 */}
                      <g transform="translate(0, 0)">
                        <circle cx="0" cy="0" r="4" fill="url(#aboutGrad)" />
                        <text x="15" y="5" fontSize="14" fill="hsl(var(--foreground))">Innovation &amp; Authenticity</text>
                      </g>
                      
                      {/* Point 2 */}
                      <g transform="translate(0, 30)">
                        <circle cx="0" cy="0" r="4" fill="url(#aboutGrad)" />
                        <text x="15" y="5" fontSize="14" fill="hsl(var(--foreground))">Data-Driven Strategies</text>
                      </g>
                      
                      {/* Point 3 */}
                      <g transform="translate(0, 60)">
                        <circle cx="0" cy="0" r="4" fill="url(#aboutGrad)" />
                        <text x="15" y="5" fontSize="14" fill="hsl(var(--foreground))">Creative Excellence</text>
                      </g>
                      
                      {/* Point 4 */}
                      <g transform="translate(0, 90)">
                        <circle cx="0" cy="0" r="4" fill="url(#aboutGrad)" />
                        <text x="15" y="5" fontSize="14" fill="hsl(var(--foreground))">Client Partnership</text>
                      </g>
                    </g>
                    
                    {/* Decorative Line */}
                    <line x1="50" y1="50" x2="250" y2="50" stroke="url(#aboutGrad)" strokeWidth="2" opacity="0.3" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="pt-12 pb-12 md:pt-16 md:pb-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-4 border border-primary/20">
                  <Sparkles className="h-4 w-4" />
                  <span>Our Story</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Who We <span className="gradient-text">Are</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3 text-base">
                  At Brandverse Studio, we believe every brand has a story waiting to be told — 
                  a story that connects, inspires, and builds lasting impact. We are a team of 
                  strategists, creatives, and digital experts passionate about transforming 
                  businesses into memorable brands.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Founded on the principles of innovation and authenticity, we've helped 
                  countless businesses find their voice in the digital landscape and connect 
                  with audiences that matter.
                </p>
              </div>

              <Card3D 
                variant="glass" 
                className={cn(
                  "p-6 group relative overflow-hidden",
                  "hover:scale-[1.02] hover:-translate-y-1 transition-all duration-700 ease-out",
                  "border-2 border-border/30 hover:border-gold/30",
                  "shadow-lg hover:shadow-2xl hover:shadow-gold/10"
                )}
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="icon-box-gold w-12 h-12 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-gold/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                      Our Philosophy
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                      Branding is about creating authentic conversations. We combine data-driven 
                      insights with bold creative thinking so your brand communicates with 
                      clarity and confidence.
                    </p>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Card3D>
            </div>

            {/* Right Column - Values Cards */}
            <div className="space-y-3">
              {[
                { icon: Target, title: "Mission-Driven", desc: "Every project starts with purpose", color: "teal" },
                { icon: TrendingUp, title: "Results-Focused", desc: "Measurable outcomes that matter", color: "teal" },
                { icon: Heart, title: "Client-Centric", desc: "Your success is our priority", color: "teal" },
              ].map((item, index) => (
                <Card3D
                  key={item.title}
                  variant="glass"
                  className={cn(
                    "group p-6 relative overflow-hidden",
                    "hover:scale-[1.02] hover:-translate-y-1 transition-all duration-700 ease-out",
                    "border-2 border-border/30 hover:border-primary/30",
                    "shadow-lg hover:shadow-2xl hover:shadow-primary/10"
                  )}
                >
                  {/* Animated gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none from-primary/10 via-primary/5 to-transparent" />
                  
                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="icon-box w-12 h-12 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground/90 transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </Card3D>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 w-full px-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-4 border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Partner <span className="gradient-text">With Us</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your success is our mission. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {whyUs.map((item, index) => (
              <Card3D
                key={item.title}
                variant="glass"
                className={cn(
                  "group relative p-8 flex items-start gap-6 opacity-0 animate-fade-in overflow-hidden",
                  "hover:scale-[1.03] hover:-translate-y-2 transition-all duration-700 ease-out",
                  "border-2 border-border/30 hover:border-primary/30",
                  "shadow-lg hover:shadow-2xl hover:shadow-primary/10"
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" } as React.CSSProperties}
              >
                {/* Animated gradient overlay on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                  item.color === 'teal' ? "from-primary/10 via-primary/5 to-transparent" : "from-gold/10 via-gold/5 to-transparent"
                )} />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Glow effect */}
                <div className={cn(
                  "absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10",
                  item.color === 'teal' 
                    ? "bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20"
                    : "bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20"
                )} />
                
                <div className={`${item.color === 'teal' ? 'icon-box' : 'icon-box-gold'} w-16 h-16 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative flex items-center justify-center`}>
                  <item.icon className="h-8 w-8 text-white group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                  {/* Icon glow */}
                  <div className={cn(
                    "absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
                    item.color === 'teal' ? "bg-primary/20" : "bg-gold/20"
                  )} />
                </div>
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
                
                {/* Corner accent */}
                <div className={cn(
                  "absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                  item.color === 'teal' 
                    ? "bg-gradient-to-br from-primary/10 to-transparent"
                    : "bg-gradient-to-br from-gold/10 to-transparent"
                )} />
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 relative overflow-hidden max-w-full">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="max-w-4xl mx-auto text-center w-full px-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Our Mission</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              To Transform Businesses Into{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">Brands</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-teal/50 via-gold/50 to-teal/50 blur-xl opacity-60" />
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              People <span className="text-foreground font-medium">love</span> and{" "}
              <span className="text-foreground font-medium">remember</span>.
            </p>
            
            {/* CTA Button */}
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="group relative overflow-hidden px-8 py-6 text-lg shadow-2xl shadow-teal/20 hover:shadow-teal/30 transition-all duration-300"
            >
              <Link to="/contact">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Journey
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
