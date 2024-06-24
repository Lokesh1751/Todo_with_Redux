import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetodo, updatetodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Use an object to store updatedText for each todo item
  const [updatedTexts, setUpdatedTexts] = useState({});

  const handleTextChange = (todoId, newText) => {
    setUpdatedTexts({
      ...updatedTexts,
      [todoId]: newText,
    });
  };

  const removeItem = (todoId) => {
    dispatch(removetodo({ id: todoId }));
  };

  const updateItem = (todoId) => {
    const newText = updatedTexts[todoId];
    if (newText && newText.trim() !== "") {
      dispatch(updatetodo({ id: todoId, text: newText }));
      // Optionally clear the input after update
      setUpdatedTexts({
        ...updatedTexts,
        [todoId]: "",
      });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {todos.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            gap: "20px",
          }}
        >
          <input
            type="text"
            value={updatedTexts[item.id] || ""}
            onChange={(e) => handleTextChange(item.id, e.target.value)}
            style={{
              flex: 1,
              marginRight: "10px",
              padding: "8px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <h4 style={{ margin: 0 }}>{item.text}</h4>
          <button
            onClick={() => updateItem(item.id)}
            style={{
              padding: "8px 12px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Update
          </button>

          <button
            onClick={() => removeItem(item.id)}
            style={{
              padding: "8px 12px",
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
