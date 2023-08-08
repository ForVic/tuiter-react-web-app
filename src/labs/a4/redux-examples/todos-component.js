import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, todoDoneToggle } from "./reducers/todos-reducer";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ do: "" });

  const todoChangeHandler = (event) => {
    const doValue = event.target.value;
    const newTodo = {
      do: doValue,
    };
    setTodo(newTodo);
  };

  const deleteTodoClickHandler = (index) => {
    dispatch(deleteTodo(index));
  };

  const createTodoClickHandler = () => {
    dispatch(addTodo(todo));
    setTodo({ do: "" });
  };

  const toggleTodoDone = (todo) => {
    dispatch(todoDoneToggle(todo));
  };

  return (
    <>
      <h3>Todos</h3>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item">
            <button
              onClick={() => deleteTodoClickHandler(index)}
              className="btn btn-danger 
                      float-end ms-2"
            >
              Delete
            </button>
            <input
              type="checkbox"
              className="me-2"
              checked={todo.done}
              onChange={() => toggleTodoDone(todo)}
            />
            {todo.do}
          </li>
        ))}
      </ul>
      <li className="list-group-item">
        <input
          onChange={todoChangeHandler}
          value={todo.do}
          className="form-control"
        />
        <button
          onClick={createTodoClickHandler}
          className="btn btn-primary w-25 
                          float-end"
        >
          Create
        </button>
      </li>
    </>
  );
};
export default Todos;
