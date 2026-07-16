import { Star } from "lucide-react";

export default function MovieCard({title, posterUrl, rating}) {
    return (
        <div className="min-w-40 group">
            <div className="relative aspect-2/3 rounded-xl overflow-hidden mb-2 shadow-xl ring-1 ring-white/5">
                <img 
                    src={posterUrl}
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"    
                />
                <div className="absolute bottom-2 left-2 flex items-center bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-secondary ">
                    <Star siz={10} fill="currentColor" />
                    <span className="text-[10px] font-bold ml-1">{rating}</span>
                </div>
            </div>
            <p className="text-sm text-on-surface truncate">{title}</p>
        </div>
    );
}