import { useQuery } from "react-query";
import { fetchWrapper } from "../util/fetch";
import { useComposeQueries, useQueryPipeline } from "./query";

const useMovies = () =>
  useQuery("fetchMovies", () =>
    fetchWrapper.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1"
    )
  );

const useGenres = () =>
  useQuery("fetchGenres", () =>
    fetchWrapper.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US"
    )
  );

export const mapGenresToMovies = ({ results, genres }) => {
  return results.map((movie) => {
    const genreMatch = [];
    genres.filter((genre) => {
      if (movie.genre_ids.includes(genre.id)) {
        genreMatch.push(genre.name);
      }
    });
    return {
      ...movie,
      genres: genreMatch,
    };
  });
};

export const useMoviesGenres = useQueryPipeline(
  useComposeQueries(useMovies, useGenres),
  mapGenresToMovies
);
