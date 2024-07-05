import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

function NavBar() {
  /* const [varieable, funcionModificadora] = useState(valorInicialVariable) String*/
  //La convencion es que a la funcion modificadora de variable se le anteponga un set mas el nombre de variebale, en camelCase
  const [menu, setMenu] = useState("tienda");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Mi tienda en linea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Tienda
            {/* sintaxis de operador ternario : evaluador ? Sicumple : noCumple*/}
            {/* sintaxis operador AND: evaluador && siCumple */}
            {menu === "tienda" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("hombre")}>
          <Link to="/hombre" style={{ textDecoration: "none" }}>
            Hombre{menu === "hombre" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("mujer")}>
          <Link to="/mujer" style={{ textDecoration: "none" }}>
            Mujer{menu === "mujer" && <hr />}
          </Link>
        </li>
        <li onClick={() => setMenu("nino")}>
          <Link to="/nino" style={{ textDecoration: "none" }}>
            Niño{menu === "nino" && <hr />}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
      </div>
    </div>
  );
}

export default NavBar;
