import React from "react";
import Add from "./Add";
import Display from "./Display";
import classes from "./Main.module.css";

const Main = (props) => {
  async function addDataHandler(data) {
    const response = await fetch(
      "https://task-445fe-default-rtdb.firebaseio.com//data.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    window.location.reload(true);
  }

  return (
    <>
      <div>
        <Add onAddData={addDataHandler} />
      </div>

      <Display />
    </>
  );
};

export default Main;
