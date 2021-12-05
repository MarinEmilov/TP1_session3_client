import React, { Component, useState } from "react";
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

function Flotte () {

  const [board, setBoard] = useState([]);

  const [{isOver}, drop] = useDrop(() => ({
    accept:"image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
  }),
  }));

  const addImageToBoard = (id) => {
    console.log(id);
  };  

    return(
      <>
        <div className="ImageFlotte">
          {ImageFlotte.map((image) => {
          return <Image url={image.url} id={image.id} />
         })}
        </div>
        {/* <div className="Board" ref={drop}>
          {board.map((image) => {
          return <Image url={image.url} id={image.id} />
        })}</div> */}

      </>
    )};
    export default Flotte;