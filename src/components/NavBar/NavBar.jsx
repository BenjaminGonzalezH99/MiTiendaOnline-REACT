import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

function NavBar() {
  /* const [nombreDeVariable, function modificadorDeVariable] = useState(valorInicialdelaVariable) String 
    La convención es que la función modificadora de variable se le anteponga un set más el nombre de variable, todo junto en camelCase */
  const [menu, setMenu] = useState("tienda");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>mi tienda en línea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          Tienda
          {/* sintaxis de operador ternario: evaluador ? siCumpleLaCondición : siNoLaCumple */}
          {/* sintaxis de operador AND: evaluador && siCumpleLaCondición */}
          {menu === "tienda" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("hombre")}>
          Hombre
          {menu === "hombre" && <hr />}
        </li>
        <li onClick={() => setMenu("mujer")}>
          Mujer
          {menu === "mujer" && <hr />}
        </li>
        <li onClick={() => setMenu("niño")}>
          Niño
          {menu === "niño" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart-icon" />
      </div>
    </div>
  );
}

export default NavBar;
