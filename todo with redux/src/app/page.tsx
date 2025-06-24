'use client';
import AddTodoForm from '@/todos/components/AddTodoForm';
import TodoList from '@/todos/components/TodoList';
import { Provider } from 'react-redux';
import {store} from '@/store/store'

export default function Home() {
  return (
    <Provider store={store} >
      <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">Todo App</h1>
        <div className="w-full max-w-2xl flex flex-col gap-4">
          <AddTodoForm />
          <TodoList />
        </div>
      </main>
    </Provider>
  );
}