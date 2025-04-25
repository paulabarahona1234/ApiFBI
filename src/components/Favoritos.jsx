import { useState, useEffect } from 'react';
import './style.css';

function Favoritos() {
  const [nombre, setNombre] = useState('');
  const [resultados, setResultados] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Cargar todos los datos al inicio
    const obtenerDatos = async () => {
      const res = await fetch('https://api.fbi.gov/wanted/v1/list');
      const json = await res.json();
      setData(json.items);
    };
    obtenerDatos();
  }, []);

  const buscarPorNombre = () => {
    if (nombre.trim().length === 0) {
      setResultados([]);
      return;
    }

    const filtro = data.filter(persona =>
      persona.title.toLowerCase().includes(nombre.toLowerCase())
    );
    setResultados(filtro);
  };

  return (
    <div>
      <h1>Buscar por nombre</h1>
      <input
        type="text"
        placeholder="Escribe un nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={buscarPorNombre}>Buscar</button>

      <div>
        {resultados.length > 0 ? (
          resultados.map((persona, index) => (
            <div key={index} className="resultado">
              <h3>{persona.title}</h3>
              {persona.images && persona.images[0] && (
                <img src={persona.images[0].original} alt={persona.title} width="150" />
              )}
              <p>{persona.description}</p>
            </div>
          ))
        ) : (
          <p>No hay resultados</p>
        )}
      </div>
    </div>
  );
}

export default Favoritos;
