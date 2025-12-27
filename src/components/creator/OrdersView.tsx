import RecentOrders from './RecentOrders';

const OrdersView = () => {
    return (
        <div className="animate-fade-in py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gradient-premium tracking-tight mb-1">
                    Orders
                </h1>
                <p className="text-sm text-zinc-500">
                    Manage and track your customer orders.
                </p>
            </div>

            <div className="space-y-6">
                <RecentOrders />
            </div>
        </div>
    );
};

export default OrdersView;
