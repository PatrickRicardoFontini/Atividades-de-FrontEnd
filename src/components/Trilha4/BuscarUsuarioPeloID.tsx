import React, { useState } from 'react';

const BuscarUsuario = () => {
  const [id, setId] = useState('');
  interface Usuario {
    name: string;
    email: string;
  }

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [erro, setErro] = useState('');

  const buscarUsuario = async () => {
    setErro('');
    setUsuario(null);

    if (!id) {
      setErro('Por favor, insira um ID.');
      return;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }

      const data = await response.json();
      setUsuario(data);
    } catch (error) {
      setErro('Usuário não encontrado.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
      <h2>Buscar Usuário</h2>
      <input
        type="number"
        placeholder="Digite o ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={buscarUsuario} style={{ padding: '0.5rem 1rem' }}>
        Buscar
      </button>

      {erro && <p style={{ color: 'red', marginTop: '1rem' }}>{erro}</p>}

      {usuario && (
        <div style={{ marginTop: '1rem', textAlign: 'left' }}>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarUsuario;
