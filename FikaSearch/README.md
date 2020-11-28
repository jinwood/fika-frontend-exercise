# FikaSearch Submission - Julian Inwood

Hi, thanks for taking the time to review my tech test submission for Fika.

This was my first time using react-native, so I have spent most of my time writing utils and tests for demonstrating my abilities. The app frontend is minimal and where I would invest more time if it were available.

<img src="https://github.com/jinwood/fika-frontend-exercise/blob/master/FikaSearch/demo.gif" height="200"/>

My approach was to write a higher order hook `useMoviesGenres`, that returns a set of data from the two apis provided. Within the hook there are three functions `useComposeQueries`, `useQueryPipelines` and `mapGenresMovies`.

`useComposeQueries` takes n functions, calls each of them, and then returns a result object containing the resulting loading state, and any data if available.

`useQueryPlugins` takes a query function and n functions, checks if the query function has finished loading and has data, and passes that data to each function given to it, in this case `mapGenresToMovies`.

`mapGenresToMovies` is our business logic piece. Takes a list of movies and a list of genres and pulls the genre names into each movie.

The code is written in a modular, testable way. The queries are pure functions with no external dependencies.

There are no tests to cover components as they are effectivley dumb and will only render differently if the data changes.

Given more time, I would handle error states, add polish to the UI and test a few more edge cases. If this was a production app, I would have writted it using TypeScript.

I built and ran the app using `expo`. Run steps are

- clone the repo and run `yarn`
- run `expo start`

The app was tested on my iPhone 11.
