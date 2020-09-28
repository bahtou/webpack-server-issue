import React from 'react';


const App: React.FC = () => {
  const todos = [{ id: 't1', text: 'React Course' }]

  return (
    <div className="App">
      <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    </div>
  );
};


export default App;
