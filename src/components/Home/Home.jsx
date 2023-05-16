/**
 * @module Home
 */

import React from "react";
import { Link } from "react-router-dom";
import pokebola from "../../assets/pokebola.png";

const Home = () => {
  return (
    <header className="App-header">
      <img className="App-logo" alt="logo" src={pokebola} />
      <h1>Centro Pokemon de Ash</h1>
      <Link to="/formularioIngreso" className="boton-ingreso">
        Ingresar pokemon
      </Link>
      <p>Ezequiel Melogno, 
        Jazmín Maldonado, 
        Daniela Fernanda Pipke, 
        Pablo Alvarez, 
        Damián Dellacqua, 
        Matias Aplanalp, 
        María de los Ángeles Cavallo Mayolas, 
        Sergio Nicolás Guerrero, 
        Fernanda Rodriguez, 
        Barbara Perdomo, 
        Ignacio Lopez</p>
    </header>
  );
};

export default Home;
