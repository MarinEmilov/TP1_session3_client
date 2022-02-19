import React, { Component } from "react";
import "../App.scss";
import MonBoard from "./Grille.js";
import MonBoard2 from "./Grille2";
import "bootstrap/dist/css/bootstrap.min.css";

import Flotte from "./Flotte";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

class Jeu extends Component {
  render() {
    return (
      <div className="container-jeu">
        <DndProvider backend={HTML5Backend}>
          <header className="container fluid text-center">
            <h1> BATAILLE NAVALE </h1>
          </header>
          <div className="container">
            <div className="main">
              <Flotte />
              <MonBoard />
              <br />
              <MonBoard2 />
            </div>
          </div>
        </DndProvider>
      </div>
    );
  }
}

export default Jeu;
