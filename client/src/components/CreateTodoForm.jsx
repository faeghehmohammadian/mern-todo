import React, { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query';
import createTodoRequest from '../api/createTodoRequest'

export const CreateTodoForm = () => {
    const queryClient = useQueryClient();
    const [text, setText] = useState('');
    const { mutate: createTodo } = useMutation(
        (nowTodo) => createTodoRequest(nowTodo),
        {
            onSettled: () => {
                queryClient.invalidateQueries('todos');
            },
        }
    )
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            createTodo({
                text,
            })
            setText('');
        }}>
            <input
                onChange={e => setText(e.target.value)}
                value={text}
                type='text' />
            <button>Add</button>
        </form>
    )
}
