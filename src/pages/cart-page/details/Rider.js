import React from "react";
import IconDetails from "./IconDetails";
import classes from "./Rider.module.css";

const Rider = () => {
  return (
    <IconDetails icon={<i className="fas fa-phone-alt"></i>}>
      <div className={classes.grid}>
        <div className={classes.choose}>rider information</div>
        <span className={classes.ride}>
          <i className="fas fa-biking "></i>
        </span>
        <span className={classes.mark}>mark alex</span>
        <span className={classes.age}>age: 22</span>
      </div>
    </IconDetails>
  );
};

export default Rider;
