import React, { useState, useEffect } from "react";
import Theme from "./theme";

export default (props) => {
  const style = {
    // background:'#bbb',
    boxShadow: "0px 0px 33px 19px rgba(0,0,0,0.05)",
    margin: "30px",
    padding: "10px",
    borderRadius: "10px",
  };

  const t = React.useContext(Theme);

  return (
    <div style={style}>
      <h2>COMPO-2 : {props.title}</h2>
      {props.children}
      <button
        className="btn btn-success"
        onClick={() => {
          props.onAlert();
        }}
      >
        Alert
      </button>
      <br></br>
      <Theme.Consumer>
        {(theme) => (
          <span style={{ background: theme.background }}>
            Test useContext() from theme.jsx
            <p>
              Background : {t.background}, Foreground : {t.foreground}
            </p>
          </span>
        )}
      </Theme.Consumer>
    </div>
  );
};
