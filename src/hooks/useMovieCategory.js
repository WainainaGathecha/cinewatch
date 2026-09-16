import { useInfiniteQuery } from "@tanstack/react-query";
import { getPopularMoviesPaged, getTrendingMoviesPaged } from "@/lib/tmdb";

const CATEGORY_CONFIG = {
    popular: {
        title: "Popular Movies",
        fetcher: getPopularMoviesPaged,

    },
    trending: {
        title: "Trending Today",
        fetcher:getTrendingMoviesPaged,
    },
};

export function useMovieCategory(slug) {
    const config = CATEGORY_CONFIG[slug];

    const query = useInfiniteQuery({
        queryKey: ["category", slug],
        queryFn: config.fetcher,
        initialPageParam: 1,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.total_pages
                ? lastPage.page + 1
                : undefined,
        enabled: Boolean(config),
    });

    //flatten all fetched pages into  a single array
    const movies = query.data?.pages.flatMap((page) => page.results) ?? [];

    return {
        ...query,
        movies,
        config,
        isValidCategory: Boolean(config),
    };
}