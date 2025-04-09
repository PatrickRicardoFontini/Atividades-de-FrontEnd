import React, { useState } from 'react';
import './ListaTarefas.css';

interface ListaTarefasProps {
  tarefasIniciais: string[];
}

const ListaTarefas: React.FC<ListaTarefasProps> = ({ tarefasIniciais }) => {
  const [tarefas, setTarefas] = useState<string[]>(tarefasIniciais);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  };

  return (
    <div className="lista-tarefas">
      <h2>Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <div className="input-area">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
    </div>
  );
};

export default ListaTarefas;
