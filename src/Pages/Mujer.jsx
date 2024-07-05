import banner_women from "../components/assets/banner_women.png";
import data from "../components/assets/all_product.js";
import Cards from "../components/Cards/Cards.jsx";

function Mujer() {
  const filterData = data.filter(
    (producto) => producto.id >= 1 && producto.id <= 12
  );
  return (
    <div>
      {" "}
      <div>
        <img src={banner_women} alt="women banner" style={{ width: "100%" }} />
      </div>
      <Cards data={filterData} titulo="Mujer" />
    </div>
  );
}

export default Mujer;
