import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { MoveLeft, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono-technical text-[20vw] font-black flex items-center justify-center select-none">
        ERROR
      </div>

      <div className="relative z-10 text-center max-w-lg px-6">
        <div className="inline-flex p-6 border border-purple-primary/40 bg-purple-primary/5 mb-10 rotate-45">
          <ShieldAlert className="h-10 w-10 text-purple-primary -rotate-45" />
        </div>

        <h1 className="text-9xl font-display font-black text-white mb-2 tracking-tighter italic uppercase leading-none">404</h1>
        <h2 className="font-mono-technical text-xs font-black text-purple-primary mb-8 tracking-[0.4em] uppercase">SYSTEM PROTOCOL BREACH</h2>

        <div className="glass-card p-6 mb-10 bg-white/[0.02] border-white/10 text-left">
          <p className="font-mono-technical text-[10px] text-text-tertiary mb-2 uppercase tracking-widest">
            // UNABLE TO RESOLVE COORDINATES
          </p>
          <p className="font-mono-technical text-sm text-white leading-relaxed">
            The requested entry <span className="text-purple-primary underline decoration-purple-primary/40 underline-offset-4">{location.pathname}</span> does not exist in the IH_CORE registry.
          </p>
        </div>

        <Link to="/">
          <Button className="h-12 px-8 font-mono-technical text-[11px] uppercase tracking-widest rounded-none border border-purple-primary/60 hover:bg-purple-primary/10 transition-all glitch-hover">
            <MoveLeft className="mr-3 h-4 w-4" />
            REBOOT SYSTEM
          </Button>
        </Link>
      </div>

      {/* Industrial Accents */}
      <div className="absolute bottom-0 left-0 p-10 font-mono-technical text-[10px] text-text-tertiary opacity-20 uppercase tracking-[0.5em]">
        Status: Void Registry
      </div>
    </div>
  );
};

export default NotFound;
