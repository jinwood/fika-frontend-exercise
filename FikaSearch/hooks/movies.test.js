import { mapGenresToMovies } from "./movies";

describe("movies", () => {
  describe("mapGenresToMovies", () => {
    it("works", () => {
      const genres = [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Horror",
        },
        {
          id: 3,
          name: "Thriller",
        },
        {
          id: 4,
          name: "Comedy",
        },
        {
          id: 5,
          name: "Documentary",
        },
      ];

      const movies = {
        adult: false,
        backdrop_path: "/lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg",
        genre_ids: [1, 2, 3, 4],
        id: 590223,
        original_language: "en",
        original_title: "Love and Monsters",
        overview:
          "Seven years after the Monsterpocalypse, Joel Dawson, along with the rest of humanity, has been living underground ever since giant creatures took control of the land. After reconnecting over radio with his high school girlfriend Aimee, who is now 80 miles away at a coastal colony, Joel begins to fall for her again. As Joel realizes that there’s nothing left for him underground, he decides against all logic to venture out to Aimee, despite all the dangerous monsters that stand in his way.",
        popularity: 215.34,
        poster_path: "/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg",
        release_date: "2020-10-16",
        title: "Love and Monsters",
        video: false,
        vote_average: 7.6,
        vote_count: 404,
      };
      const expectedResult = [
        {
          ...movies,
          genres: ["Action", "Horror", "Thriller", "Comedy"],
        },
      ];

      const result = mapGenresToMovies({ results: [movies], genres });

      expect(result).toEqual(expectedResult);
    });
  });
});
