import { Play, Plus, Star} from "lucide-react";

export default function HeroSection({
    title,
    tagline,
    rating,
    backdropUrl,
    isFeatured = true,
}) {
    return (
        <section className="relative h-[85vh] w-full overflow-hidden">
            {/* Background image + gradient */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${backdropUrl}')` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-surface/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-4 z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    {isFeatured && (
                        <span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold rounded uppercase tracking-widest">
                            Featured
                        </span>
                    )}
                    <div className="flex items-center text-white">
                        <Star size={14} fill='currentColor'/>
                        <span className="text-xs ml-1">{rating}</span>
                    </div>
                </div>

                <h2 className="font-display text-4xl leading-none max-w-xs">
                    {title}
                </h2>

                <p className="text-on-surface-variant max-w-md line-clamp-2">
                    {tagline}
                </p>

                <div className="flex gap-3 mt-2">
                    <button className="flex-1 bg-primary-container text-on-primary-container h-12 rounded-lg font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                        <Play size={20} fill="currentColor" />
                        Watch Now
                    </button>
                    <button className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-lg flex items-center justify-center active:scale-[0.98] transition-transform">
                    <Plus size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}