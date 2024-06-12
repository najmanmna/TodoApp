import styles from "./todoitem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button is clicked for", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const linethrough = item.done ? styles.complete : "";
  // console.log(linethrough);

  return (
    <div className={styles.todoitem}>
      <div className={styles.itemname}>
        <span className={linethrough} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button onClick={() => handleDelete(item)} className={styles.delete}>
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
