import "./styles.css";
import { useEffect, useState } from "react";
import { NewForm } from "./NewForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todoItems");
    if (storedTodos == null) return [];
    return JSON.parse(storedTodos);
  });

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todoTitle) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: todoTitle,
          completed: false,
        },
      ];
    });
  }

  function deleteItem(toDeleteTodoId, id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== toDeleteTodoId);
    });
  }

  function toggleTodo(toToggleTodoId, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === toToggleTodoId) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  return (
    <>
      <NewForm onSubmit={addTodo} />
      <h1 className="header"> Todo List</h1>
      <TodoList
        todoList={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteItem}
      />
    </>
  );
}
