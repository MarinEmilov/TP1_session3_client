import React, { useState } from "react";
import "../App.css";

import Image from "./Image";
import { useDrop } from "react-dnd";




const ImageFlotte = [
  {
    id: 1,
    url:"https://www.fetedujeu.org/wp-content/uploads/2018/02/bateau-touche-coule.png"
  },

  {
    id: 2,
    url: "https://www.larousse.fr/encyclopedie/data/images/1005827-Porte-avions_Clemenceau.jpg"
  },

  {
    id: 3,
    url: "https://img.freepik.com/vecteurs-libre/navire-militaire-cuirasse-vapeur-artillerie_101087-192.jpg?size=626&ext=jpg"
  },

  {
    id: 4,
    url: "https://i.pinimg.com/736x/0a/1f/ff/0a1fff60f6afc202f8302157a2d717fc--model-ships-paper-models.jpg"
  },

]





function Square() {

  const [board, setBoard] = useState([]);

  const [{isOver}, drop] = useDrop(() => ({
    accept:"image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
  }),
  }));

  const addImageToBoard = (id) => {
    const imageList = ImageFlotte.filter((image) => id == image.id);
    setBoard((board) => [...board, imageList[0]]);
  };




  const c1Style = {
    // backgroundColor: "steelblue",
    color: "white",
    
  };

  const c2Style = {
    backgroundColor: "red",
    color: "white",
  };

  const [color, setColor] = useState(c1Style);
  return (
    <>
      <span style={color} onClick={() => setColor(c2Style)} className="Board" ref={drop}>
        {board.map((image) => {
          return <Image url={image.url} id={image.id} />;          
        })}</span>
  
  </>);
}

function Grid({ grid }) {
  return (
    <div class="col-xl-6 ">
      {grid.map((line, y) => {
        return line.map((col, x) => {
          return <Square />;
        });
      })}
    </div>
  );
}

export default Grid;



















// import React, { useState } from "react";
// import "../App.css";
// import { useDrag, useDrop } from "react-dnd";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// function Card({ isDragging, color, stateClassName }) {
//   const [{ opacity }, dragRef] = useDrag(
//     () => ({
//       type: "CARD",
//       item: { color },
//       collect: (monitor) => ({
//         opacity: monitor.isDragging() ? 0.5 : 1,
//       }),
//     }),
//     []
//   );
//   return (
//     <div
//       ref={dragRef}
//       style={{ opacity, backgroundColor: color }}
//       className={"Card " + stateClassName}
//     >
//       {color}
//     </div>
//   );
// }

// function Square({ position, onDrop, stateCouleur }) {
//   const [{ isOver, canDrop }, drop] = useDrop(
//     () => ({
//       accept: "CARD",
//       drop: (item) => onDrop(position, item, stateCouleur),
//       collect: (monitor) => ({
//         isOver: !!monitor.isOver(),
//         canDrop: !!monitor.canDrop(),
//       }),
//     }),
//     [stateCouleur]
//   );

//   const c1Style = {
//     // backgroundColor: "blue",
//     color: "white",
//   };

//   const c2Style = {
//     backgroundColor: "red",
//     color: "white",
//   };

//   const [color, setColor] = useState(c1Style);
//   return <span style={color} onClick={() => setColor(c2Style)}></span>;
// }

// function Grid({ grid }) {
//   const [stateCouleurs, setCouleurs] = useState();

//   const DropItem = (position, item, stateCouleur) => {
//     let newState = stateCouleur.slice(0);
//     newState[position] = item.color;
//     console.log(newState);
//     setCouleurs(newState);
//   };

//   return (
//     <div class="col-xl-6 ">
//       {grid.map((line, y) => {
//         return line.map((col, x) => {
//           let id = x + col * 10;
//           let arraySquare = [];
//           return (
            
//             <Square
//               id={id}
//               position={id}
//               onDrop={DropItem}
//               color={stateCouleurs[id]}
//               stateCouleur={stateCouleurs}
//             />
//           );{<Board squares={arraySquare}/>}
          
//         });
//       })}
//       ;
//     </div>
//   );
// }

// function Board({squares}) {
//   return(
//     <DndProvider backend={HTML5Backend}>
//       <div className="Peintures">
//         <Card isDragging color="red" />
//         <Card isDragging color="blue"/>
//         <Card isDragging color="green"/>
//         <Card isDragging color="pink"/>
//       </div>
//       <div className="Board"> 
          
//       </div>
//       <table>{squares}</table></DndProvider>
//   );
// }

// export default Grid;
