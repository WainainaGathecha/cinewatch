import { getPopularMovies, getTrendingMovies  } from "@/lib/tmdb";

export const CATEGORIES = {
    popular: {
        title: "Popular Movies",
        subtitle: "What everyone's watching right now",
        queryKey: "popular",
        fetcher: getPopularMovies,
    },
    trending: {
        title: "Trending this week",
        subtitle: "Climbing fast over the last seven days",
        queryKey: "trending",
        fetcher: getTrendingMovies,
    },
};