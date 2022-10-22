import React from "react";
import { checkTodo, deleteTodo } from "../redux/reducer/slice";
import { useDispatch } from "react-redux";

const Todo = ({ item, index }) => {
  const dispatch = useDispatch();

  const check = (idx) => {
    dispatch(checkTodo(idx));
  };
  const removeTodo = (idx) => {
    dispatch(deleteTodo(idx));
  };

  const todoCompleted = item.completed ? "-check-square-fill" : "-square";

  return (
    <div className="row">
      <div className="col-8 pt-2 d-flex justify-content-start align-items-center" onClick={() => check(index)}>
        <i className={`bi bi${todoCompleted}`} />
        <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
          {item.title}
        </span>
      </div>
      <div className="col-4 d-flex justify-content-end align-items-center">
        <button className="btn btn-danger rounded-pill mb-2" onClick={() => removeTodo(index)}>
          ✕
        </button>
      </div>
    </div>
  );
};

export default Todo;