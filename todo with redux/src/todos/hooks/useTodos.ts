'use client';
import { useState, useEffect } from 'react';
import { Todo } from '@/todos/types/todo';
import { v4 as uuidv4 } from 'uuid';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
  if (saved) {
    try{
      setTodos(JSON.parse(saved));
    }catch(e) {
    console.error('failed to parse todo from localStorage:', e);
    setTodos([]); // Fallback to empty array if parsing fails
    }
  }
    setIsHydrated(true); // flag to signal hydration complete
  }, []);

  useEffect(() => {
    if(isHydrated) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isHydrated]);
  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      { id: uuidv4(), title, completed: false },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return { todos, addTodo, toggleTodo, deleteTodo };
}