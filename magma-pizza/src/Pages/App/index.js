import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactenos from "../Contactenos";
import Home from "../Home";
import Login from "../Login";
import SobreNosotros from "../SobreNosotros";
import Acompanamientos from "../Acompanamientos";
import Header from "../../Components/Header";
import CrearCuenta from "../CrearCuenta";

export default function App() {
  return (
    //<Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contactenos" element={<Contactenos />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Acompanamientos" element={<Acompanamientos />} />
          <Route path="/CrearCuenta" element={<CrearCuenta />} />
        </Routes>
      </BrowserRouter>
    //</Header>
  );
}