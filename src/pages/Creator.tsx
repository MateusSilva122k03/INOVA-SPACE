import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import CreatorSidebar from '@/components/creator/CreatorSidebar';
import CreatorHeader from '@/components/creator/CreatorHeader';
import DashboardView from '@/components/creator/DashboardView';
import ProductsView from '@/components/creator/ProductsView';
import OrdersView from '@/components/creator/OrdersView';
import StoreView from '@/components/creator/StoreView';
import AnalyticsView from '@/components/creator/AnalyticsView';
import CustomersView from '@/components/creator/CustomersView';

const Creator = () => {
  return (
    <div className="min-h-screen bg-background relative flex">
      <CreatorSidebar />

      <main className="flex-1 ml-64 min-h-screen relative z-10 flex flex-col">
        <CreatorHeader />

        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route index element={<DashboardView />} />
              <Route path="products" element={<ProductsView />} />
              <Route path="orders" element={<OrdersView />} />
              <Route path="store" element={<StoreView />} />
              <Route path="customers" element={<CustomersView />} />
              <Route path="analytics" element={<AnalyticsView />} />
              <Route path="*" element={<DashboardView />} />
            </Routes>
          </div>
        </div>
      </main>

      {/* Subtle Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#7f00ff]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-[#7f00ff]/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default Creator;
