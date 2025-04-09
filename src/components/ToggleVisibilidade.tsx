import React, { useState } from 'react';
import './ToggleVisibilidade.css';

interface ToggleVisibilidadeProps {
  texto: string;
}

const ToggleVisibilidade: React.FC<ToggleVisibilidadeProps> = ({ texto }) => {
  const [visivel, setVisivel] = useState(false);

  const alternarVisibilidade = () => {
    setVisivel((prev) => !prev);
  };

  return (
    <div className="toggle-container">
      <button onClick={alternarVisibilidade}>
        {visivel ? 'Ocultar' : 'Mostrar'}
      </button>
      {visivel && <p className="texto">{texto}</p>}
    </div>
  );
};

export default ToggleVisibilidade;
