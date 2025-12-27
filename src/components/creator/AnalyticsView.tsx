import { BarChart3, TrendingUp, Users, DollarSign } from 'lucide-react';
import StatCard from './StatCard';
import { Button } from '@/components/ui/button';

const AnalyticsView = () => {
    return (
        <div className="animate-reveal py-8">
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gradient-premium tracking-tight mb-1">
                        Analytics
                    </h1>
                    <p className="text-sm text-zinc-500">
                        Detailed performance metrics and insights.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-zinc-500 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.02]">
                        Last 7 Days
                    </span>
                    <Button variant="outline" size="sm" className="h-9 border-white/5 text-zinc-400 hover:text-white hover:bg-white/5">
                        Download CSV
                    </Button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <StatCard
                    title="Revenue"
                    value="$12,450"
                    change="+15.2%"
                    changeType="positive"
                    icon={DollarSign}
                />
                <StatCard
                    title="Views"
                    value="45.2k"
                    change="+5.4%"
                    changeType="positive"
                    icon={Users}
                />
                <StatCard
                    title="Conversion"
                    value="2.4%"
                    change="-0.1%"
                    changeType="negative"
                    icon={TrendingUp}
                />
                <StatCard
                    title="Active Listings"
                    value="24"
                    change="+2"
                    changeType="positive"
                    icon={BarChart3}
                />
            </div>

            <div className="glass-panel p-24 rounded-2xl flex flex-col items-center justify-center text-center min-h-[400px]">
                <BarChart3 className="h-12 w-12 text-zinc-800 mb-6" />
                <h3 className="text-lg font-medium text-zinc-100 mb-2">Insufficient Data Portfolio</h3>
                <p className="text-sm text-zinc-500 max-w-sm">
                    We need a bit more activity to generate detailed charts. Check back after your first few sales.
                </p>
            </div>
        </div>
    );
};

export default AnalyticsView;
