import { useState } from "react";
import MovieListPage from "../MovieListPage/MovieListPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorsListPage from "../ActorsListPage/ActorsListPage";
import { movies } from "../../data";
import NavBar from "../../components/NavBar/NavBar";
import LoginPage from "../LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<MovieListPage movies={movies} />} />
            <Route
              path="/movie/:moviename"
              element={<MovieDetailPage movies={movies} />}
            />
            <Route
              path="/actors"
              element={<ActorsListPage movies={movies} />}
            />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          </Routes>
        </>
      )}
    </main>
  );
}

export default App;
