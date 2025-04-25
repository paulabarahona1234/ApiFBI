import { useState, useEffect } from 'react';
import './style.css';

function Aleatorios() {
  const [fugitivo, setFugitivo] = useState(null);

  useEffect(() => {
    const obtenerAleatorio = async () => {
      const res = await fetch('https://api.fbi.gov/wanted/v1/list?status=Captured');
      const data = await res.json();
      const randomIndex = Math.floor(Math.random() * data.items.length);
      setFugitivo(data.items[randomIndex]);
    };

    obtenerAleatorio();
  }, []);

  if (!fugitivo) return <p>Cargando...</p>;

  return (
    <div className="c-fugitivo">
      <h1>Fugitivo Aleatorio</h1>
      <img src={fugitivo.images[0]?.thumb} alt={fugitivo.title} />
      <p>{fugitivo.title}</p>
      <p>{fugitivo.description}</p>
      <p><a href={`https://www.fbi.gov/wanted/${fugitivo.title}`}>Ver más</a></p>
    </div>
  );
}

export default Aleatorios;

  