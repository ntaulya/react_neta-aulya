import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { saveTodo } from "../redux/reducer/slice";

const InputTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return alert("Gak ada todo");
    dispatch(saveTodo(inputText));
    setInputText("");
  };

  return (
    <form className="form-group d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h3 style={{marginTop: '10px'}}>Todo</h3>
        <input type="text" placeholder="Add todo..." value={inputText} onChange={(e) => setInputText(e.target.value)} style={{width: "500px", height:"40px", borderRadius: '20px', marginTop: '10px'}}/>
        <button style={{borderRadius: '5px', marginTop: '10px'}}>Add</button>
      </div>
    </form>
  );
};

export default InputTodo;
