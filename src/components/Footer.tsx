import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-[#7f00ff]/10 bg-background py-20 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand & Socials */}
          <div className="md:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                <Rocket className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-lg font-bold tracking-tight text-gradient-premium">
                Inova Hub
              </span>
            </Link>
            <p className="text-[13px] text-zinc-500 mb-8 leading-relaxed max-w-xs">
              The world's most advanced ecosystem for elite digital creators and enterprises.
            </p>
            <div className="flex gap-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all rounded-lg group text-zinc-500 hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          {[
            { title: 'Platform', links: ['Features', 'Marketplace', 'Creators', 'Enterprise'] },
            { title: 'Resources', links: ['Documentation', 'API Reference', 'Community', 'Guides'] },
            { title: 'Company', links: ['About', 'Blog', 'Security', 'Legal'] }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] font-bold mb-6 text-zinc-100 uppercase tracking-widest">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-zinc-500 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider text-zinc-600 font-medium">
            <span>© 2024 INOVA HUB GLOBAL</span>
          </div>
          <div className="flex gap-8 text-[11px] uppercase tracking-wider text-zinc-600 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
