import { Plus, Search, Filter, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const products = [
    { id: 'PRD-001', name: 'React Dashboard Pro', category: 'Templates', price: '$79.00', stock: 156, status: 'active' },
    { id: 'PRD-002', name: 'AI Chat Components', category: 'UI Kits', price: '$49.00', stock: 84, status: 'active' },
    { id: 'PRD-003', name: 'Cosmic UI Kit', category: 'UI Kits', price: '$35.00', stock: 212, status: 'active' },
    { id: 'PRD-004', name: 'Node.js Auth System', category: 'Backend', price: '$59.00', stock: 45, status: 'inactive' },
    { id: 'PRD-005', name: 'Flutter E-commerce', category: 'Mobile', price: '$99.00', stock: 28, status: 'active' },
];

const ProductsView = () => {
    return (
        <div className="animate-reveal py-8">
            {/* Header */}
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gradient-premium tracking-tight mb-2">
                        Products
                    </h1>
                    <p className="text-sm text-zinc-500">
                        Manage your digital assets and inventory.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" className="h-9 border-white/5 text-zinc-400 hover:text-white hover:bg-white/5">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                    <Button size="sm" className="h-9 bg-[#7f00ff] hover:bg-[#6d0ccd] text-white">
                        <Plus className="mr-2 h-4 w-4" />
                        New Product
                    </Button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <Input
                    placeholder="Search products..."
                    className="pl-10 h-10 w-full md:w-[400px] bg-white/[0.02] border-white/[0.08] text-sm focus:bg-white/[0.05] rounded-lg"
                />
            </div>

            {/* Products Table (Linear Style) */}
            <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-[#0E0E12]">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/[0.08] bg-white/[0.01]">
                                <th className="text-left py-3 px-4 label-prestige">ID</th>
                                <th className="text-left py-3 px-4 label-prestige">Product</th>
                                <th className="text-left py-3 px-4 label-prestige">Category</th>
                                <th className="text-left py-3 px-4 label-prestige">Price</th>
                                <th className="text-left py-3 px-4 label-prestige">Stock</th>
                                <th className="text-left py-3 px-4 label-prestige">Status</th>
                                <th className="py-3 px-4 label-prestige text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors group">
                                    <td className="py-3 px-4 text-[11px] text-zinc-500 text-tech">{product.id}</td>
                                    <td className="py-3 px-4 text-[13px] text-white font-semibold">{product.name}</td>
                                    <td className="py-3 px-4 text-[12px] text-zinc-500 font-medium capitalize">{product.category}</td>
                                    <td className="py-3 px-4 text-[12px] text-white font-bold text-tech">{product.price}</td>
                                    <td className="py-3 px-4 text-[12px] text-zinc-500 text-tech">{product.stock}</td>
                                    <td className="py-3 px-4">
                                        <div className={`badge-prestige ${product.status === 'active'
                                            ? 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10'
                                            : 'text-zinc-600 bg-white/5 border-white/10'
                                            }`}>
                                            {product.status}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-md hover:bg-white/5 text-zinc-500 hover:text-white">
                                            <MoreVertical className="h-3.5 w-3.5" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductsView;
