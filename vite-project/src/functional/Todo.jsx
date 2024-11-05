import { useState } from 'react';

function TodoApp() {
  // State to manage the input value and to-do list
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  // Function to handle adding a new task
  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, completed: false }]);
      setTask(''); // Clear the input field after adding the task
    }
  };

  // Function to handle toggling task completion
  const toggleTaskCompletion = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Function to handle removing a task
  const removeTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleTaskCompletion(index)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
