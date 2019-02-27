import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import * as React from 'react'

import useTodoState from '../containers/useTodoState'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

interface IProps {
  classes: any
}

const App = (props: IProps) => {
  const { classes } = props
  const { addTodo, deleteTodo, todos } = useTodoState([])

  return (
    <div className={classes.app}>
      <Typography component='h1' variant='h2'>
        Todos
      </Typography>

      <TodoForm saveTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  )
}

const styles = () => ({
  app: {
    fontFamily: 'sans-serif',
    textAlign: 'center' as 'center'
  }
})

export default withStyles(styles)(App)
