import { Star } from "lucide-react";

export default function SearchResultCard({title, posterUrl, rating}) {
    return (
        <div className="relative aspect-2/3 rounded-lg overflow-hidden bg-surface shadow-lg active:scale-95 transition-transform duration-200">
            <img src={posterUrl} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent flex flex-col justiy-end p-3">
                <div className="glass-panel p-2 rounded-lg">
                    <p className="text-sm text-on-surface truncate">
                        {title}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                        <Star size={14} fill="currentColor" className="text-secondary" />
                        <span className="text-xs text-secondary">
                            {rating}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}