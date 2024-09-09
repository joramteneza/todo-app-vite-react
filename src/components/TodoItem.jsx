import React from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li
      className={`flex justify-between items-center bg-white shadow-md rounded-lg px-6 py-4 mb-4 ${
        todo.completed ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-4"
        />
        <span
          className={`text-xl ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.task}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
