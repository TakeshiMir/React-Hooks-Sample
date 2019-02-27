import { useState } from 'react'

export default (initialValue: string[]) => {
  const [todos, setTodos] = useState(initialValue)

  return {
    addTodo: (todoText: string) => {
      const trimmedText = todoText.trim()
      if (trimmedText.length > 0) {
        setTodos([...todos, todoText])
      }
    },
    deleteTodo: (todoIndex: number) => {
      const newTodos = todos.filter(
        (_: string, index: number) => index !== todoIndex
      )
      setTodos(newTodos)
    },
    todos
  }
}
