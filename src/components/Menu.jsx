import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Lista</Link>
      <Link to="/aleatorios">Aleatorios</Link>
      <Link to="/capturados">Capturados</Link>
      <Link to="/favoritos">Favoritos</Link>
      <Link to="/usuario">Usuario</Link>
    </nav>
  );
}

export default Menu;
