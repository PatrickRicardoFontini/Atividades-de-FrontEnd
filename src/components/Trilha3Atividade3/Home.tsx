// Home.tsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Página Inicial</h1>
      <button onClick={handleClick}>Ir para About</button>
    </div>
  );
}

export default Home;
