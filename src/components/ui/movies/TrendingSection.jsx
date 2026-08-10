import { useQuery } from "@tanstack/react-query";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import { getTrendingMovies } from "@/lib/tmdb";

export default function TrendingSection() {
    const { data: movies, isLoading, error } = useQuery({
        queryKey: ["movies", "trending", "day"],
        queryFn: getTrendingMovies,
    });

    if (isLoading) return <p className="px-4 text-on-surface-variant">Loading...</p>;
    if (error) return <p className="px-4 text-red-400">{error.message}</p>

    const rowMovies = movies.slice(1);

    return (
        <section className="mt-8">
            <div className="flex justify-between items-end px-4 mb-4">
                <h3 className="font-display text-xl text-primary">Trending</h3>
                <a href="#" className="text-xs text-primary uppercase tracking-wider">
                    See All
                </a>
            </div>

            <div className="flex gap-4 overflow-x-auto px-4">            
                {movies.map((movie) => (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <MovieCard
                        key={movie.id}
                        title={movie.title}
                        rating={movie.vote_average.toFixed(1)}
                        posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}