import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Search.module.css";
import React from "react";


const Search = () => {
  const [state, setstate] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(state);
    if (state === "") return;
  };

  return (
    <form className={classes["Search"]} onSubmit={submitHandler}>
      <input
        type="text"
        value={state}
        onChange={(event) => setstate(event.target.value)}
        placeholder="Search Category Here... pizza,streak,drinks etc."
        className={classes["Search-input"]}
      />
      <Link
        to={`/${state}/popular`}
        className={classes["Search-icon"]}
        style={state === "" ? { pointerEvents: "none" } : null}
      >
        <i className="fas fa-search"></i>
      </Link>
    </form>
  );
};
export default Search;
