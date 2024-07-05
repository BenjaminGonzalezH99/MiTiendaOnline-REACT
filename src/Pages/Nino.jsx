import banner_kids from "../components/assets/banner_kids.png";
import Cards from "../components/Cards/Cards.jsx";
import data from "../components/assets/all_product.js";

function Nino() {
  const filterData = data.filter(
    (producto) => producto.id >= 25 && producto.id <= 36
  );
  return (
    <div>
      <div>
        <img src={banner_kids} alt="kids banner" style={{ width: "100%" }} />
      </div>
      <Cards data={filterData} titulo="Niños" />
    </div>
  );
}

export default Nino;
