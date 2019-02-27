import TextField from '@material-ui/core/TextField'
import * as React from 'react'

import useInputState from '../containers/useInputState'

interface IProps {
  saveTodo: (value: string) => void
}

const TodoForm = (props: IProps) => {
  const { onChange, reset, value } = useInputState()
  const { saveTodo } = props

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    saveTodo(value)
    reset()
  }
  return (
    <form onSubmit={onSubmit}>
      <TextField
        variant='outlined'
        placeholder='Add todo'
        margin='normal'
        onChange={onChange}
        value={value}
      />
    </form>
  )
}

export default TodoForm
