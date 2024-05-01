import { TodoItem } from "./TodoItem";

export function TodoList({ todoList, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todoList.length === 0 && "No todo's available"}
      {todoList.map((todo) => {
        if (todo.id !== -1) {
          return (
            <TodoItem
              todoKey={todo.id}
              title={todo.title}
              completed={todo.completed}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        }
      })}
    </ul>
  );
}
