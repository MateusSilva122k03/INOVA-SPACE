import { Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProductCardProps {
  title: string;
  creator: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  featured?: boolean;
}

const ProductCard = ({ title, creator, price, rating, image, category, featured }: ProductCardProps) => {
  return (
    <Card className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/40 backdrop-blur-md hover:border-[#7f00ff]/30 transition-all duration-500 shadow-sm hover:shadow-[0_0_30px_rgba(127,0,255,0.05)]`}>

      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent opacity-40" />

        {/* Minimal Tags */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2 py-0.5 text-[10px] font-medium tracking-wide bg-black/40 backdrop-blur-md text-zinc-300 rounded border border-white/5">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-3">
        <div className="flex justify-between items-start mb-1.5">
          <h3 className="text-[15px] font-bold text-white truncate pr-2 group-hover:text-gradient-premium transition-all">
            {title}
          </h3>
          <span className="text-[14px] font-bold text-[#7f00ff]">
            ${price}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-zinc-500 flex items-center gap-1">
            by <span className="text-zinc-400 hover:text-white cursor-pointer transition-colors">{creator}</span>
          </p>

          <div className="flex items-center gap-1 text-[11px] font-bold text-zinc-500">
            <Star className="w-3 h-3 text-[#7f00ff]/40 fill-[#7f00ff]/40 group-hover:text-[#7f00ff] group-hover:fill-[#7f00ff] transition-all duration-300" />
            {rating}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
