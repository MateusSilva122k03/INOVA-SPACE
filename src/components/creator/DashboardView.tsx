import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatCard from './StatCard';
import SalesChart from './SalesChart';
import RecentOrders from './RecentOrders';
import QuickActions from './QuickActions';

const stats = [
    {
        title: 'Total Revenue',
        value: '$24,780',
        change: '+12.5%',
        changeType: 'positive' as const,
        icon: DollarSign,
    },
    {
        title: 'Total Orders',
        value: '1,234',
        change: '+8.2%',
        changeType: 'positive' as const,
        icon: ShoppingBag,
    },
    {
        title: 'Total Customers',
        value: '892',
        change: '+5.1%',
        changeType: 'positive' as const,
        icon: Users,
    },
    {
        title: 'Conversion Rate',
        value: '3.24%',
        change: '-0.8%',
        changeType: 'negative' as const,
        icon: TrendingUp,
    },
];

const DashboardView = () => {
    return (
        <div className="animate-reveal">
            {/* Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gradient-premium tracking-tight mb-1">
                        Dashboard
                    </h1>
                    <p className="text-sm text-zinc-500">
                        Overview of your store's performance.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <span className="badge-prestige border-white/10 bg-white/[0.03] text-zinc-500 lowtracking px-3 py-1">
                        Last 30 Days
                    </span>
                    <Button size="sm" className="h-9 px-6 rounded-full font-bold uppercase text-[11px] tracking-wider">
                        Export Report
                    </Button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6 mb-6">
                {/* Sales Chart - 2 columns */}
                <div className="lg:col-span-2">
                    <SalesChart />
                </div>

                {/* Quick Actions - 1 column */}
                <div>
                    <QuickActions />
                </div>
            </div>

            {/* Recent Orders */}
            <div>
                <RecentOrders />
            </div>
        </div>
    );
};

export default DashboardView;
