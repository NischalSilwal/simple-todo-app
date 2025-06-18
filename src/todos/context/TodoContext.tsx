'use client';
import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Todo } from '@/todos/types/todo';
import { useTodos } from '@/todos/hooks/useTodos';
interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsclient] = useState(false);
  useEffect(() => setIsclient(true), []);
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  if (!isClient) {
    return null;
  }
  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}