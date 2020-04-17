import React from "react";
import movies from "../utils/movies";
import MovieItem from "./MovieItem";

const HomePage = () => {
  return (
    <div className="movies">
      {movies.slice(0, 6).map((movie) => (
        <MovieItem
          key={movie.id}
          title={movie.title}
          director={movie.director}
          posterUrl={movie.posterUrl}
        />
      ))}
    </div>
  );
};

export default HomePage;
