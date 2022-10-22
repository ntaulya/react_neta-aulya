import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: 1,
      title: "Mengerjakan Excercise",
      completed: true,
    },
    {
      id: 2,
      title: "Mengerjakan Assignment",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      const todo = {
        id: state.todoList.length + 1,
        title: action.payload,
        completed: false
      }
      state.todoList.push(todo);
    },
    
    checkTodo: (state, action) => {
      state.todoList[action.payload].completed =
        !state.todoList[action.payload].completed;
    },
    deleteTodo: (state, action) => {
      const todoBaru = [...state.todoList];
      todoBaru.splice(action.payload, 1);
      state.todoList = todoBaru;
    },
  },
});

export const { saveTodo, checkTodo, deleteTodo } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default todoSlice.reducer;
