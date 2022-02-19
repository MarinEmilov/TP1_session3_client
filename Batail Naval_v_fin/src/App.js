import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil.js";
import APropos from "./pages/apropos.js";
import Login from "./pages/login.js";
import Chat from "./pages/chat.js"
import Navbar from "./components/Navbar.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Jeu from "./components/jeu.js";
import { AuthContext } from "./components/AuthContext.js";
import { createContext, useState } from "react";

// Regle route !!!
function App() {
  const [auth, setAuth] = useState({ isAuth: false, token: null });

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      <div className="wrapper">
        <div>mon token:{auth.token}</div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/" element={<Accueil />} />
            <Route path="/jeu" element={<Jeu />} />
            <Route path="/newjeu" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
