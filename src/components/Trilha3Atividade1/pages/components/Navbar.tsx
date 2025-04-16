import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
      <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
      <Link to="/sobre" style={{ color: 'white', marginRight: '1rem' }}>Sobre</Link>
      <Link to="/contato" style={{ color: 'white' }}>Contato</Link>
    </nav>
  );
};

export default Navbar;
