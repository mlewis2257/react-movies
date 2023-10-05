import React from "react";

const MovieCard = ({ movie, idx }) => {
  return (
    <div className="movie_card">
      <img src={movie.posterPath} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.releaseDate}</p>
    </div>
  );
};

export default MovieCard;
