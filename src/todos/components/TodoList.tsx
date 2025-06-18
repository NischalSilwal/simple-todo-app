'use client';
import { useContext } from 'react';
import { TodoContext } from '@/todos/context/TodoContext';
import { Todo } from '@/todos/types/todo';

export default function TodoList() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoList must be used within a TodoProvider');
  }
  const { todos, toggleTodo, deleteTodo } = context;

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between border p-2 rounded bg-white shadow-sm placeholder:text-gray-600 text-black"
        >
          <span
            onClick={() => toggleTodo(todo.id)}
            className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
          >
            {todo.title}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 text-white p-1 px-3 rounded hover:bg-red-600 "
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}