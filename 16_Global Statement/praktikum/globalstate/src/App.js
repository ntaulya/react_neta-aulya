import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import InputTodo from "./component/InputTodo";
import Todo from "./component/Todo";

function App() {
  const todo = useSelector((state) => state.todo.todoList);

  return (
    <div>
      <InputTodo />
      <div className='container w-50'>
        {todo.map((item, index) => (
          <Todo key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
