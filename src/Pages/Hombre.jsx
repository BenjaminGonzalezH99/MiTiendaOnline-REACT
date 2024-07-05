import banner_mens from "../components/assets/banner_mens.png";
import data from "../components/assets/all_product.js";
import Cards from "../components/Cards/Cards.jsx";

function Hombre() {
  //array a recurrer + . +metodo filter
  const filterData = data.filter(
    //(argumento) + => + Dato a evaluar
    (producto) => producto.id >= 13 && producto.id <= 24
  );
  console.log(data);
  return (
    <div>
      <img src={banner_mens} alt="man banner" style={{ width: "100%" }} />
      <Cards data={filterData} titulo="Hombre" />
    </div>
  );
}

export default Hombre;
