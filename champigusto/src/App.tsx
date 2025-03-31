import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ChampiList from "./components/ChampiList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <nav className="navbar">
          <img
            src="src\assets\image\champigustologo.png"
            alt="champigusto"
            className="champigustologo"
          />
        </nav>
        <h1 className="title">ChampiGusto</h1>
        {/* <input className="searchbox" type="search" /> */}
        <ChampiList />
      </header>
    </>
  );
}

export default App;
//faire fausse données, dossier components, styles etc..
//Dossier mock(false data), crée un fichier avec des fausses données, faux objets, tableaux de champignons, champignons avec toute les propriétés
//const mushroom list (ce mushroom list sera probablement un tableau d'objet)
//Plusieurs propriétés const = {
//                              name.blabla}
//rendre ces fausses données accessible
//mock.ts
