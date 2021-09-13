import React, { useState, useEffect } from 'react';

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

  function handleAdd() {
    setTasks([...tasks, input]);
    setInput('');
  }

  return (
    <div id="1">
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task, i) => {
          return <li key={i}>{task}</li>;
        })}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Insira uma nova atividade..."
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}
