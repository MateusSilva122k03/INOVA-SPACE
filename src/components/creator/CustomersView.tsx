import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomersView = () => {
    return (
        <div className="animate-reveal py-8">
            <div className="mb-10 text-left">
                <h1 className="text-2xl font-bold text-gradient-premium tracking-tight mb-1">
                    Customers
                </h1>
                <p className="text-sm text-zinc-500">
                    View and manage your customer base.
                </p>
            </div>

            <div className="glass-panel p-24 rounded-2xl flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-zinc-600" />
                </div>
                <h3 className="text-lg font-medium text-zinc-100 mb-2">Network Empty</h3>
                <p className="text-sm text-zinc-500 max-w-sm mb-8">
                    Your customer relationships will be architected here upon your first successful transaction.
                </p>
                <Button variant="outline" className="h-10 px-6 rounded-full border-white/10 hover:bg-white/5 text-zinc-400 hover:text-white transition-all">
                    Import Database
                </Button>
            </div>
        </div>
    );
};

export default CustomersView;
