import { useInput } from '../hooks/input.hook'
import { TextField } from '@material-ui/core'
import useStyles from './Input.styles'

const Input = ({ addTodo }) => {
  const { value, setValue, handleChange } = useInput('')
  const classes = useStyles()

  const handleAddTodo = async (e) => {
    if (e.key === 'Enter') {
      await addTodo(value)
      setValue('')
    }
  }

  return (
    <TextField
      className={classes.input}
      autoComplete='off'
      size='small'
      variant='outlined'
      color='primary'
      inputProps={{ maxLength: 45, value: value, placeholder: 'I want to ...' }}
      onKeyPress={(e) => handleAddTodo(e)}
      onChange={(e) => handleChange(e)}
      onBlur={() => setValue('')}
    />
  )
}

export default Input
