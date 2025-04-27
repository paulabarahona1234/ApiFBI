import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Lista from "./components/Lista";
import Aleatorios from "./components/Aleatorios";
import Favoritos from "./components/Favoritos";
import TopTen from "./components/TopTen";
import Fugitivos from "./components/Fugitivos";
import Terrorismo from "./components/Terrorismo";
import Secuestros from "./components/Secuestros";
import Detalle from "./components/Detalle";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/topten" element={<TopTen />} />
        <Route path="/fugitivos" element={<Fugitivos />} />
        <Route path="/terrorismo" element={<Terrorismo />} />
        <Route path="/secuestros" element={<Secuestros />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


