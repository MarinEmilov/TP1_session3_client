import React, { Component } from "react";
import "./App.css";
import Grid from "./components/Grille.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Pub from "./components/Pub.js";
import Grid2 from "./components/Grille2.js";
import Component1 from "./components/Component1";
import Flotte from "./components/Flotte";
import {DndProvider}from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend'


class App extends Component {
  state = {
    id: 1,
    grid: null,
    height: 10,
    width: 10,
  };

  buildGrid = () => {
    let grid = [];
    for (let y = 0; y < this.state.height; y++) {
      let line = [];
      for (let x = 0; x < this.state.width; x++) {
        line.push(0);
      }
      grid.push(line);
    }
    // console.log(grid)
    return grid;
  };
  initGame = () => {
    this.setState({ grid: this.buildGrid() });
  };

  componentDidMount() {
    this.initGame();
  }

  
  render() {
    return (
      <body>
       <DndProvider backend={HTML5Backend}>
        <header class="container fluid text-center">
          <h1>BATAILLE NAVALE</h1>
        </header>
        {/* <Navbar /> */}
        <div class="container">
        <Component1/>
          <div class="main">           
                <Flotte />
                {this.state.grid !== null && <Grid grid={this.state.grid} />}
                <br />
                {this.state.grid !== null && <Grid2 grid={this.state.grid} />}
              </div>
            </div>
        </DndProvider>
        <Pub />
      </body>
    );
  }
}

export default App;
