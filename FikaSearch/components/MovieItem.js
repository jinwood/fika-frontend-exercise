import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BASE_IMAGE_URL } from "../config";

export const MovieItem = ({ movie } = props) => {
  if (!movie) return null;
  const { item } = movie;
  const imageUrl = `${BASE_IMAGE_URL}${item.poster_path}`;

  return (
    <TouchableOpacity style={styles.wrapper}>
      <Text style={styles.textTitle}>{item.original_title}</Text>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      {item.genres.map((genre) => {
        return <Text key={genre}>{genre}</Text>;
      })}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 400,
  },
  wrapper: {
    marginBottom: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 600,
    height: 500,
  },
  textTitle: {
    fontSize: 26,
  },
});
