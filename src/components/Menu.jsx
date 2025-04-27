import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Lista</Link></li>
        <li><Link to="/favoritos">Buscar</Link></li>
        <li><Link to="/aleatorios">Aleatorios</Link></li>
        <li><Link to="/topten">Top Ten</Link></li>
        <li><Link to="/fugitivos">Fugitivos</Link></li>
        <li><Link to="/terrorismo">Terrorismo</Link></li>
        <li><Link to="/secuestros">Secuestros</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;


