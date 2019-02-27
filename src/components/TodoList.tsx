import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import * as React from 'react'

interface IProps {
  todos: string[]
  deleteTodo: (index: number) => void
}

const TodoList = (props: IProps) => {
  const { todos, deleteTodo } = props

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} dense={true} button={true}>
          <ListItemText primary={todo} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label='Delete'
              // tslint:disable-next-line jsx-no-lambda
              onClick={() => {
                deleteTodo(index)
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

export default TodoList
