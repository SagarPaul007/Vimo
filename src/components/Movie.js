import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.img} alt="" />
      <div className="movie-details">
        <p className="movie-title">
          {movie.title}, {movie.year}
        </p>
        <div className="movie-links">
          <a href={movie.firstLink} className="first-link">
            {movie.firstTitle}{" "}
          </a>
          <a href={movie.secondLink} className="second-link">
            {movie.secondTitle}
          </a>
          <a href={movie.thirdLink} className="first-link">
            {movie.thirdTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
