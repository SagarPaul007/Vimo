import React from "react";

// components
import Movie from "./Movie";

const Movies = ({ gif, found, searchText, hide, allMovies }) => {
  return (
    <div className="container">
      <div className={hide ? "hide" : "disclaimer"}>
        <p>
          Type the movie name correctly. Sometimes it takes around 5-6 seconds
          to get the download links. You can also specify release year after the
          movie name. <br /> <br /> Here you can browse and download YIFY movies
          in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest
          file size.
          <br />
          <br />
          This project was just for fun. <span>I do not promote piracy.</span>
        </p>
      </div>

      <img className="gif" src={gif} alt="" />

      <div className={hide ? "search-msg" : "hide"}>
        Search results for <span>"{searchText}"</span>
      </div>

      <div className="not-found">
        <span>{found === "" ? "" : found}</span>
      </div>

      <div className="movies">
        {allMovies.map((movie) => (
          <Movie key={movie.img} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
