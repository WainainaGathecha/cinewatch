import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { getMovieDetails } from "@/lib/tmdb";

export default function MovieDetailsPage() {
    const {id} = useParams();
    const {data:movie, isLoading, error} = useQuery({
        queryKey:["movie", id],
        queryFn: () => getMovieDetails(id),
    });

    if (isLoading) {
        return <div className="h-screen bg-surface animate-pulse" />
    }

    if (error || !movie) {
        return (
            <div className="px-4 pt-8 text-center text-on-surface-variant">
                Couldn't load this movie.
            </div>
        );
    }

    const director = movie.credits.crew.find((person) => person.job === "Director");
    const topCast = movie.credits.cast.slice(0, 6);

    return (
        <div>
            <div className="relative h-[50vh] w-full">
                <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
            </div>

            <div className="px-4 -mt-16 relative z-10">
                <h1 className="font-display text-3xl">{movie.title}</h1>

                <div className="flex items-center gap-3 mt-2 text-on-surface-variant text-sm">
                    <div className="flex items-center gap-1 text-secondary">
                        <Star size={14} fill="currentColor" />
                        <span>{movie.vote_average.toFixed(1)}</span>
                    </div>
                    <span>{movie.release_date?.slice(0, 4)}</span>
                    <span>{movie.runtime} min</span>
                </div>

                <div>
                    {movie.genres.map((genre) => (
                        <span key={genre.id}
                        className="px-3 py-1 rounded-full bg-surface-container-high text-xs text-on-surface-variant">
                            {genre.name}
                        </span>
                    ))}
                </div>

                <p className="mt-4 text-on-surface-variant leading-relaxed">
                    {movie.overview}
                </p>

                {director && (
                    <p className="mt-4 text-sm">
                        <span className="text-on-surface-variant">
                            Director:
                        </span>
                        {director.name}
                    </p>
                )}

                <h2 className="text-lg font-semibold mt-6 mb-3 ">Cast</h2>
                <div className="flex gap-4 overflow-x-auto scroll-hide">
                    {topCast.map((person) => (
                        <div key={person.id} className="min-w-[90px] text-center">
                            <div className="w-[90px] h-[90px] rounded-full overflow-hidden bg-surface-container-high mb-2">
                                {person.profile_path && (
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} 
                                        alt={person.name}
                                        className="w-full h-full object-cover" />
                                )}
                            </div>
                            <p className="text-xs truncate">{person.name}</p>
                            <p className="text-xs text-on-surface-variant truncate">{person.character}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}