import React, { useState } from "react";
import './App.css';


function App() {

  const [newToDo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if (newToDo.length == 0) {
      return;
    };
    const todoItem = {
      text: newToDo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewToDo("");
  };


  const handleTodoDelete = (deleteIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== deleteIdx;
    })
    setTodos(filteredTodos);
  }


  const handleTodoComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;

      }
      return todo;
    });
    setTodos(updatedTodos)
  }


  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={e => {
          handleNewTodoSubmit(e)
        }} >
        <input
          onChange={e => {
            setNewToDo(e.target.value)
          }}
          type="text"
        />
        <button>Add</button>
      </form>

      {todos.map((todo, i) => {
        const todoClasses = ['bold', 'italic'];
        if (todo.complete) {
          todoClasses.push("line-through")
        }
        return (
          <div
            key={i}>
            
            <button onClick={(e) => {
              handleTodoDelete(i);
            }}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;