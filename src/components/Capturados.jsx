import { useState, useEffect } from 'react';
import './style.css';

function Capturados() {
  const [capturados, setCapturados] = useState([]);

  useEffect(() => {
    const obtenerCapturados = async () => {
      const res = await fetch('https://api.fbi.gov/wanted/v1/list?status=Captured');
      const data = await res.json();
      setCapturados(data.items);
    };

    obtenerCapturados();
  }, []);

  if (capturados.length === 0) return <p>Cargando...</p>;

  return (
    <div className="c-lista">
      <h1>Fugitivos Capturados</h1>
      {capturados.map((fugitivo, index) => (
        <div key={index} className="c-fugitivo">
          <img src={fugitivo.images[0]?.thumb} alt={fugitivo.title} />
          <p>{fugitivo.title}</p>
          <p>{fugitivo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Capturados;

  