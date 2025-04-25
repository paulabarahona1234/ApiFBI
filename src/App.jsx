import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lista from "./components/Lista";
import Aleatorios from "./components/Aleatorios";
import Capturados from "./components/Capturados";
import Favoritos from "./components/Favoritos";
import Usuario from "./components/Usuario";
import Detalle from "./components/Detalle";
import BusquedaAvanzada from "./components/BusquedaAvanzada";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Lista />} />
          <Route path="/aleatorios" element={<Aleatorios />} />
          <Route path="/capturados" element={<Capturados />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/detalle/:id" element={<Detalle />} />
          <Route path="/busqueda-avanzada" element={<BusquedaAvanzada />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
