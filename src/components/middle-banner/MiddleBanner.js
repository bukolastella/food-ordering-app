import React from "react";
import classes from "./MiddleBanner.module.css";
import MiddleLetters from "./MiddleLetters";
import VerticalDash from "./VerticalDash";
import Img from "../../assets/ismael-trevino-uh0zvg5VjlA-unsplash.jpg";

const MiddleBanner = () => {
  return (
    <div
      className={classes.MiddleBanner}
      style={{
        backgroundImage: `url(${Img})`,
        backgroundPosition: "50% 80%",
        backgroundColor: "rgba(98, 98, 131, 0.9)",
        backgroundBlendMode: "multiply",
      }}
    >
      <MiddleLetters className={classes.Flex}>
        <span>foodie</span>
        <span>fresh food snacks</span>
      </MiddleLetters>
      <div className={classes["Flex-end"]}>
        {/* <VerticalDash /> */}
        <MiddleLetters className={classes.Last}>
          <span>24</span>
          <span>total item</span>
        </MiddleLetters>
        <VerticalDash />
        <MiddleLetters className={classes.Last}>
          <span>06</span>
          <span>category</span>
        </MiddleLetters>
        <VerticalDash />
        <MiddleLetters className={classes.Last}>
          <span>04</span>
          <span>outlate</span>
        </MiddleLetters>
      </div>
    </div>
  );
};

export default MiddleBanner;
