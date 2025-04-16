import React, { useState } from 'react';

const CadastrarUsuario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const cadastrar = async () => {
    setMensagem('');
    setErro('');

    if (!nome || !email) {
      setErro('Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nome,
          email: email
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar');
      }

      const data = await response.json();
      setMensagem(`Usuário "${data.name}" cadastrado com sucesso!`);
      setNome('');
      setEmail('');
    } catch (error) {
      setErro('Erro ao cadastrar usuário.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
      <h2>Cadastrar Novo Usuário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={cadastrar} style={{ padding: '0.5rem 1rem' }}>
        Cadastrar
      </button>

      {mensagem && <p style={{ color: 'green', marginTop: '1rem' }}>{mensagem}</p>}
      {erro && <p style={{ color: 'red', marginTop: '1rem' }}>{erro}</p>}
    </div>
  );
};

export default CadastrarUsuario;