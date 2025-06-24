'use client';
import { useContext, useState } from 'react';
import { useDispatch} from 'react-redux';
import { TodoContext } from '../context/TodoContext';
import { addTodo } from '@/store/todosSlice';


export default function AddTodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
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
