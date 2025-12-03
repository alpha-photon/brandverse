import { cn } from "@/lib/utils";

interface Background3DProps {
  variant?: "hero" | "subtle" | "gradient" | "mesh";
  className?: string;
}

export function Background3D({ variant = "hero", className }: Background3DProps) {
  if (variant === "hero") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-teal/20 dark:bg-teal/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/15 dark:bg-gold/10 rounded-full blur-3xl animate-float animation-delay-200" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-navy/10 dark:bg-primary/10 rounded-full blur-3xl animate-float animation-delay-400" />
        
        {/* 3D Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(63,184,175,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(63,184,175,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-[20%] w-4 h-4 bg-teal/40 rounded-full animate-pulse-soft" />
        <div className="absolute top-[40%] left-[10%] w-3 h-3 bg-gold/50 rounded-full animate-pulse-soft animation-delay-300" />
        <div className="absolute bottom-[30%] right-[15%] w-2 h-2 bg-navy/30 dark:bg-primary/30 rounded-full animate-pulse-soft animation-delay-500" />
      </div>
    );
  }

  if (variant === "subtle") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal/5 to-transparent rounded-full" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-gold/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(63,184,175,0.1),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,78,0.1),transparent_50%)]" />
      </div>
    );
  }

  if (variant === "mesh") {
    return (
      <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
        {/* Mesh gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-teal/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gold/10 rounded-full blur-[100px] animate-float animation-delay-200" />
          <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-navy/10 dark:bg-teal-light/10 rounded-full blur-[100px] animate-float animation-delay-400" />
        </div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      </div>
    );
  }

  return null;
}
