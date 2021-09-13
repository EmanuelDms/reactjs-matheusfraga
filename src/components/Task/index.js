import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Container } from './styles';

export default function Task() {
  const [tasks, setTasks] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {
    const tasksStorage = localStorage.tasks;

    if (tasksStorage) {
      setTasks(JSON.parse(tasksStorage));
    }

    // componenteWillUnmount: executa quando o componente for desmontar
    return () => {};
  }, []);

  useEffect(() => {
    localStorage.tasks = JSON.stringify(tasks);
  }, [tasks]);

  const handleAdd = useCallback(() => {
    setTasks([...tasks, input]);
    setInput('');
  }, [tasks, input]);

  const totalTasks = useMemo(() => tasks.length, [tasks]);

  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, i) => {
          return <li key={i}>{task}</li>;
        })}
      </ul>
      <p>Você têm {totalTasks} tarefa(s)!</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Insira uma nova atividade..."
      />
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}
