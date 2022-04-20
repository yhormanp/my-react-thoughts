import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie) => {
        return <MovieCard key={movie.uniqueID} movie={movie} />;
      })}
    </>
  );
}

export default MovieList;
