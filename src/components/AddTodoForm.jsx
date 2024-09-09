import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTodo(task);
    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between w-full max-w-lg mb-6"
    >
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow px-4 py-2 border-2 border-customGreen rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="bg-customGreen text-white px-6 py-2 rounded-r-lg hover:bg-green-600 transition-all"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodoForm;
