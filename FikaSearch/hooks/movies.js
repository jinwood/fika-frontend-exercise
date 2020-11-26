import { useQuery } from "react-query";
import { fetchWrapper } from "../util/fetch";

export const useMovies = () => {
  const { data, isLoading } = useQuery("fetchMovies", () => fetchMovies());

  return {
    data,
    isLoading,
  };
};

export const useGenres = () => {
  const { data, isLoading } = useQuery("fetchGenres", () => fetchGenres());

  return {
    data,
    isLoading,
  };
};

export const useMoviesGenres = () => {
  const moviesData = useMovies();
  const genresData = useGenres();

  if (moviesData.isLoading || genresData.isLoading) return { isLoading: true };

  const movies = moviesData.data.results;
  const genres = genresData.data.genres;

  const result = movies.map((movie) => {
    const genreMatch = [];
    genres.filter((genre) => {
      if (movie.genre_ids.includes(genre.id)) {
        console.log(genre.name);
        genreMatch.push(genre.name);
      }
    });
    return {
      ...movie,
      genres: genreMatch,
    };
  });

  return { data: result, isLoading: false };
};

const fetchMovies = async () => {
  const movies = await fetchWrapper.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1"
  );

  return movies;
};

const fetchGenres = () => {
  const genres = fetchWrapper.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US"
  );
  return genres;
};
