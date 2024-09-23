import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css'; 

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, isCompleted: false, isEditing: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  const updateTodo = (index, newText) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newText, isEditing: false } : todo
    );
    setTodos(newTodos);
  };

  const toggleEdit = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="add-todo">
        <input className="input-type" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new todo..."/>
        <button className="add-btn" onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <p className="no-todos">No todos available. Add a todo to get started!</p>
        ) : (
          todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              index={index}
              updateTodo={updateTodo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
              toggleEdit={toggleEdit}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
