import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactenos from "../Contactenos";
import Home from "../Home";
import Login from "../Login";
import SobreNosotros from "../SobreNosotros";
import Acompanamientos from "../Acompanamientos";
import Navbar from "../../Components/NavBar";
import CrearCuenta from "../CrearCuenta";
import Carrito from "../Carrito";
import OrdenRecibida from "../OrdenRecibida";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactenos" element={<Contactenos />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Acompanamientos" element={<Acompanamientos />} />
          <Route path="/CrearCuenta" element={<CrearCuenta />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/OrdenRecibida" element={<OrdenRecibida />} />
        </Routes>
    </BrowserRouter>
  );
}