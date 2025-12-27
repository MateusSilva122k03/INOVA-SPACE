import { useState } from 'react';
import { Search, SlidersHorizontal, Grid3X3, List, Filter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/marketplace/ProductCard';
import CategoryFilter from '@/components/marketplace/CategoryFilter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Mock data for products
const products = [
  {
    id: 1,
    title: 'React Dashboard Pro',
    creator: 'DevMaster',
    price: 79,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Templates',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chat Components',
    creator: 'TechForge',
    price: 49,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    category: 'Components',
    featured: true,
  },
  {
    id: 3,
    title: 'Cosmic UI Kit',
    creator: 'DesignNova',
    price: 35,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
    category: 'Design Assets',
  },
  {
    id: 4,
    title: 'Node.js Auth System',
    creator: 'BackendPro',
    price: 59,
    rating: 4.6,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    category: 'SaaS Tools',
  },
  {
    id: 5,
    title: 'Flutter E-commerce',
    creator: 'MobileDevs',
    price: 99,
    rating: 4.9,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
    category: 'Mobile Apps',
  },
  {
    id: 6,
    title: 'ML Model Pipeline',
    creator: 'AILabs',
    price: 149,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop',
    category: 'AI & ML',
  },
  {
    id: 7,
    title: 'Next.js Blog Starter',
    creator: 'WebCraft',
    price: 29,
    rating: 4.7,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    category: 'Templates',
  },
  {
    id: 8,
    title: 'Chart Components Pro',
    creator: 'DataViz',
    price: 45,
    rating: 4.8,
    reviews: 123,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    category: 'Components',
  },
];

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' ||
      product.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-24 pb-24 px-6 md:px-12 container mx-auto max-w-7xl">

        {/* Minimal Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 pb-6 border-b border-white/5">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gradient-premium mb-2">
              Marketplace
            </h1>
            <p className="text-sm text-zinc-500 max-w-md">
              Curated digital assets for the modern developer stack.
            </p>
          </div>
          {/* Search - Integrated into header line on Desktop */}
          <div className="w-full md:w-auto mt-4 md:mt-0 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <Input
              placeholder="Search assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 w-full md:w-[300px] bg-white/[0.03] border-white/[0.08] text-sm focus:bg-white/[0.05] rounded-lg"
            />
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1 overflow-x-auto pb-2 hide-scrollbar">
            <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-zinc-600 font-medium mr-2">{filteredProducts.length} items found</span>
            <div className="flex bg-white/[0.03] rounded-md p-0.5 border border-white/[0.05]">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewMode('grid')}
                className={`h-7 w-7 rounded-sm transition-all ${viewMode === 'grid' ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-500 hover:text-white'}`}
              >
                <Grid3X3 className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setViewMode('list')}
                className={`h-7 w-7 rounded-sm transition-all ${viewMode === 'list' ? 'bg-white/10 text-white shadow-sm' : 'text-zinc-500 hover:text-white'}`}
              >
                <List className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-32 border border-white/5 rounded-2xl bg-white/[0.01]">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Search className="h-6 w-6 text-zinc-700" />
            </div>
            <h3 className="text-lg font-medium text-zinc-100 mb-2">Inventory Empty</h3>
            <p className="text-sm text-zinc-500 max-w-xs mx-auto">We couldn't find any resources matching your current search parameters.</p>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;
