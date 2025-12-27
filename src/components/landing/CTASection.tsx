import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7f00ff]/10 rounded-full blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-12 md:p-20 text-center relative overflow-hidden group rounded-3xl">
            {/* Inner Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7f00ff]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-10 mx-auto shadow-xl shadow-black/20 animate-float border border-white/[0.05]">
                <Rocket className="h-8 w-8 text-zinc-400 group-hover:text-white transition-colors" />
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tighter leading-[1.1] animate-reveal">
                <span className="text-white">Ready to Launch Your </span><br />
                <span className="text-gradient-premium">Next Empire?</span>
              </h2>

              <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-reveal [animation-delay:100ms]">
                Join thousands of world-class creators building elite digital businesses on Inova Hub.
                Scale your vision to the global marketplace today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-reveal [animation-delay:200ms]">
                <Link to="/creator">
                  <Button variant="default" size="lg" className="h-12 px-10 rounded-full text-[15px] font-semibold">
                    Start Selling Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/marketplace">
                  <Button variant="secondary" size="lg" className="h-12 px-8 rounded-full text-[15px] border border-white/5 hover:bg-white/5">
                    Explore Hub
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col items-center gap-4 mt-12 animate-reveal [animation-delay:300ms]">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-[#240046] ring-2 ring-white/5 bg-[#3c096c] overflow-hidden shadow-xl">
                      <img src={`https://i.pravatar.cc/100?u=inova${i}`} alt="Elite Creator" className="w-full h-full object-cover opacity-80" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                  Trusted by <span className="text-zinc-300">2,000+</span> Top-Tier Vendors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
