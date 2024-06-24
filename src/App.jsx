import AddTodo from "./components/AddTodo";
import "./App.css";
import { Provider } from "react-redux";

import Todos from "./components/Todos";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <h1>Todo List</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
