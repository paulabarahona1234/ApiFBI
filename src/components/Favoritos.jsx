import { useState, useEffect } from "react";

function Favoritos() {
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch("https://api.fbi.gov/wanted/v1/list")
      .then(res => res.json())
      .then(data => setData(data.items));
  }, []);

  const resultados = data.filter(item =>
    item.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Buscar por nombre</h1>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Buscar nombre"
      />
      <ul>
        {resultados.map(item => (
          <li key={item.uid}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;


