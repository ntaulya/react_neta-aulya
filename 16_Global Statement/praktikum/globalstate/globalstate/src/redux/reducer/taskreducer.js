import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    GET_TODOS: (state, action) => {
      state.todos = action.payload;
    },
    GET_TODO_BY_ID: (state, action) => {},
    ADD_TODO: (state, action) => {
      // hasura.post("/todo", {
      //   title: action.payload,
      // });
    },
    DELETE_TODO: (state, action) => {
      //
    },
  },
});

export const { GET_TODOS, GET_TODO_BY_ID, ADD_TODO, DELETE_TODO, UPDATE_TODO } = todoSlice.actions;

export default todoSlice.reducer;
