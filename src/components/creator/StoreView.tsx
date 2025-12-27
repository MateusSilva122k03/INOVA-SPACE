import { Store, Camera, Save, Rocket, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const StoreView = () => {
    return (
        <div className="animate-reveal py-8">
            {/* Header */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gradient-premium tracking-tight mb-1">
                        Store Settings
                    </h1>
                    <p className="text-sm text-zinc-500">
                        Manage your store identity and preferences.
                    </p>
                </div>
                <Button className="bg-[#7f00ff] hover:bg-[#6d0ccd] text-white rounded-full px-6 h-10 shadow-lg shadow-[#7f00ff]/20 border-0">
                    <Save className="mr-2 h-4 w-4" />
                    Save Settings
                </Button>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Settings */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-panel p-6 md:p-8 rounded-xl space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-white">General Information</h2>

                            <div className="grid gap-2">
                                <Label htmlFor="storeName" className="label-prestige text-zinc-500">Store Name</Label>
                                <Input
                                    id="storeName"
                                    defaultValue="Dev Core"
                                    className="bg-white/[0.02] border-white/10 text-white focus:border-[#7f00ff]/50"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description" className="label-prestige text-zinc-500">Description</Label>
                                <Textarea
                                    id="description"
                                    placeholder="Tell us about your store..."
                                    className="bg-white/[0.02] border-white/10 text-white min-h-[120px] focus:border-[#7f00ff]/50"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email" className="label-prestige text-zinc-500">Contact Email</Label>
                                <Input
                                    id="email"
                                    defaultValue="mateus@inova.space"
                                    className="bg-white/[0.02] border-white/10 text-white focus:border-[#7f00ff]/50"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Branding Side */}
                <div className="space-y-6">
                    <div className="glass-panel p-6 rounded-xl space-y-6">
                        <h2 className="text-lg font-semibold text-white">Branding</h2>

                        {/* Logo Upload */}
                        <div className="space-y-3">
                            <Label className="label-prestige text-zinc-500">Store Logo</Label>
                            <div className="flex justify-center">
                                <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-white/5 bg-white/[0.01] flex flex-col items-center justify-center hover:bg-white/[0.03] hover:border-white/20 transition-all cursor-pointer group">
                                    <Rocket className="h-8 w-8 text-zinc-800 group-hover:text-zinc-400 transition-colors mb-2" />
                                    <span className="text-[10px] text-zinc-600 group-hover:text-zinc-400 uppercase tracking-widest font-bold">Upload Identity</span>
                                </div>
                            </div>
                        </div>

                        {/* Banner Upload */}
                        <div className="space-y-3">
                            <Label className="label-prestige text-zinc-500">Cover Image</Label>
                            <div className="w-full aspect-video rounded-2xl border-2 border-dashed border-white/5 bg-white/[0.01] flex flex-col items-center justify-center hover:bg-white/[0.03] hover:border-white/20 transition-all cursor-pointer group">
                                <Camera className="h-6 w-6 text-zinc-800 group-hover:text-zinc-400 transition-colors mb-2" />
                                <span className="text-[10px] text-zinc-600 group-hover:text-zinc-400 uppercase tracking-widest font-bold">Upload Environment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreView;
