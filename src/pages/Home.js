import React, { useState, useEffect } from "react";

// components
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Movies from "../components/Movies";

const axios = require("axios");
const cheerio = require("cheerio");

const Home = () => {
  const [justLoaded, setJustLoaded] = useState(true);
  const [found, setFound] = useState("");
  const [hide, setHide] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [allMovies, setAllMovies] = useState([]);
  const [gif, setGif] = useState(
    "https://media.giphy.com/media/LITTI5SuHLpu9hvdFL/giphy.gif"
  );

  // get download link of a movie
  const getData = async (link) => {
    let movie = {};

    await axios.get(link).then(async ({ data }) => {
      const $ = await cheerio.load(data);

      const title = $("#mobile-movie-info > h1").text();
      const year = $("#mobile-movie-info > h2:nth-child(2)").text();
      const img = $("#movie-poster > img").attr("src");

      //   first link
      const firstTitle = $(
        "#movie-info > div.bottom-info > p > a:nth-child(1)"
      ).text();
      const firstLink = $(
        "#movie-info > div.bottom-info > p > a:nth-child(1)"
      ).attr("href");

      // second link
      const secondTitle = $(
        "#movie-info > div.bottom-info > p > a:nth-child(2)"
      ).text();
      const secondLink = $(
        "#movie-info > div.bottom-info > p > a:nth-child(2)"
      ).attr("href");

      // third link
      const thirdTitle = $(
        "#movie-info > div.bottom-info > p > a:nth-child(3)"
      ).text();
      const thirdLink = $(
        "#movie-info > div.bottom-info > p > a:nth-child(3)"
      ).attr("href");

      movie = {
        title,
        year,
        img,
        firstTitle,
        firstLink,
        secondTitle,
        secondLink,
        thirdTitle,
        thirdLink,
      };
    });

    return movie;
  };

  // Get all the links of a movie from yts
  const yts = async (movie_name) => {
    const links = [];

    await axios
      .get(`https://yts.mx/browse-movies/${movie_name}/all/all/0/latest/0/all`)
      .then(async (res) => {
        const $ = await cheerio.load(res.data);

        //   looping over all movies
        $(".browse-movie-wrap").each(async (index, item) => {
          const link = $(item).children("a").attr("href");
          links[index] = link;
        });
      });

    return links;
  };

  // Effect
  useEffect(() => {
    const download = async (name) => {
      const movies = [];
      // movie links
      const links = await yts(name);

      // getting all download links
      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        movies.push(await getData(link));
      }

      // console.log(movies);
      return movies;
    };

    const name = searchText;

    (async () => {
      // showing results
      const results = await download(name);

      if (justLoaded) {
        setJustLoaded(false);
      } else if (results.length === 0) {
        setFound("No results found ... Please check your movie name!!!");
        setGif("");
      } else {
        setFound("");
        setAllMovies(results);
        console.log(results);
        setGif("");
      }
    })();
  }, [searchText]);
  return (
    <>
      <Navbar />
      <Search
        setGif={setGif}
        setFound={setFound}
        setHide={setHide}
        searchText={searchText}
        setSearchText={setSearchText}
        setAllMovies={setAllMovies}
      />
      <Movies
        gif={gif}
        found={found}
        searchText={searchText}
        hide={hide}
        allMovies={allMovies}
      />
    </>
  );
};

export default Home;
