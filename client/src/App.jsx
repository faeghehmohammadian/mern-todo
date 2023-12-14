import './App.css'

import { useEffect ,useState} from 'react'
import readTodoRequest from './api/readTodosRequest'

function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    readTodoRequest().then(setTodos)
  },[]);

  return <div className='App'> 
    {todos.map((todo)=>
    <div key={todo._id}>
        {todo.text}
        {`${todo.completed}`}
      </div>
    )}
  </div>
}

export default App
