import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    'Estudar react hooks',
    'Estudar consumo de api'
  ]);

  const [taskTitle, setTaskTitle] = useState('');

  function handleAdd() {
    setTasks([...tasks, taskTitle]);
  }

  return (
    <>
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
    </>
  );
}

export default App;
