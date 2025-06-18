'use client';
import { useContext, useState } from 'react';
import { TodoContext } from '@/todos/context/TodoContext';

export default function AddTodoForm() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('AddTodoForm must be used within a TodoProvider');
  }
  const { addTodo } = context;
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="flex-grow border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600 text-black"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-black p-2 rounded hover:bg-blue-600"
      >
        Add Todo
      </button>
    </div>
  );
}
