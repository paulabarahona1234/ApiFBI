import { useState, useEffect } from "react";

function Secuestros() {
  const [secuestros, setSecuestros] = useState([]);

  useEffect(() => {
    fetch("https://api.fbi.gov/wanted/v1/list?tags=kidnapping")
      .then(res => res.json())
      .then(data => setSecuestros(data.items));
  }, []);

  return (
    <div>
      <h1>Secuestros y Personas Desaparecidas</h1>
      <ul>
        {secuestros.map(item => (
          <li key={item.uid}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Secuestros;


