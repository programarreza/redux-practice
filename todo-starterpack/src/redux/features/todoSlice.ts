import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  isCompleted?: string;
};

type TInitialState = {
  todos: TTodo[];
  filter: string;
};

const initialState: TInitialState = {
  todos: [],
  filter: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: "pending" });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.isCompleted =
          todo.isCompleted === "finished" ? "pending" : "finished";
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

// selector for filtered todos
export const selectedTodos = (state: { todos: TInitialState }) => {
  const { todos, filter } = state.todos;
  return filter ? todos.filter((todo) => todo.priority === filter) : todos;
};

export const { addTodo, removeTodo, toggleTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
