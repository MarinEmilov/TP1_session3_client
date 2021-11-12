import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light text-center">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="https://cdn-icons-png.flaticon.com/128/3117/3117990.png"></img>
            </a>

            <div class="collapse navbar-collapse" id="navbarColor03">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://fr.wikipedia.org/wiki/Bataille_navale_(jeu)#:~:text=Chaque%20joueur%2C%20%C3%A0%20son%20tour,touch%C3%A9%2Dcoul%C3%A9%20%C2%BB%20si%20non."
                  >
                    regle de jeux
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    new
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    new
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Separated link
                    </a>
                  </div>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-sm-2"
                  type="text"
                  placeholder="Search"
                />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
