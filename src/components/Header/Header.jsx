
import { useState } from "react";

import '../Header/Header.css'

import Navbar from "../Navbar/Navbar"

import { FaPhone } from "react-icons/fa6"

import { FaBars } from "react-icons/fa6"


function Header() {
     const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    console.log('clicado')
    setMenuActive(!menuActive);
  };

    return(
        <header className="header">
            <h1>CalouroApoio</h1>
            <button className="menu" onClick={toggleMenu}><FaBars /></button>
            <Navbar menuActive={menuActive} />
            <div className="Faleconosco">
                 <FaPhone className="icone" />
                 <a href="#">Fale Conosco</a>
            </div>
        </header>

    )
    
}


export default Header