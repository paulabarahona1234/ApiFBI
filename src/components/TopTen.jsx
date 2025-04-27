import { useState, useEffect } from "react";

function TopTen() {
  const [top, setTop] = useState([]);

  useEffect(() => {
    fetch("https://www.fbi.gov/wanted/topten")
      .then(res => res.json())
      .then(data => setTop(data.items));
  }, []);

  return (
    <div>
      <h1>Los Diez Más Buscados</h1>
      <ul>
        {top.map(item => (
          <li key={item.uid}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TopTen;







