import React from "react";
import { useQueryClient, useMutation, QueryClient } from "react-query";
import updateTodoRequest from "../api/updateTodoRequest";
import deleteTodoRequest from "../api/deleteTodoRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

export const TodoItem = ({ todo }) => {
  const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation(
    (updateTodo) => updateTodoRequest(updateTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  )
  const { mutate: deleteTodo } = useMutation(
    (updateTodo) => deleteTodoRequest(updateTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
      },
    }
  )
  return (
    <div>
      <input
        checked={todo.completed}
        type="checkbox"
        onChange={() => updateTodo({
          ...todo,
          completed: !todo.completed,
        })}
      />
      <input
        type="text"
        value={todo.text}
        onChange={(e) => updateTodo({
          ...todo,
          text: e.target.value,
        })}
      />
      <button className='deleteButton' onClick={() => deleteTodo(todo)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
