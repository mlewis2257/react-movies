import { useParams } from "react-router-dom";
import React from "react";

const MovieDetailPage = ({ movies }) => {
  let { moviename } = useParams();
  console.log("movieName");
  let movie = movies.find((m) => m.title === moviename);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h4>Released: {new Date(movie.releaseDate).toLocaleDateString()}</h4>
      <h3>Cast: </h3>
      <ul>
        {movie.cast.map((actor) => {
          return <li key={actor}>{actor}</li>;
        })}
      </ul>
      <img src={`${movie.posterPath}`} alt={`${movie.title}`} />
    </div>
  );
};

export default MovieDetailPage;
