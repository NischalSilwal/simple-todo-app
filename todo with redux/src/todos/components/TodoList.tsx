'use client';
import { Todo } from '@/todos/types/todo';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from '@/store/todosSlice';

export default function TodoList() {
  const todos = useSelector((state: { todos: { todos: Todo[]}}) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul className="flex flex-col gap-2">
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between border p-2 rounded bg-white shadow-sm placeholder:text-gray-600 text-black"
        >
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
          >
            {todo.title}
          </span>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="bg-red-500 text-white p-1 px-3 rounded hover:bg-red-600 "
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}