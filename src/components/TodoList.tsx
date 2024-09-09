import { TodoItem } from "./TodoItem";
import styles from "./todolist.module.css";
const TodoList = ({ todos, setTodos }) => {
  const sortedList = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.list}>
      {sortedList.map((item: any) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
