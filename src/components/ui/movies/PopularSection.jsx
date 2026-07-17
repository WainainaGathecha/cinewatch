import { useQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import { getPopularMovies } from "@/lib/tmdb";

export default function PopularSection() {
    const { data: movies, isLoading, error } = useQuery({
        queryKey: ["movies", "popular"],
        queryFn: getPopularMovies,
    });

    if (isLoading) return <p className="px-4 text-on-surface-variant">Loading...</p>;
    if (error) return <p className="px-4 text-red-400">{error.message}</p>

    return (
        <section className="mt-8">
            <div className="flex justify-between items-end px-4 mb-4">
                <h3 className="font-display text-primary text-xl">Popular</h3>
                <a href="#" className="text-xs text-primary uppercase tracking-wider">
                    See All
                </a>
            </div>

            <div className="flex gap-4 overflow-x-auto px-4">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        rating={movie.vote_average.toFixed(1)}
                        posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                ))}
            </div>
        </section>
    );
}