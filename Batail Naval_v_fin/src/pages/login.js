import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";
import "../Login.scss";
import axios from "axios";
import { getElementError } from "@testing-library/react";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useContext(AuthContext);
  const [erreur, setStyleErr] = useState({ backgroundColor: "white" });

  const loginUser = () => {
    axios
      .post("http://104.248.104.227/login", { username, password })
      .then((response) => {
        setStyleErr({ backgroundColor: "green" });
        document.getElementById("Login").textContent = "Vous êtes connecté";
        let token = response.data.token;
        setAuth({ isAuth: true, token });
        setUserName("");
        setPassword("");
        // console.log(token);
      })
      .catch((err) => {
        setStyleErr({ backgroundColor: "aqua", color: "red" });
        setPassword("");
        setUserName("");
        document.getElementById("Login").textContent = "Veuillez réessayer";
        // console.log(err);
      });
  };

  const onInputChange = (event, setStateFct) => {
    setStateFct(event.target.value);
  };

  return (
    <div>
      <div className="text_acceuil">
        <p className="text-center bg-danger">Bataille Navale</p>
        <p>
          La bataille navale, appelée aussi touché-coulé, est un jeu de société
          dans lequel deux joueurs doivent placer des « navires » sur une grille
          tenue secrète et tenter de « toucher » les navires adverses. Le
          gagnant est celui qui parvient à couler (c'est-à-dire toucher toutes
          les cases) tous les navires de l'adversaire avant que tous les siens
          ne le soient. Le principe du jeu de bataille navale semble trouver son
          origine dans le jeu français L'Attaque1 lors de la Première Guerre
          mondiale. On a aussi trouvé des liens de parenté avec le jeu de E. I.
          Horseman en 1890 (Baslinda2) et on dit que des officiers russes y
          auraient joué antérieurement à la première guerre3. La première
          version commerciale du jeu fut publiée en 1931 par la Starex Novelty
          Co. sous le nom de Salvo4. Ce jeu est devenu populaire lors de son
          apparition en 1943 dans les publications américaines de divertissement
          de la Milton Bradley Company qui l'exploita sous la forme papier
          jusqu'en 1967, où elle sortit un jeu de plateau5, puis en réalisa une
          version électronique en 1977.
          <a
            href="https://fr.wikipedia.org/wiki/Bataille_navale_(jeu)"
            target="_blank"
          >
            Wikipedia
          </a>
        </p>
      </div>

      <div className="login-wrapper">
        <h1 style={erreur} id="Login">
          Please Log In
        </h1>
        <label>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(event) => onInputChange(event, setUserName)}
            placeholder="user"
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(event) => onInputChange(event, setPassword)}
            placeholder="password"
          />
        </label>

        <div>
          <button type="submit" onClick={() => loginUser()}>
            Submit
          </button>
        </div>
        <div className="paragrephe_login">
          <p>Attantion danger! age requis 12 ans et plus</p>
          <p>Version mobile aussi disponible</p>
        </div>
      </div>
    </div>
  );
}
