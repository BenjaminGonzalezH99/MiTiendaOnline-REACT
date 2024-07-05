import NavBar from "./components/NavBar/NavBar";
import Tienda from "./pages/Tienda";
import Hombre from "./pages/Hombre";
import Mujer from "./pages/Mujer";
import Nino from "./pages/Nino";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tienda />}></Route>
        <Route path="/hombre" element={<Hombre />}></Route>
        <Route path="/mujer" element={<Mujer />}></Route>
        <Route path="/nino" element={<Nino />}></Route>
      </Routes>
    </>
  );
}

export default App;
