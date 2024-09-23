import React, { useState } from 'react';

const TodoItem = ({ todo, index, updateTodo, toggleComplete, removeTodo, toggleEdit }) => {
  const [editText, setEditText] = useState(todo.text);

  const handleSaveEdit = () => {
    if (editText.trim() !== '') {
      updateTodo(index, editText);
    }
  };

  return (
    <li className="todo-item">
      {todo.isEditing ? (
        <>
          <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)}/>
          <button className="save" onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.text}
          </span>

          <button onClick={() => toggleComplete(index)} disabled={todo.isEditing} className={todo.isCompleted ? 'undo-btn' : 'complete-btn'}>
        {todo.isCompleted ? 'Undo' : 'Complete'}
        </button>

          <button onClick={() => toggleEdit(index)} className="edit-btn" disabled={todo.isCompleted}>Edit</button>
          <button onClick={() => removeTodo(index)} className="remove-btn">Remove</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
