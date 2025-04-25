import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

function Detalle() {
  const { id } = useParams();
  const [fugitivo, setFugitivo] = useState(null);

  useEffect(() => {
    const obtenerDetalle = async () => {
      const res = await fetch(`https://api.fbi.gov/wanted/v1/list/${id}`);
      const data = await res.json();
      setFugitivo(data);
    };

    obtenerDetalle();
  }, [id]);

  if (!fugitivo) return <p>Cargando...</p>;

  return (
    <div className="c-detalle">
      <h1>{fugitivo.title}</h1>
      <img src={fugitivo.images[0]?.thumb} alt={fugitivo.title} />
      <p>{fugitivo.description}</p>
      <p><strong>Alias:</strong> {fugitivo.alias}</p>
      <p><strong>Fecha de nacimiento:</strong> {fugitivo.dob}</p>
      <p><strong>Sexo:</strong> {fugitivo.gender}</p>
      <p><strong>Nacionalidad:</strong> {fugitivo.nationality}</p>
      <p><a href={fugitivo.url}>Ver más información</a></p>
    </div>
  );
}

export default Detalle;

