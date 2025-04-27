import { useState, useEffect } from "react";

function Aleatorios() {
  const [aleatorios, setAleatorios] = useState([]);

  useEffect(() => {
    fetch("https://api.fbi.gov/wanted/v1/list")
      .then(res => res.json())
      .then(data => {
        const mezclados = [...data.items].sort(() => 0.5 - Math.random());
        setAleatorios(mezclados.slice(0, 5)); // 5 aleatorios
      });
  }, []);

  return (
    <div>
      <h1>Casos Aleatorios</h1>
      <ul>
        {aleatorios.map(item => (
          <li key={item.uid}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Aleatorios;

  