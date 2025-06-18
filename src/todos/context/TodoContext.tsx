'use client';
import { createContext, useContext, ReactNode } from 'react';
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
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}