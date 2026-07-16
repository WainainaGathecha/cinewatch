const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getPopularMovies() {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    return data.results;
    
}

export async function getTrendingMovie() {
    const response = await fetch(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch trending movie");
    }

    const data = await response.json();
    return data.results[0];
}