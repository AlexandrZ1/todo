import {
  Grow,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core'
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone'
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone'
import { useEffect, useState } from 'react'
import { useInput } from '../hooks/input.hook'
import useStyles from './Item.styles'

const Item = ({ todo, deleteTodo, completeTodo, editTodo, getTodos }) => {
  const { value, setValue, handleChange } = useInput(todo.text)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const [isDeleting, setIsDelitihg] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const typesKey = { enter: 'Enter', escape: 'Escape' }
  const clases = useStyles()

  const handleBlur = () => {
    setVisibleEdit(false)
  }

  const handleDelete = async () => {
    if (!isDeleting) {
      setIsDelitihg(true)
      await deleteTodo(todo)
      await getTodos()
    }
  }

  const handleComplete = async () => {
    if (!isUpdating) {
      setIsUpdating(true)
      await completeTodo(todo)
      setIsUpdating(false)
      await getTodos()
    }
  }

  const handleOnKeyDown = async (e) => {
    if (e.key === typesKey.enter && todo.text !== value) {
      await editTodo(todo.id, value)
      await getTodos()
      setVisibleEdit(false)
    } else if (e.key === typesKey.escape) setVisibleEdit(false)
  }

  useEffect(() => {
    setValue(todo.text)
  }, [visibleEdit])

  return (
    <Grow in={true}>
      <Paper elevation={3} className={clases.container}>
        <div className={clases.item}>
          <IconButton onClick={() => handleComplete()}>
            <CheckCircleOutlineTwoToneIcon
              className={todo.done ? clases.success : ''}
              color='secondary'
            />
          </IconButton>
          <div className={clases.text} onClick={() => setVisibleEdit(true)}>
            {visibleEdit && (
              <Grow in={visibleEdit}>
                <TextField
                  className={clases.input}
                  size='small'
                  variant='outlined'
                  autoFocus={true}
                  inputProps={{ maxLength: 45, value: value }}
                  onChange={(e) => handleChange(e)}
                  onKeyDown={(e) => handleOnKeyDown(e)}
                  onBlur={() => handleBlur()}
                />
              </Grow>
            )}
            {!visibleEdit && (
              <Grow in={!visibleEdit}>
                <Typography>{todo.text}</Typography>
              </Grow>
            )}
          </div>
          <Typography>
            {new Date(todo.date).toLocaleDateString('ru-RU', {
              year: '2-digit',
              month: '2-digit',
              day: '2-digit',
            })}
          </Typography>
          <IconButton onClick={() => handleDelete()}>
            <DeleteOutlineTwoToneIcon className={clases.delete} />
          </IconButton>
        </div>
      </Paper>
    </Grow>
  )
}

export default Item
