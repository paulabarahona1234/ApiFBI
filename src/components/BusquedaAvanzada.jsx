import { useState } from 'react';
import './style.css';

function BusquedaAvanzada() {
  const [ciudad, setCiudad] = useState('');
  const [sexo, setSexo] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [resultados, setResultados] = useState([]);

  const handleBusqueda = async () => {
    const query = `https://api.fbi.gov/wanted/v1/list?city=${ciudad}&gender=${sexo}&nationality=${nacionalidad}`;
    const res = await fetch(query);
    const data = await res.json();
    setResultados(data.items);
  };

  return (
    <div className="c-busqueda-avanzada">
      <h1>Busqueda Avanzada</h1>
      <div className="c-filtro">
        <input
          type="text"
          placeholder="Ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nacionalidad"
          value={nacionalidad}
          onChange={(e) => setNacionalidad(e.target.value)}
        />
        <button onClick={handleBusqueda}>Buscar</button>
      </div>

      {resultados.length > 0 && (
        <div className="c-resultados">
          {resultados.map((fugitivo, index) => (
            <div key={index} className="c-fugitivo">
              <img src={fugitivo.images[0]?.thumb} alt={fugitivo.title} />
              <p>{fugitivo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BusquedaAvanzada;
