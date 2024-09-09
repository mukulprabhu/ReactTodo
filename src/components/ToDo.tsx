import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const doneTodosCount = todos.filter((todo) => todo.done).length;

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer doneTodos={doneTodosCount} totalTodos={todos.length} />
    </div>
  );
};

export default ToDo;
