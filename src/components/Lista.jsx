import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Lista() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.fbi.gov/wanted/v1/list")
      .then(res => res.json())
      .then(data => setData(data.items));
  }, []);

  return (
    <div>
      <h1>Lista de Más Buscados</h1>
      <ul>
        {data.map(item => (
          <li key={item.uid}>
            <Link to={`/detalle/${item.uid}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
