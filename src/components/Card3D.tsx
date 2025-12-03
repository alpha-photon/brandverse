import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient" | "glow" | "elevated";
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

export function Card3D({ 
  children, 
  className, 
  variant = "default",
  hoverEffect = true,
  style
}: Card3DProps) {
  const baseStyles = "relative rounded-2xl transition-all duration-500";
  
  const variants = {
    default: cn(
      "bg-card border border-border/50",
      "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.05)_inset]",
      "dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)_inset]",
      hoverEffect && "hover:shadow-[0_20px_50px_-15px_rgba(63,184,175,0.2),0_0_0_1px_rgba(255,255,255,0.1)_inset] hover:-translate-y-2"
    ),
    glass: cn(
      "bg-card/70 dark:bg-card/50 backdrop-blur-xl",
      "border border-border/30 dark:border-border/20",
      "shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.1)_inset]",
      "dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)_inset]",
      hoverEffect && "hover:bg-card/90 dark:hover:bg-card/70 hover:shadow-[0_16px_48px_-12px_rgba(63,184,175,0.25)] hover:-translate-y-1"
    ),
    gradient: cn(
      "bg-gradient-to-br from-card via-card to-muted/50",
      "border border-border/50",
      "shadow-[0_8px_30px_-8px_rgba(0,0,0,0.1)]",
      "dark:from-card dark:via-card dark:to-muted/30",
      hoverEffect && "hover:shadow-[0_20px_50px_-15px_rgba(63,184,175,0.2)] hover:-translate-y-2"
    ),
    glow: cn(
      "bg-card border border-primary/20",
      "shadow-[0_0_30px_-10px_rgba(63,184,175,0.3)]",
      "dark:shadow-[0_0_30px_-10px_rgba(63,184,175,0.2)]",
      hoverEffect && "hover:shadow-[0_0_50px_-10px_rgba(63,184,175,0.5)] hover:border-primary/40 hover:-translate-y-1"
    ),
    elevated: cn(
      "bg-card",
      "shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15),0_4px_6px_-4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.05)]",
      "dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5),0_4px_6px_-4px_rgba(0,0,0,0.3),0_0_0_1px_rgba(255,255,255,0.05)]",
      hoverEffect && "hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.25)] hover:-translate-y-3"
    ),
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} style={style}>
      {/* Inner highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
