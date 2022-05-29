import React, { useRef, useEffect } from "react";
import classes from "./Country.module.css";
import { db } from "../firebase";
import { ref, remove } from "firebase/database";
const Country = (props) => {
  const deleteHandler = (id) => {
    remove(ref(db, "data/" + id));
  };

  return (
    <>
      <div className={classes.div}>
        <li className={classes.element}>
          <h2>
            {props.name}({props.phone})
          </h2>
          <a target="_blank" href={props.link} className={classes.link}>
            CLICK HERE TO VIEW FLAG
          </a>
          <br />
          <button
            className={classes.button}
            onClick={() => deleteHandler(props.id)}
          >
            DELETE
          </button>
        </li>
      </div>
    </>
  );
};

export default Country;
