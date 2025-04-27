import { useState, useEffect } from "react";

function Terrorismo() {
  const [terrorismo, setTerrorismo] = useState([]);

  useEffect(() => {
    fetch("https://api.fbi.gov/wanted/v1/list?tags=terrorism")
      .then(res => res.json())
      .then(data => setTerrorismo(data.items));
  }, []);

  return (
    <div>
      <h1>Casos de Terrorismo</h1>
      <ul>
        {terrorismo.map(item => (
          <li key={item.uid}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Terrorismo;


