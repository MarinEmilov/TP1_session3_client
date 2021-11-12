import React from "react";
import "../App.css";
import {Spring} from "react-spring";

function Grid({ grid }) {
  
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {(props) => (
        <div style={props} class="col-xl-6 ">
          {grid.map((line, y) => {
            return line.map((col, x) => {
              return <span style={c1Style}></span>;
            });
          })}
        </div>
      )}
    </Spring>

  )};

const c1Style = {
  background: "red",
  color: "white",
  
};

export default Grid;
