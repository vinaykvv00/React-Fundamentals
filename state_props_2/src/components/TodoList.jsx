import  React, {useState} from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim() === '') return; // Prevent adding empty todos
    setTodos([...todos, inputValue]); 
    setInputValue('')

  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>

            <input type='test' value={inputValue} onChange={handleChange} placeholder='add new todo' />
            <button type='submit'>Add todo</button>
        </form>

        <ui>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}  
        </ui>
      
    </div>
  )
}

export default TodoList
