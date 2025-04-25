import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detalle() {
  const { id } = useParams();
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    fetch(`https://api.fbi.gov/wanted/v1/list?uid=${id}`)
      .then(res => res.json())
      .then(data => {
        const encontrado = data.items.find(item => item.uid === id);
        setDetalle(encontrado);
      });
  }, [id]);

  if (!detalle) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{detalle.title}</h2>
      <img src={detalle.images[0]?.original} alt={detalle.title} width="300" />
      <p>{detalle.description}</p>
    </div>
  );
}

export default Detalle;
