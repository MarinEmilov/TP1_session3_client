import React, { useState } from "react";
import "../App.css";


function Square() {
  const c1Style = {
    backgroundColor: "blue",
    color: "white",
  };

  const c2Style = {
    backgroundColor: "black",
    color: "white",
  };

  const [color, setColor] = useState(c1Style);
  return <span style={color} onClick={() => setColor(c2Style)}></span>;
}



function Grid({ grid }) {
  
  return (
    <div class="col-xl-6 ">       
          {grid.map((line, y) => {
            return line.map((col, x) => {
              return <Square/>;
            });
          })}
        </div>
      );
    } 

  
export default Grid;
