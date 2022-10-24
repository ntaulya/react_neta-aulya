import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";
import InputTodo from "./component/InputTodo";
import Todo from "./component/Todo";

import { getTodoList } from "./redux/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  const todo = useSelector((state) => state.todo.todoList);
  const todoApi = useSelector((state) => state.todoApi.todos);

  console.log(todoApi);

  return (
    <div>
      <InputTodo />
      <div className="container w-50">
        {todoApi.map((item, index) => (
          <Todo key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
