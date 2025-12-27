import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  BarChart3,
  Settings,
  HelpCircle,
  Store,
  FileText,
  CreditCard,
  Bell,
  Rocket
} from 'lucide-react';

const mainNavItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/creator' },
  { icon: Store, label: 'My Hub', path: '/creator/store' },
  { icon: Package, label: 'Products', path: '/creator/products' },
  { icon: ShoppingBag, label: 'Orders', path: '/creator/orders' },
  { icon: Users, label: 'Customers', path: '/creator/customers' },
  { icon: BarChart3, label: 'Analytics', path: '/creator/analytics' },
];

const secondaryNavItems = [
  { icon: FileText, label: 'Invoices', path: '/creator/invoices' },
  { icon: CreditCard, label: 'Payouts', path: '/creator/payouts' },
  { icon: Bell, label: 'Notifications', path: '/creator/notifications' },
  { icon: Settings, label: 'Settings', path: '/creator/settings' },
  { icon: HelpCircle, label: 'Help', path: '/creator/help' },
];

const CreatorSidebar = () => {
  const location = useLocation();

  const NavItem = ({ item }: { item: typeof mainNavItems[0] }) => {
    const isActive = location.pathname === item.path;

    return (
      <Link
        to={item.path}
        className={`flex items-center gap-3 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-300 group relative ${isActive
          ? 'text-white bg-white/[0.04] shadow-sm'
          : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.02]'
          }`}
      >
        {isActive && (
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-[#7f00ff] rounded-full blur-[2px] opacity-80" />
        )}
        <item.icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? 'text-[#a855f7]' : 'text-zinc-600 group-hover:text-zinc-400'}`} />
        {item.label}
      </Link>
    );
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-zinc-950 border-r border-white/5 pt-8 pb-6 px-4 flex flex-col z-40">

      {/* Brand / Logo Section */}
      <Link to="/" className="flex items-center gap-3 px-3 mb-10 group relative">
        <div className="relative">
          <div className="absolute -inset-1 bg-[#7f00ff]/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:border-[#7f00ff]/50 group-hover:bg-[#7f00ff]/10">
            <Rocket className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors duration-500" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-white text-[15px] tracking-tight leading-none mb-1 group-hover:text-gradient-purple transition-all">
            Inova Hub
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#7f00ff] animate-pulse" />
            <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.15em]">Workspace</span>
          </div>
        </div>
      </Link>

      {/* Vendor Profile */}
      <div className="mb-10 px-3 py-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 group/profile cursor-pointer hover:bg-white/[0.04] transition-all duration-300">
        <div className="relative">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shadow-inner group-hover/profile:border-[#7f00ff]/30 transition-colors">
            <span className="font-bold text-white text-[10px] tracking-tighter">MS</span>
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-zinc-950" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[12px] font-semibold text-zinc-200 leading-tight truncate group-hover/profile:text-white transition-colors">Mateus Silva</h3>
          <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block mt-0.5">Pro Vendor</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-8">
        {/* Main Nav */}
        <div>
          <p className="text-[11px] font-medium text-zinc-600 uppercase tracking-wider mb-2 px-3">
            Overview
          </p>
          <nav className="space-y-0.5">
            {mainNavItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </nav>
        </div>

        {/* Secondary Nav */}
        <div>
          <p className="text-[11px] font-medium text-zinc-600 uppercase tracking-wider mb-2 px-3">
            Account
          </p>
          <nav className="space-y-0.5">
            {secondaryNavItems.map((item) => (
              <NavItem key={item.path} item={item} />
            ))}
          </nav>
        </div>
      </div>

      {/* Footer / Version */}
      <div className="mt-auto px-3 py-4 border-t border-white/[0.05]">
        <p className="text-[10px] text-zinc-700 font-mono">Inova Hub v2.0</p>
      </div>

    </aside>
  );
};

export default CreatorSidebar;
