import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        className={styles.modernInput}
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value, done: false })}
        placeholder="Enter Todo Items ..."
      />
      <button className={styles.modernButton} type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
