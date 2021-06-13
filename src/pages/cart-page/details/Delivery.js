import React, { useState, useEffect } from "react";
import IconDetails from "./IconDetails";
import classes from "./Delivery.module.css";
const Delivery = (props) => {
  const [state, setstate] = useState("");
  useEffect(() => {
    if (state === "") {
      props.enable(false);
      return;
    }
    props.enable(true);
  }, [state, props]);
  const z = state === "" ? { border: "1px solid red" } : null;
  return (
    <IconDetails icon={<i className="fas fa-pen-fancy"></i>}>
      <div className={classes.grid}>
        <div className={classes.deli}>delivery address</div>
        <span>
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <input
          type="text"
          value={state}
          className={classes.grid}
          style={z}
          onChange={(event) => setstate(event.target.value)}
          placeholder="Type in your delivery address"
        />
      </div>
    </IconDetails>
  );
};

export default Delivery;
