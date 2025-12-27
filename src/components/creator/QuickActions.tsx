import { Plus, Package, Users, Settings, FileText, TrendingUp } from 'lucide-react';

const actions = [
  { icon: Plus, label: 'Add Product' },
  { icon: Package, label: 'Manage Store' },
  { icon: Users, label: 'View Customers' },
  { icon: FileText, label: 'Create Invoice' },
  { icon: TrendingUp, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
];

const QuickActions = () => {
  return (
    <div className="glass-card p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 border border-white/10 rounded-2xl relative overflow-hidden group">
      <div className="flex items-center gap-3 mb-8 relative z-10">
        <h3 className="text-sm font-semibold text-white/90 tracking-tight">
          Quick Management
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4 relative z-10">
        {actions.map((action) => (
          <button
            key={action.label}
            className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-[#7f00ff]/20 hover:bg-[#7f00ff]/5 transition-all duration-300 group/btn relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7f00ff]/5 via-transparent to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center bg-white/[0.03] group-hover/btn:border-white/10 group-hover/btn:bg-white/5 transition-all">
              <action.icon className="h-6 w-6 text-zinc-500 group-hover/btn:text-zinc-200 transition-colors" />
            </div>
            <div className="text-center">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.15em] group-hover/btn:text-white transition-colors">
                {action.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
