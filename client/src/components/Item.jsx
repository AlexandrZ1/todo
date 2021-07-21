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

const Item = ({ todo, handleDelete, handleDone, handleEdit }) => {
  const { value, setValue, handleChange } = useInput(todo.text)
  const [visibleEdit, setVisibleEdit] = useState(false)
  const typesKey = { enter: 'Enter', escape: 'Escape' }

  useEffect(() => {
    setValue(todo.text)
  }, [visibleEdit])

  const handleBlur = () => {
    setVisibleEdit(false)
  }

  const handleOnKeyDown = async (e) => {
    if (e.key === typesKey.enter && todo.text !== value) {
      await handleEdit(todo.id, value)
      setVisibleEdit(false)
    } else if (e.key === typesKey.escape) setVisibleEdit(false)
  }

  const clases = useStyles()

  return (
    <Grow in={true}>
      <Paper elevation={3} className={clases.container}>
        <div className={clases.item}>
          <IconButton onClick={() => handleDone(todo)}>
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
          <IconButton onClick={() => handleDelete(todo)}>
            <DeleteOutlineTwoToneIcon className={clases.delete} />
          </IconButton>
        </div>
      </Paper>
    </Grow>
  )
}

export default Item
