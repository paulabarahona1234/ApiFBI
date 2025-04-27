import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detalle() {
  const { id } = useParams();
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    fetch(`https://api.fbi.gov/wanted/v1/list`)
      .then(res => res.json())
      .then(data => {
        const encontrado = data.items.find(item => item.uid === id);
        setDetalle(encontrado);
      });
  }, [id]);

  if (!detalle) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{detalle.title}</h1>
      <img src={detalle.images[0]?.original || ""} alt={detalle.title} width="300" />
      <p>{detalle.description}</p>
      <p><strong>Sexo:</strong> {detalle.sex || "Desconocido"}</p>
      <p><strong>Fecha de Nacimiento:</strong> {detalle.dates_of_birth_used?.join(", ") || "No disponible"}</p>
      <p><strong>Nacionalidad:</strong> {detalle.nationality || "No disponible"}</p>
      <a href={detalle.url} target="_blank" rel="noopener noreferrer">Ver más detalles</a>
    </div>
  );
}

export default Detalle;



