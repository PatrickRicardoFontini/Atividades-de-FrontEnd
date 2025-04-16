
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
    <Link to="/">Home</Link>
    <Link to="/rooms">Quartos</Link>
  </nav>
);
