import React from "react";
import ActorCard from "../ActorsCard/ActorCard";

const ActorsListPage = ({ movies }) => {
  let actorsArr = [];
  movies.forEach((movie) => {
    actorsArr = actorsArr.concat(movie.cast);
  });
  const actorsSet = new Set(actorsArr);
  const uniqueActorArr = Array.from(actorsSet);
  const actorListItem = uniqueActorArr.map((actor, idx) => {
    <ActorCard actor={actor} index={idx} key={idx} />;
  });
  return <div className="actors-list">{actorListItem}</div>;
};

export default ActorsListPage;
