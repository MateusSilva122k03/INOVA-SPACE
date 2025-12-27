import { Code, Palette, FileCode, Server, Smartphone, Brain } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Products', icon: null },
  { id: 'templates', name: 'Templates', icon: FileCode },
  { id: 'components', name: 'Components', icon: Code },
  { id: 'design', name: 'Design Assets', icon: Palette },
  { id: 'saas', name: 'SaaS Tools', icon: Server },
  { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
  { id: 'ai', name: 'AI & ML', icon: Brain },
];

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const CategoryFilter = ({ selected, onSelect }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 animate-reveal [animation-delay:300ms]">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`group flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-300 border ${selected === category.id
            ? 'bg-[#7f00ff]/10 border-[#7f00ff]/30 text-white shadow-[0_0_15px_rgba(127,0,255,0.1)]'
            : 'bg-white/[0.01] border-white/5 text-zinc-500 hover:text-zinc-200 hover:bg-white/5 hover:border-white/10'
            }`}
        >
          {category.icon && <category.icon className={`h-3.5 w-3.5 transition-colors duration-300 ${selected === category.id ? 'text-[#a855f7]' : 'text-zinc-600 group-hover:text-zinc-400'}`} />}
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
