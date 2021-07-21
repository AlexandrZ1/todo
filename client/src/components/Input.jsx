import { useInput } from '../hooks/input.hook'
import { TextField } from '@material-ui/core'
import useStyles from './Input.styles'

const Input = ({ handleAddTodo }) => {
  const { value, setValue, handleChange } = useInput('')
  const classes = useStyles()
  const handleOnKeyPress = async (e) => {
    if (e.key === 'Enter') {
      await handleAddTodo(value)
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
      inputProps={{ maxLength: 25, value: value, placeholder: 'I want to ...' }}
      onKeyPress={(e) => handleOnKeyPress(e)}
      onChange={(e) => handleChange(e)}
      onBlur={() => setValue('')}
    />
  )
}

export default Input
