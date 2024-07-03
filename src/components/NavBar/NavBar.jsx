import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

function NavBar() {
  /*const(siempre trabajaremos con constantes en react)[
  variable, función modificadora de variable] = useState(valor inicial de la variable) String , la convencion es que la funcion modificadora de la variable se le anteponga un set mas el nombre de la variable , todo junto con camelCase..lo primero es importar el hook a utilizar */
  const [menu, setmenu] = useState("tienda");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Mi Tienda En Linea</p>
        {menu}
      </div>
      <ul className="nav-menu">
        <li onClick={() => setmenu("tienda")}>
          Tienda
          {/* sintaxis de operador ternario: evaluador ? sicumple : siNoCumple 
          sintaxis operador AND : evaluador && sicumple la condicion*/}
        </li>
        <li onClick={() => setmenu("hombre")}>Hombre</li>
        <li onClick={() => setmenu("mujer")}>Mujer</li>
        <li onClick={() => setmenu("niño")}>Niño</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
      </div>
    </div>
  );
}

export default NavBar;
