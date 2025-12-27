import { Bell, Search, ExternalLink, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CreatorHeader = () => {
    return (
        <header className="h-16 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-30 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative max-w-md w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <input
                        type="text"
                        placeholder="Search products, orders, customers..."
                        className="w-full bg-white/[0.03] border border-white/5 rounded-full py-1.5 pl-10 pr-4 text-xs text-zinc-300 focus:outline-none focus:border-[#7f00ff]/30 focus:bg-white/[0.05] transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Link to="/marketplace" className="flex items-center gap-1.5 text-[12px] font-medium text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-full hover:bg-white/5">
                    <ExternalLink className="h-3.5 w-3.5" />
                    View Storefront
                </Link>

                <div className="h-8 w-px bg-white/5 mx-1" />

                <button className="relative p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
                    <Bell className="h-4.5 w-4.5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-[#7f00ff] rounded-full border-2 border-zinc-950" />
                </button>

                <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-white/5">
                    <div className="h-7 w-7 rounded-full bg-[#7f00ff] flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(127,0,255,0.3)] group-hover:bg-[#6d0ccd] transition-all">
                        <User className="h-4 w-4 text-white" />
                    </div>
                </Button>
            </div>
        </header>
    );
};

export default CreatorHeader;
