import React, { useState } from 'react'
import Form from './Form'

const TodoList = () => {
  const [todoValue, setTodo] = useState()

  return (
    <div className=' container bg-gray-700 mt-20 p-8'>
        <Form />
    </div>
  )
}

export default TodoList