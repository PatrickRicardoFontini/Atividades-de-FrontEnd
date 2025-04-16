import { useParams } from 'react-router-dom';

const Animal = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Animal</h2>
      {name ? (
        <p>O animal é: <strong>{name}</strong></p>
      ) : (
        <p>Nenhum animal foi informado.</p>
      )}
    </div>
  );
};

export default Animal;
