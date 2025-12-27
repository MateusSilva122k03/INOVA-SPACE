import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, orders: 24 },
  { name: 'Feb', sales: 3000, orders: 18 },
  { name: 'Mar', sales: 5000, orders: 32 },
  { name: 'Apr', sales: 4500, orders: 28 },
  { name: 'May', sales: 6000, orders: 38 },
  { name: 'Jun', sales: 5500, orders: 35 },
  { name: 'Jul', sales: 7000, orders: 42 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-panel p-4 border border-white/10 shadow-2xl backdrop-blur-xl rounded-xl">
        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2">{label}</p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#7f00ff]" />
          <p className="text-[13px] font-mono font-bold text-white">
            <span className="text-zinc-500 mr-1">sales:</span>
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const SalesChart = () => {
  return (
    <div className="glass-card p-8 bg-white/[0.02] hover:bg-white/[0.03] transition-all duration-300 border border-white/10 rounded-2xl relative overflow-hidden group">
      <div className="flex items-center justify-between mb-10 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-sm font-semibold text-gradient-premium tracking-tight">
              Revenue Analysis
            </h3>
          </div>
          <p className="text-[12px] text-zinc-500">
            Performance overview for the last 7 months
          </p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-zinc-400">
            Live Data
          </div>
        </div>
      </div>

      <div className="h-80 relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7f00ff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7f00ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="rgba(255, 255, 255, 0.1)"
              fontSize={10}
              tick={{ fill: 'rgba(255, 255, 255, 0.3)', fontWeight: 600, fontFamily: 'monospace' }}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="rgba(255, 255, 255, 0.1)"
              fontSize={10}
              tick={{ fill: 'rgba(255, 255, 255, 0.3)', fontWeight: 600, fontFamily: 'monospace' }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
              dx={-5}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#7f00ff', strokeWidth: 1.5, strokeDasharray: '4 4' }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#salesGradient)"
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div >
  );
};

export default SalesChart;
