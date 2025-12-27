import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, ShieldCheck, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Subtle Background Mesh / Linear Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#7f00ff08_1px,transparent_1px),linear-gradient(to_bottom,#7f00ff08_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#7f00ff]/30 to-transparent blur-[120px] opacity-40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

        {/* Floating Badge (Pill) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-reveal cursor-default hover:border-white/20 transition-colors">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#7f00ff]" />
          <span className="text-[11px] font-medium text-zinc-300 uppercase tracking-wider">Inova Hub v2.0</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.0] animate-reveal [animation-delay:100ms] text-white">
          The Hub for <br />
          <span className="text-gradient-premium">
            Digital Visionaries
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-500 max-w-xl mb-10 leading-relaxed animate-reveal [animation-delay:200ms]">
          A premium ecosystem for elite creators and forward-thinking enterprises.
          Experience the future of B2B digital commerce.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-reveal [animation-delay:300ms]">
          <Link to="/marketplace">
            <Button size="lg" className="h-12 rounded-full px-8 text-[15px] font-semibold">
              Explore Marketplace <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/creator">
            <Button variant="secondary" size="lg" className="h-12 rounded-full px-8 text-[15px]">
              Start Selling
            </Button>
          </Link>
        </div>

        {/* Stats / Trust */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-white/5 w-full max-w-4xl animate-reveal [animation-delay:400ms]">
          {[
            { label: "Community", value: "2k+", icon: Globe },
            { label: "Volume", value: "$10M+", icon: Zap },
            { label: "Secure", value: "100%", icon: ShieldCheck },
            { label: "Uptime", value: "99.9%", icon: Zap },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-1 group">
              <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
              <span className="text-xs text-zinc-600 font-medium uppercase tracking-wider group-hover:text-zinc-400 transition-colors">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
