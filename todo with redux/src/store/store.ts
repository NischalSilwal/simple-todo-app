"use client";
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '@/store/todosSlice';
import {saveToLocalStorage, loadFromLocalStorage } from '@/utils/localStorage'

const preloadedState = loadFromLocalStorage();

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    preloadedState,
});
store.subscribe(()=>{
    saveToLocalStorage(store.getState());
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


