import React, { useEffect, useState } from "react";

function Movie() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=f762b10570be25ef2fa76e98adf6391e"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((err) => console.error("Error fetching movies:", err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);

  return (
    <div>
      {movieList.map((movie) => (
        <img
          style={{ width: "300px" }}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  );
}

export default Movie;
