import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const orders = [
  {
    id: '#ORD-7821',
    customer: 'Alex Johnson',
    product: 'React Dashboard Pro',
    amount: '$79.00',
    status: 'completed',
    date: '2 hours ago',
  },
  {
    id: '#ORD-7820',
    customer: 'Maria Santos',
    product: 'AI Chat Components',
    amount: '$49.00',
    status: 'processing',
    date: '4 hours ago',
  },
  {
    id: '#ORD-7819',
    customer: 'James Wilson',
    product: 'Cosmic UI Kit',
    amount: '$35.00',
    status: 'completed',
    date: '6 hours ago',
  },
  {
    id: '#ORD-7818',
    customer: 'Emma Davis',
    product: 'Node.js Auth System',
    amount: '$59.00',
    status: 'pending',
    date: '8 hours ago',
  },
  {
    id: '#ORD-7817',
    customer: 'Michael Brown',
    product: 'Flutter E-commerce',
    amount: '$99.00',
    status: 'completed',
    date: '1 day ago',
  },
];

const statusStyles = {
  completed: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
  processing: 'text-[#7f00ff] border-[#7f00ff]/20 bg-[#7f00ff]/5',
  pending: 'text-amber-400 border-amber-500/20 bg-amber-500/5',
};

const RecentOrders = () => {
  return (
    <div className="glass-card bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-300 border border-white/10 rounded-2xl relative overflow-hidden group">
      <div className="p-6 border-b border-white/5 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-semibold text-white/90 tracking-tight">
              Recent Transactions
            </h3>
          </div>
          <Button variant="secondary" size="sm" className="h-8 px-4 rounded-full">
            View All
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto relative z-10">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5 bg-white/[0.01]">
              <th className="text-left p-6 label-prestige">Order ID</th>
              <th className="text-left p-6 label-prestige">Customer</th>
              <th className="text-left p-6 label-prestige">Product</th>
              <th className="text-left p-6 label-prestige">Amount</th>
              <th className="text-left p-6 label-prestige">Status</th>
              <th className="text-left p-6 label-prestige">Date</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.04] transition-all group/row">
                <td className="p-6 text-[11px] text-zinc-500 text-tech">{order.id}</td>
                <td className="p-6 text-[11px] text-zinc-100 font-medium">{order.customer}</td>
                <td className="p-6 text-[11px] text-zinc-400 font-medium">{order.product}</td>
                <td className="p-6 text-[11px] font-bold text-white tabular-nums text-tech">{order.amount}</td>
                <td className="p-6">
                  <span className={`badge-prestige ${statusStyles[order.status as keyof typeof statusStyles]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="p-6 text-[10px] text-zinc-600 font-bold uppercase tracking-wider whitespace-nowrap">{order.date}</td>
                <td className="p-6 text-right">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-white/5 transition-all">
                    <MoreHorizontal className="h-4.5 w-4.5 text-text-tertiary" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
