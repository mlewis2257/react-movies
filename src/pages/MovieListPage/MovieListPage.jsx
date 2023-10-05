import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import { movies } from "../../data";

const MovieListPage = ({ movies }) => {
  const moviesList = movies.map((movie, idx) => (
    <Link to={`/movie/${movie.title}`}>
      <MovieCard movie={movie} idx={idx} />
    </Link>
  ));
  return (
    <div>
      <h1>Movie List</h1>
      <div>{moviesList}</div>
    </div>
  );
};

export default MovieListPage;
