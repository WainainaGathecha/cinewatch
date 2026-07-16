import MovieCard from "./MovieCard";

export default function PopularSection({ movies }) {
    return (
        <section className="mt-8">
            <div className="flex justify-between items-end px-4 mb-4">
                <h3 className="font-display text-xl">Popular</h3>
                <a href="#" className="text-xs text-primary uppercase tracking-wider">
                    See All
                </a>
            </div>

            <div className="flex gap-4 overflow-x-auto px-4">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        title={movie.title}
                        posterUrl={movie.posterUrl}
                        rating={movie.rating}
                    />
                ))}
            </div>
        </section>
    );
}