import { Link } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    <>
      <Link to="/"> MovieListPage</Link> | <Link>ActorsListPage </Link>
    </>
  );
};

export default NavBar;
