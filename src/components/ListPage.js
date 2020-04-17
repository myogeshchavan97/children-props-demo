import React from "react";
import movies from "../utils/movies";
import ListItem from "./ListItem";

const ListPage = () => {
  return (
    <div className="movies">
      {movies.map((movie) => (
        <ListItem
          key={movie.id}
          title={movie.title}
          director={movie.director}
          posterUrl={movie.posterUrl}
        />
      ))}
    </div>
  );
};

export default ListPage;
