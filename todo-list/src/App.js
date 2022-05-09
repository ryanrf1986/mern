import './App.css';
import React, {useState} from 'react';
import AddTodo from './components/AddTodo';
import Display from './components/Display';

function App() {
  const [todos, addTodo] = useState([])

  return (
    <fieldset>
      <legend>App.js</legend>
      <AddTodo todos={todos} addTodo={addTodo} />
      <Display todos={todos} addTodo={addTodo} />
    </fieldset>
  );
}

export default App;
