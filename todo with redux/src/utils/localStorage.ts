export const loadFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('todos');
    return saved ? { todos: { todos: JSON.parse(saved) } } : undefined;
  }
  return undefined;
};

export const saveToLocalStorage = (state: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('todos', JSON.stringify(state.todos.todos));
  }
};