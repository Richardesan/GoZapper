import React, { useState } from 'react'

const Form = ({createTodo}: any) => {
    const [value, setValue] = useState('')
console.log(createTodo)
    function handleSubmit(e: any) {
        e.preventDefault()
        console.log(value)
        setValue('richard')
    }
  return (
    <form className='mb-4 w-full' onSubmit={handleSubmit}>
        <input type='text' 
        onChange={(e)=> setValue(e.target.value)}
        className='outline-none bg-transparent border border-gray-500 p-4 w-[300px] text-white mb-4 rounded placeholder:text-gray-300 ' placeholder='what task do you have today' />

    <button className='bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2'>Add Task</button>

    </form>
  )
}

export default Form