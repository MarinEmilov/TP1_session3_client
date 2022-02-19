import "../Accueil.scss";

export default function Accueil() {
  return (
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-8">
        <h1 className="container-fluid text-center">Mon super BattleShip</h1>
        <p className="text_acceuil">
          Règles La bataille navale oppose deux joueurs. Chaque joueur dispose
          de deux grilles carrées de côté 10, dont les lignes sont numérotées de
          1 à 10 et les colonnes de A à J, ainsi que d'une flotte composée de
          quelques bateaux d'une à cinq cases de long. L'une des grilles
          représente la zone contenant sa propre flotte. Au début du jeu, chaque
          joueur place ses bateaux sur sa grille, en s'assurant que deux bateaux
          ne sont pas adjacents. L'autre représente la zone adverse, où il
          cherchera à couler les bateaux de son adversaire. Chaque joueur, à son
          tour, annonce une case (par exemple « B6 »), et son adversaire lui
          répond si le tir tombe à l'eau ou au contraire s'il touche un bateau.
          Dans ce dernier cas, il annonce « touché » s'il reste des cases
          intactes au bateau ciblé, et « touché-coulé » si non6. Diverses
          variantes existent, par exemple le fait de tirer les coups par salves
          et de ne donner que le résultat global de la salve
        </p>
      </div>
    </div>
  );
}
