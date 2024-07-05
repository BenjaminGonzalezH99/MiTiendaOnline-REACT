import Hero from "../components/Hero/Hero";
import tendencias from "../components/assets/data";
import Cards from "../components/Cards/Cards";
import nuevaCollecion from "../components/assets/new_collections";

function Tienda() {
  console.log(tendencias);
  return (
    <>
      <Hero />
      <Cards data={tendencias} titulo="Tendencias" />
      <Cards data={nuevaCollecion} titulo="Nueva Collecion" />
    </>
  );
}

export default Tienda;
