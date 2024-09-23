import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, addTodo, updateTodo, toggleComplete, removeTodo, toggleEdit }) => {
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Add new todo" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      <button onClick={handleAddTodo}>Add</button>
      
      {todos.length === 0 ? (
        <p>No todos available. Add a todo to get started!</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              updateTodo={updateTodo}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
              toggleEdit={toggleEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
