//untuk menyimpan data yang ada di global
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/slice";
import todoApiReducer from "./reducer/taskreducer";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    todoApi: todoApiReducer,
  },
});

export default store;
