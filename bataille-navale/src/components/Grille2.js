import React, {useState} from 'react';
import "../App.css";



function Grid2({ grid }) {
  return (
    <div class="col-xl-6 ">
      {grid.map((line, y) => {
        return line.map((col, x) => {
          
          return <span style={c1Style} onClick={c2Style}></span>;
        });
      })}
    </div>
  );
 
    
  
}
const c1Style = {
  background: "steelblue",
  color: "white",
};
const c2Style = {
  background: "black",
  color: "white",
};



export default Grid2;

