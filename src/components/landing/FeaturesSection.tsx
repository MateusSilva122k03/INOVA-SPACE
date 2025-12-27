import { Code, Palette, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Developer-First',
    description: 'Built by developers, for developers. Sell code, APIs, SaaS tools, and technical services.',
  },
  {
    icon: Palette,
    title: 'Digital Products',
    description: 'Templates, themes, design assets, and digital downloads with instant delivery.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with instant search, fast checkout, and real-time analytics.',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Enterprise-grade security with multiple payment options and fraud protection.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Sell to customers worldwide with multi-currency support and localization.',
  },
  {
    icon: TrendingUp,
    title: 'Built-in CRM',
    description: 'Manage customers, track sales, and grow your business with powerful analytics.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-white">Everything You Need to </span>
            <span className="text-gradient-premium">Succeed</span>
          </h2>
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A specialized ecosystem meticulously engineered for the next generation of digital artisans.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-panel p-8 rounded-2xl group animate-reveal hover-tilt-accent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.02] flex items-center justify-center mb-6 border border-white/[0.05] group-hover:border-[#7f00ff]/30 transition-all duration-300">
                <feature.icon className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:text-[#7f00ff] group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
