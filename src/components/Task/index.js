import React, { useState } from 'react';

export default function Task() {
  const [tasks, setTasks] = useState([
    'Estudar react hooks',
    'Estudar consumo de api'
  ]);

  const [taskTitle, setTaskTitle] = useState('');

  function handleAdd() {
    setTasks([...tasks, taskTitle]);
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
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Insira uma nova atividade..."
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  )
}
