import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      dispatch(
        addTodo({
          text: inputValue,
        })
      );
      setInputValue("");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        marginBottom: "20px",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a new todo..."
        style={{
          flex: 1,
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginRight: "10px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
