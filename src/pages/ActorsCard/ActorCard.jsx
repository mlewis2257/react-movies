import { Link } from "react-router-dom";
import "./ActorCard.css";
import React from "react";

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const ActorCard = ({ actor }) => {
  let num = randNum(200, 500);
  return (
    <Link to={`/actors/${actor}`}>
      <div
        className="actorCard"
        style={{
          backgroundImage: `url(https://picsum.photos/${num}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1>{actor}</h1>
        </div>
      </div>
    </Link>
  );
};

export default ActorCard;
