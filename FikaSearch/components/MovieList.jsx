import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useMoviesGenres } from "../hooks/movies";
import { MovieItem } from "./MovieItem";

export const MovieList = () => {
  const { data, isLoading } = useMoviesGenres();
  if (!data) return null;
  return (
    <>
      {isLoading && <Text>Loading</Text>}
      {!isLoading && (
        <FlatList
          data={data}
          keyExtractor={(movie) => movie.id}
          renderItem={(movie) => <MovieItem movie={movie} />}
        />
      )}
    </>
  );
};
