import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { Background3D } from "@/components/Background3D";
import { Card3D } from "@/components/Card3D";
import { cn } from "@/lib/utils";
import {
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Zap,
  Handshake,
  ArrowRight,
  Sparkles,
  LineChart,
  Megaphone,
  MousePointerClick,
  ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Brand Strategy",
    description: "Crafting unique brand identities that resonate with your audience and stand out in the market.",
    features: ["Brand Identity", "Market Research", "Positioning"],
    color: "from-teal/20 to-teal/5",
  },
  {
    icon: Target,
    title: "Digital Marketing",
    description: "Data-driven campaigns that connect you with the right customers at the right time.",
    features: ["Campaign Strategy", "PPC Advertising", "Email Marketing"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    title: "SEO & Growth",
    description: "Optimizing your digital presence to drive organic traffic and sustainable growth.",
    features: ["SEO Optimization", "Content Strategy", "Link Building"],
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description: "Building engaged communities and amplifying your brand voice across platforms.",
    features: ["Community Management", "Content Planning", "Influencer Marketing"],
    color: "from-teal/20 to-teal/5",
  },
  {
    icon: LineChart,
    title: "Analytics",
    description: "Transforming data into actionable insights that fuel smarter business decisions.",
    features: ["Data Analysis", "Performance Tracking", "ROI Reporting"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "Content Creation",
    description: "Compelling stories and visuals that capture attention and inspire action.",
    features: ["Visual Design", "Copywriting", "Video Production"],
    color: "from-gold/20 to-gold/5",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Industry veterans with proven track records",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "Agile strategies that deliver quickly",
  },
  {
    icon: Handshake,
    title: "Trusted by Clients",
    description: "Proven success across diverse industries",
  },
  {
    icon: Target,
    title: "Data-Driven",
    description: "Decisions backed by real analytics",
  },
];

export default function Index() {
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

  const words = ["Building Brands.", "Creating Connections.", "Driving Growth."];
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
          className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal/20 dark:bg-teal/10 rounded-full blur-3xl transition-all duration-700 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gold/15 dark:bg-gold/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
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
                  "inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs sm:text-sm font-medium transition-all duration-1000 border border-primary/20",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 animate-pulse" />
                <span className="relative whitespace-nowrap">
                  <span className="hidden sm:inline">Digital Branding Excellence</span>
                  <span className="sm:hidden">Branding Excellence</span>
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
                  "text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed transition-all duration-1000 mb-2",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "600ms" }}
              >
                At Brandverse Studio, we craft powerful digital strategies that help your brand 
                stand out, speak louder, and grow faster in today's digital world.
              </p>

              <div
                className={cn(
                  "flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 transition-all duration-1000 mt-4 sm:mt-6",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: "800ms" }}
              >
                <Button
                  variant="hero"
                  asChild
                  className="group relative overflow-hidden w-full sm:w-auto"
                >
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                    Work With Us
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </Button>
                <Button
                  variant="hero-outline"
                  asChild
                  className="group relative overflow-hidden w-full sm:w-auto"
                >
                  <Link to="/services">
                    <span className="relative z-10 text-sm sm:text-base">Explore Our Services</span>
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
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-teal/20 via-transparent to-gold/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              <div className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center p-2 sm:p-4">
                  {/* Statistics Dashboard SVG */}
                  <svg
                    viewBox="0 0 600 450"
                    className="w-full h-full max-w-4xl scale-75 sm:scale-90 md:scale-100 lg:scale-110 xl:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <linearGradient id="statGrad" x1="0%" y1="0%" x2="100%" y2="0%">
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
                    
                    {/* Statistics Cards */}
                    {/* Card 1: Projects */}
                    <g transform="translate(50, 20)" className="group-hover:translate-y-[-5px] transition-transform duration-300">
                      <rect x="0" y="0" width="140" height="100" rx="12" fill="hsl(var(--card))" stroke="url(#statGrad)" strokeWidth="2" opacity="0.9" className="group-hover:opacity-100 transition-opacity" />
                     
                      <text x="70" y="55" textAnchor="middle" className="text-2xl font-bold fill-foreground" fontSize="28" fontWeight="bold">500+</text>
                      <text x="70" y="75" textAnchor="middle" className="text-muted-foreground" fontSize="12" fill="hsl(var(--muted-foreground))">Projects</text>
                    </g>
                    
                    {/* Card 2: Satisfaction */}
                    <g transform="translate(230, 20)" className="group-hover:translate-y-[-5px] transition-transform duration-300">
                      <rect x="0" y="0" width="140" height="100" rx="12" fill="hsl(var(--card))" stroke="url(#statGrad)" strokeWidth="2" opacity="0.9" className="group-hover:opacity-100 transition-opacity" />
                     
                      <text x="70" y="55" textAnchor="middle" className="text-2xl font-bold fill-foreground" fontSize="28" fontWeight="bold">98%</text>
                      <text x="70" y="75" textAnchor="middle" className="text-muted-foreground" fontSize="12" fill="hsl(var(--muted-foreground))">Satisfaction</text>
                    </g>
                    
                    {/* Card 3: Awards */}
                    <g transform="translate(410, 20)" className="group-hover:translate-y-[-5px] transition-transform duration-300">
                      <rect x="0" y="0" width="140" height="100" rx="12" fill="hsl(var(--card))" stroke="url(#statGrad)" strokeWidth="2" opacity="0.9" className="group-hover:opacity-100 transition-opacity" />
                     
                      <text x="70" y="55" textAnchor="middle" className="text-2xl font-bold fill-foreground" fontSize="28" fontWeight="bold">50+</text>
                      <text x="70" y="75" textAnchor="middle" className="text-muted-foreground" fontSize="12" fill="hsl(var(--muted-foreground))">Awards</text>
                    </g>
                    
                    {/* Central Growth Chart */}
                    <g transform="translate(150, 170)" className="group-hover:scale-105 transition-transform duration-500">
                      {/* Chart Background */}
                      <rect x="0" y="0" width="300" height="200" rx="16" fill="hsl(var(--card))" stroke="url(#statGrad)" strokeWidth="2" opacity="0.9" />
                      
                      {/* Chart Bars */}
                      <g transform="translate(40, 40)">
                        {/* Bar 1 */}
                        <rect x="0" y="120" width="35" height="40" rx="4" fill="url(#statGrad)" opacity="0.6" className="group-hover:opacity-1 transition-opacity" />
                        <text x="17.5" y="115" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">40</text>
                        
                        {/* Bar 2 */}
                        <rect x="50" y="100" width="35" height="60" rx="4" fill="url(#statGrad)" opacity="0.7" className="group-hover:opacity-1 transition-opacity" />
                        <text x="67.5" y="95" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">60</text>
                        
                        {/* Bar 3 */}
                        <rect x="100" y="80" width="35" height="80" rx="4" fill="url(#statGrad)" opacity="0.8" className="group-hover:opacity-1 transition-opacity" />
                        <text x="117.5" y="75" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">80</text>
                        
                        {/* Bar 4 */}
                        <rect x="150" y="60" width="35" height="100" rx="4" fill="url(#statGrad)" opacity="0.9" className="group-hover:opacity-1 transition-opacity" />
                        <text x="167.5" y="55" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">100</text>
                        
                        {/* Bar 5 */}
                        <rect x="200" y="40" width="35" height="120" rx="4" fill="url(#statGrad)" opacity="1" className="group-hover:opacity-1 transition-opacity" />
                        <text x="217.5" y="35" textAnchor="middle" fontSize="12" fill="hsl(var(--muted-foreground))">120</text>
                      </g>
                      
                      {/* Chart Title */}
                      <text x="150" y="30" textAnchor="middle" fontSize="18" fontWeight="bold" fill="hsl(var(--foreground))">Growth Metrics</text>
                      
                      {/* Trend Line */}
                      <path d="M50 140 Q100 120 150 100 T250 60" stroke="url(#statGrad)" strokeWidth="3" fill="none" strokeDasharray="5,5" opacity="0.6" />
                      
                      {/* Growth Arrow */}
                      <g transform="translate(250, 60)">
                        <path d="M0 0 L15 -15 L12 -12 L5 -5 L5 -20 L-5 -20 L-5 -5 L-12 -12 Z" fill="url(#statGrad)" filter="url(#glow)" />
                      </g>
                    </g>
                  </svg>
                  </div>
              
              {/* Floating Cards */}
            

              {/* Additional floating element */}
             
            </div>
          </div>
        </div>

        
      </section>

      {/* Services Preview */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-0 relative overflow-hidden max-w-full px-4 sm:px-6">
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 w-full px-2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 border border-primary/20">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>What We Offer</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 px-2">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
              Comprehensive digital solutions tailored to elevate your brand and drive measurable results
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {services.map((service, index) => (
              <Card3D
                key={service.title}
                variant="glass"
                className={cn(
                  "group relative p-6 sm:p-8 h-full flex flex-col opacity-0 animate-fade-in overflow-hidden",
                  "hover:scale-[1.03] hover:-translate-y-2 transition-all duration-700 ease-out",
                  "border-2 border-border/30 hover:border-primary/30",
                  "shadow-lg hover:shadow-2xl hover:shadow-primary/10",
                  `bg-gradient-to-br ${service.color}`
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" } as React.CSSProperties}
              >
                {/* Animated gradient overlay on hover */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                  "from-primary/10 via-primary/5 to-transparent",
                  service.color
                )} />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon with enhanced animation */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="icon-box w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out relative">
                      <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                      {/* Icon glow */}
                      <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                    {/* Decorative circle */}
                    <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 blur-sm" />
                  </div>
                  
                  {/* Title with enhanced styling */}
                  <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-all duration-500 leading-tight">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base group-hover:text-foreground/90 transition-colors duration-500 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features with enhanced styling */}
                  <div className="space-y-2.5 pt-5 border-t border-border/40 group-hover:border-primary/30 transition-colors duration-500 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-all duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div className="relative">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150" />
                          <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 group-hover:scale-300 blur-sm transition-all duration-300" />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Enhanced arrow indicator */}
                  <div className="mt-auto pt-2">
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                     
                      <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Card3D>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8 md:mt-12 pb-8 sm:pb-12 md:pb-16">
            <Button 
              variant="hero" 
              size="lg" 
              asChild
              className="group relative overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6"
            >
              <Link to="/services">
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Explore All Services
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tagline Block */}
      <section className="pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 relative overflow-hidden max-w-full px-4 sm:px-6">
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gold/10 rounded-full blur-3xl animate-pulse-soft animation-delay-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-teal/5 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 py-4 sm:py-6 md:py-8 lg:py-12 max-w-full">
          <div className="max-w-5xl mx-auto w-full px-2 sm:px-4">
            {/* Quote Icon */}
            <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Quote Text */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed sm:leading-relaxed font-light text-foreground animate-fade-in animation-delay-100 text-center">
              <p className="mb-6 sm:mb-8 md:mb-10">
                <span className="text-muted-foreground">We're not just an agency. We're your partner in shaping a brand story that</span>{" "}
                <span className="relative inline-block group">
                  <span className="text-teal font-bold relative z-10">inspires trust</span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-teal/30 rounded-full blur-sm group-hover:bg-teal/50 transition-all duration-300" />
                  <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-teal/60 rounded-full" />
                </span>
                {", builds "}
                <span className="relative inline-block group">
                  <span className="text-primary font-bold relative z-10">loyalty</span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-primary/30 rounded-full blur-sm group-hover:bg-primary/50 transition-all duration-300" />
                  <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-primary/60 rounded-full" />
                </span>
                {", and drives "}
                <span className="relative inline-block group">
                  <span className="text-gold font-bold relative z-10">real impact</span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-gold/30 rounded-full blur-sm group-hover:bg-gold/50 transition-all duration-300" />
                  <span className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-gold/60 rounded-full" />
                </span>
                {"."}
              </p>
            </blockquote>
            
            {/* Author/Attribution */}
            <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-3 sm:gap-4 animate-fade-in animation-delay-200">
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-sm sm:text-base text-muted-foreground font-semibold">Brandverse Studio</p>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse animation-delay-300" />
              </div>
              <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16 relative overflow-hidden max-w-full px-4 sm:px-6">
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 w-full px-2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 border border-primary/20">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 px-2">
              Why Choose <span className="gradient-text">Brandverse?</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2">
              What sets us apart in the digital landscape
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {whyChooseUs.map((item, index) => (
              <Card3D
                key={item.title}
                variant="glass"
                className={cn(
                  "group relative p-6 sm:p-8 text-center opacity-0 animate-fade-in overflow-hidden h-full flex flex-col items-center",
                  "hover:scale-[1.03] hover:-translate-y-2 transition-all duration-700 ease-out",
                  "border-2 border-border/30 hover:border-primary/30",
                  "shadow-lg hover:shadow-2xl hover:shadow-primary/10",
                  "bg-gradient-to-br from-muted/50 via-background to-muted/30"
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" } as React.CSSProperties}
              >
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none from-primary/10 via-gold/5 to-primary/10" />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-gold/10 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 -z-10" />
                
                {/* Icon with enhanced styling */}
                <div className="relative z-10 mb-4 sm:mb-6">
                  <div className="icon-box-gold w-16 h-16 sm:w-20 sm:h-20 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out relative flex items-center justify-center">
                    <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                    {/* Icon glow */}
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 blur-sm" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 blur-sm animation-delay-200" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-all duration-500">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-500 px-2">
                    {item.description}
                  </p>
                </div>
                
                {/* Enhanced decorative element */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-teal via-gold to-teal group-hover:w-20 transition-all duration-700 rounded-full" />
                
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gold/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden max-w-full px-4 sm:px-6">
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-teal/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gold/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 max-w-full">
          <div className="max-w-4xl mx-auto text-center w-full px-2 sm:px-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8 animate-fade-in border border-primary/20">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Let's Get Started</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
              Ready to Build Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">Brand?</span>
                <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-teal/50 via-gold/50 to-teal/50 blur-xl opacity-60" />
              </span>
          </h2>
            
            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 leading-relaxed px-2">
            Let's create something extraordinary together. Transform your vision into a brand 
              that people <span className="text-foreground font-medium">love</span> and{" "}
              <span className="text-foreground font-medium">remember</span>.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button 
                variant="hero" 
                size="lg"
                asChild
                className="group relative overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-2xl shadow-teal/20 hover:shadow-teal/30 transition-all duration-300"
              >
            <Link to="/contact">
                  <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              Let's Build Your Brand
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-teal-light to-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              </Button>
              
              <Button 
                variant="hero-outline" 
                size="lg"
                asChild
                className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300"
              >
                <Link to="/services">
                  Explore Our Services
            </Link>
          </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
