import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Search.module.css";
import React from "react";

const Search = () => {
  const [state, setstate] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(state);
    setstate("");
    if (state === "") return;
  };

  return (
    <form className={classes["Search"]}>
      <input
        type="text"
        value={state}
        onChange={(event) => setstate(event.target.value)}
        placeholder="Search Category Here  e.g. pizza,streak,drinks etc."
        className={classes["Search-input"]}
      />
      <span onClick={submitHandler}>
        <Link
          to={`/${state.toLowerCase()}/popular`}
          className={classes["Search-icon"]}
          style={state === "" ? { pointerEvents: "none" } : null}
        >
          <i className="fas fa-search"></i>
        </Link>
      </span>
    </form>
  );
};
export default Search;
