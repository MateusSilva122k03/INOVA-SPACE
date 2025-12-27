import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
}

const StatCard = ({ title, value, change, changeType, icon: Icon }: StatCardProps) => {
  return (
    <Card className="p-5 relative overflow-hidden bg-zinc-950/40 backdrop-blur-md border border-white/5 hover:border-[#7f00ff]/20 transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-1.5 rounded-lg bg-white/[0.03] text-zinc-500 border border-white/[0.05] group-hover:text-zinc-300 transition-colors">
          <Icon className="h-4 w-4" />
        </div>
        <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${changeType === 'positive'
          ? 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10'
          : changeType === 'negative'
            ? 'text-red-400 bg-red-500/5 border-red-500/10'
            : 'text-zinc-400 bg-white/5 border-white/10'
          }`}>
          {change}
        </div>
      </div>

      <div>
        <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-white tracking-tight">{value}</h3>
      </div>
    </Card>
  );
};

export default StatCard;
