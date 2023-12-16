import React from 'react'

import readTodoRequest from '../api/readTodosRequest';
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoForm } from '../components/CreateTodoForm';

export const TodoPage = () => {
    const { isLoading, data: todos } = useQuery(
        'todos',
        readTodoRequest,
    );
    return (
        <div>
            <h2>MERN Todo App</h2>
            <CreateTodoForm />
            {isLoading ?
                (<ClipLoader size={60} />) : (
                    todos.map((todo) => (
                        <TodoItem todo={todo} key={todo._id} />
                    ))
                )
            }
        </div>
    )
}

