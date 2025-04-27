import { useState, useEffect } from "react";

function Fugitivos() {
  const [fugitivos, setFugitivos] = useState([]);

  useEffect(() => {
    fetch("https://api.fbi.gov/wanted/v1/list?field_offices=fugitives")
      .then(res => res.json())
      .then(data => setFugitivos(data.items));
  }, []);

  return (
    <div>
      <h1>Fugitivos</h1>
      <ul>
        {fugitivos.map(item => (
          <li key={item.uid}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fugitivos;




