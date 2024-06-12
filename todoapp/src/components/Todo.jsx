import { useState } from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import Footer from "./Footer.jsx";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedCount = todos.filter((todo) => todo.done).length;
  const totalCount = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      {/* {console.log(...todos, todos)} */}
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedCount={completedCount} totalCount={totalCount} />
    </div>
  );
}
