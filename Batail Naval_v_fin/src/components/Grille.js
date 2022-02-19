import React, { useState } from "react";
import "../jeu.scss";
import Image from "./Image";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ImageFlotte = [
  {
    id: 1,
    url: "https://www.fetedujeu.org/wp-content/uploads/2018/02/bateau-touche-coule.png",
  },

  {
    id: 2,
    url: "https://www.larousse.fr/encyclopedie/data/images/1005827-Porte-avions_Clemenceau.jpg",
  },

  {
    id: 3,
    url: "https://img.freepik.com/vecteurs-libre/navire-militaire-cuirasse-vapeur-artillerie_101087-192.jpg?size=626&ext=jpg",
  },

  {
    id: 4,
    url: "https://i.pinimg.com/736x/0a/1f/ff/0a1fff60f6afc202f8302157a2d717fc--model-ships-paper-models.jpg",
  },
];

function Square({ position, onDrop, color, stateCouleur }) {
  const [board, setBoard] = useState([]);
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "image",
      drop: (item) => addImageToBoard(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [stateCouleur]
  );

  const addImageToBoard = (id) => {
    const imageList = ImageFlotte.filter((image) => id == image.id);
    setBoard((board) => [...board, imageList[0]]);
  };

  return (
    <td
      className="Square"
      style={{ backgroundColor: isOver ? "black" : color }}
      ref={drop}
    >
      {board.map((image) => {
        return <Image url={image.url} id={image.id} />;
      })}
    </td>
  );
}

const size = 9;

function MonBoard() {
  const [stateCouleurs, setCouleurs] = useState(Array(size * size).fill(null));

  const DropItem = (position, item, stateCouleur) => {
    let newState = stateCouleur.slice(0);
    newState[position] = item.color;
    console.log(newState);
    setCouleurs(newState);
  };

  let arraySquare = [];
  for (let y = 0; y < size; y++) {
    let ligneSquare = [];
    for (let x = 0; x < size; x++) {
      let id = x + y * size;
      ligneSquare.push(
        <Square
          id={id}
          position={id}
          onDrop={DropItem}
          color={stateCouleurs[id]}
          stateCouleur={stateCouleurs}
        />
      );
    }
    const row = <tr>{ligneSquare}</tr>;
    arraySquare.push(row);
  }

  return <div className="App">{<Board squares={arraySquare} />}</div>;
}

function Board({ squares }) {
  return (
    <DndProvider backend={HTML5Backend}>
      {/* <div className="Peintures">
        <Card isDragging color="red" />
        <Card isDragging color="blue"/>
        <Card isDragging color="green"/>
        <Card isDragging color="pink"/>
      </div> */}
      {/* <div className="Board"> 
          
      </div> */}
      <table>{squares}</table>
    </DndProvider>
  );
}

export default MonBoard;
