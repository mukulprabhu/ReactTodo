import styles from "./todoitem.module.css";

export const TodoItem = ({ item, todos, setTodos }) => {
  function handleDelete(e) {
    setTodos(todos.filter((todo) => todo.name != item.name));
  }

  function handleClick(name) {
    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }

  const doneClassName = item.done ? styles.itemNameStrike : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={doneClassName} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button className={styles.modernButton} onClick={handleDelete}>
            ❌
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
};
