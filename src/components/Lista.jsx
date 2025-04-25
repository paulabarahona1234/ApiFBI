import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Lista() {
  const [datos, setDatos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.fbi.gov/wanted/v1/list")
      .then(res => res.json())
      .then(data => setDatos(data.items))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Lista de Buscados</h1>
      {datos.map((persona, index) => (
        <div key={index} onClick={() => navigate(`/detalle/${persona.uid}`)}>
          <p>{persona.title}</p>
          <img src={persona.images[0]?.thumb} alt={persona.title} width="100" />
        </div>
      ))}
    </>
  );
}

export default Lista;
