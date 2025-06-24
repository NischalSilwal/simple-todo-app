"use client";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '@/todos/types/todo';

const initialState: { todos: Todo[] } = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<string>) => {
        state.todos.push({ id: crypto.randomUUID(), title: action.payload, completed: false });
      },
      prepare: (title: string) => ({ payload: title }),
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
