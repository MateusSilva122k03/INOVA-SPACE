import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Rocket, Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:px-6 md:pt-6`}>
      <div className={`
        mx-auto transition-all duration-300 relative z-50
        ${scrolled
          ? 'max-w-4xl bg-[#240046]/80 backdrop-blur-xl border border-[#7f00ff]/20 rounded-full shadow-2xl shadow-[#7f00ff]/10 py-3 px-6'
          : 'max-w-6xl bg-transparent border-transparent py-4 px-4'}
      `}>
        <div className="flex items-center justify-between">

          {/* Logo (Minimalist) */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#7f00ff]/20 group-hover:bg-[#7f00ff]/40 transition-colors">
              <Rocket className="h-3.5 w-3.5 text-white group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
              Inova Hub
            </span>
          </Link>

          {/* Desktop Nav - Linear Style (Center) */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {[
              { path: '/', label: 'Overview' },
              { path: '/marketplace', label: 'Marketplace' },
              { path: '/creator', label: 'Creators' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  text-[13px] px-3 py-1.5 rounded-full transition-all duration-300 font-medium relative group/nav
                  ${isActive(link.path)
                    ? 'text-white bg-white/5'
                    : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5'}
                `}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-3 rounded-full bg-[#7f00ff] blur-[4px] opacity-80" />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors">
              Log in
            </Link>
            <Button
              variant="premium"
              size="sm"
              className="h-8 px-4 text-[12px] font-medium rounded-full bg-[#7f00ff] hover:bg-[#6d0ccd] text-white border-0 shadow-[0_0_15px_rgba(127,0,255,0.4)] hover:shadow-[0_0_20px_rgba(127,0,255,0.6)]"
            >
              Sign Up <ChevronRight className="h-3 w-3 ml-1 opacity-60" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#240046] z-40 flex flex-col p-6 pt-24 space-y-4 md:hidden animate-in fade-in slide-in-from-top-10">
          {[
            { path: '/', label: 'Overview' },
            { path: '/marketplace', label: 'Marketplace' },
            { path: '/creator', label: 'Creators' }
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-400 hover:text-white border-b border-white/5 pb-4"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Link to="/login" className="w-full">
              <Button variant="secondary" className="w-full justify-start pl-4" onClick={() => setIsOpen(false)}>Log in</Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button variant="premium" className="w-full justify-start pl-4 h-12" onClick={() => setIsOpen(false)}>Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
