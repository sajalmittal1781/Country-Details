import React, { useRef, useState } from "react";
import classes from "./Add.module.css";

const Add = (props) => {
  const [name, setName] = useState(" ");

  const nameRef = useRef("");
  const phoneRef = useRef("");
  const linkRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      phone: phoneRef.current.value,
      link: linkRef.current.value,
    };

    props.onAddData(data);
  }
  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <div>
          <label>Name</label>
          <br />
          <input type="text" required ref={nameRef} className={classes.input} />
        </div>
        <br />

        <div>
          <label>Phone Code</label>
          <br />
          <input
            type="number"
            required
            ref={phoneRef}
            className={classes.input}
          />
        </div>
        <br />

        <div>
          <label>Flag URL</label>
          <br />
          <input type="url" required ref={linkRef} className={classes.input} />
        </div>
        <br />

        <div>
          <button className={classes.button}>SUBMIT</button>
        </div>
      </form>
    </>
  );
};

export default Add;
