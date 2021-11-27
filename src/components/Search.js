import React, { useState } from "react";

const Search = ({
  setGif,
  setFound,
  searchText,
  setSearchText,
  setHide,
  setAllMovies,
}) => {
  // State
  const [Text, setText] = useState("");

  // handler functions
  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await setFound("");
    if (searchText !== Text.trim()) {
      await setAllMovies([]);
      setGif("https://media.giphy.com/media/txh88yJygPWC1q3rtd/giphy.gif");
    }
    await setSearchText(Text.trim());
    setHide(true);
  };

  return (
    <div className="search">
      <form>
        <label>Movie Name :</label>
        <input
          value={Text}
          onChange={changeHandler}
          className="input"
          type="text"
          placeholder="e.g. Pirates of the Caribbean"
        ></input>
        <button onClick={submitHandler} className="btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
