import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import { Search, SearchX, ChevronRight } from "lucide-react";
import {useDebounce} from "@/hooks/useDebounce"
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {searchMovies} from "@/lib/tmdb";
import SearchResultCard from "@/components/ui/movies/SearchResultCard";

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);
    const [recentSearches, setRecentSearches] = useLocalStorage("recentSearches", []);

    const { data: movies, isLoading, error} = useQuery({
        queryKey: ["movies", "search", debouncedQuery],
        queryFn: async () => {
            const results = await searchMovies(debouncedQuery);
            addToRecent(debouncedQuery);
            return results;

        },
        enabled: debouncedQuery.trim().length > 0,
    });

    function addToRecent(term) {
        setRecentSearches((prev) => {
            const withoutDupes = prev.filter((s) => s.toLowerCase() !== term.toLowerCase());
            return [term, ...withoutDupes].slice(0, 6);

        });
    }

    function handleChipClick (term) {
        setQuery(term);
    }

    const isSearching = debouncedQuery.trim().length > 0;

    return(
        <div className="px-4 pt-4">
            <div className="relative group">
                <Search className="absolute left-4 top1/2 -translate-y-1/2 text-on-surface-variant transition-colors group-focus-within:text-primary" size={20}/>
                <input
                    type="text"
                    value="{query}"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Movies, actors or directors..."
                    className="w-full h-14 bg-surface-container-high rounded-xl pl-12 pr-4 outline-none focus:ring-offset-primary-container transition-all placeholder:text-on-surface-variant/50"
                />

            </div>

            {isSearching && recentSearches.length > 0 && (
                <section className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold">
                            Recent Searches
                        </h2>
                        <button onClick={()=> recentSearches([])} className="text-xs text-primary uppercase tracking-wider">
                            Clear
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {recentSearches.map((term) => (
                            <button key={term} onClick={()=>handleChipClick(term)} className="px-4 py-2 rounded-full bg-surface-container-highest border border-outline-variant text-sm text-on-surface-variant active:scale-95 transition-transform">
                                {term}
                            </button>
                        ))}
                    </div>
                </section>
            )}

            {isSearching && (
                <section className="mt-6">
                    {isLoading && <p className="text-on-surface-variant">Searching...</p>}
                    {error && <p className="text-red--400">{error.message}</p>}

                    {movies && movies.length > 0 && (
                        <>
                            <h2 className="text-lg font-semibold mb-3">
                                Top Results 
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                {movies.map((movie) => (
                                    <SearchResultCard
                                        key={movie.id}
                                        title={movie.title}
                                        rating={movie.vote_average.toFixed(1)}
                                        posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {movies && movies.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-4">
                                <SearchX size={32} className="text-on-surface-variant" />
                            </div>
                            <h3 className="text-lg font-semibold">
                                No results found
                            </h3>
                            <p className="text-on-surface-variant max-w-xs mt-2">
                                Oops! No Match. Try adjsuting your filters or browsing genres.
                            </p>
                            <div className="mt-6 w-full">
                                <h4 className="text-xs text-on-surface-variant mb-2 uppercase tracking-widest">
                                    Suggested Genres
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {["Documentary", "Independent"].map((genre) => (
                                        <button 
                                            key={genre}
                                            onClick={() => handleChipClick(genre)}
                                            className="p-4 rounded-xl glass-panel text-left flex items-center justify-between active:scale-95 transition-all"
                                        >
                                            <span className="text-sm">
                                                {genre}
                                            </span>
                                            <ChevronRight size={18} className="text-primary" />

                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            )}
        </div>
    );
}