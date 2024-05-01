export function TodoItem({
  todoKey,
  title,
  completed,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li key={todoKey}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(todoKey, e.target.checked)}
        />
      </label>
      {title}
      <button
        className="btn btn-danger"
        onClick={() => deleteTodo(todoKey, -1)}
      >
        Delete
      </button>
    </li>
  );
}
