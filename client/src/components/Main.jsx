import {
  CircularProgress,
  Grow,
  Paper,
  Slide,
  Typography,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import Pagination from '@material-ui/lab/Pagination'
import { useEffect, useState } from 'react'
import axios from '../api/index'
import { QUERY_PARAMS } from '../constants/constants'
import usePagination from '../hooks/pagination.hook'
import { getSortParams } from '../utils/generatorParams'
import Input from './Input'
import Item from './Item'
import useStyles from './Main.styles'
import Sort from './Sort'

const Main = () => {
  const classes = useStyles()
  const [todos, setTodos] = useState([])
  const [filterBy, setFilterBy] = useState(QUERY_PARAMS.all)
  const [sortBy, setSortBy] = useState(QUERY_PARAMS.asc)
  const [loading, setLoading] = useState(true)
  const [alertText, setAlertText] = useState({ error: false, text: '' })
  const rowsVisibleCount = 5
  const { showPagination, pageCount, currentPage, setCurrentPage, resTodos } =
    usePagination(rowsVisibleCount, todos)

  const getTodos = async () => {
    try {
      const response = await axios.get('tasks/4', {
        params: getSortParams(filterBy, sortBy),
      })
      setTodos(
        response.data.map((todo) => {
          return {
            done: todo.done,
            text: todo.name,
            date: todo.createdAt,
            id: todo.uuid,
          }
        })
      )
      setLoading(false)
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
      setLoading(false)
    }
  }

  const editTodo = async (todoId, value) => {
    try {
      setLoading(true)
      await axios.patch(`task/4/${todoId}`, {
        name: value,
      })
      setAlertText({ error: false, text: 'Task edited' })
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
      setLoading(false)
    }
  }

  const completeTodo = async (todo) => {
    try {
      setLoading(true)
      await axios.patch(`task/4/${todo.id}`, {
        done: !todo.done,
      })
      setAlertText({ error: false, text: 'Task updated' })
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
      setLoading(false)
    }
  }

  const deleteTodo = async (todo) => {
    try {
      setLoading(true)
      await axios.delete(`task/4/${todo.id}`)
      setAlertText({ error: false, text: 'Task deleted' })
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
      setLoading(false)
    }
  }

  const addTodo = async (value) => {
    try {
      setLoading(true)
      await axios.post('task/4', {
        name: value,
        done: false,
      })
      setSortBy(QUERY_PARAMS.asc)
      setFilterBy(QUERY_PARAMS.all)
      await getTodos()
      setAlertText({ error: false, text: 'Task created' })
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
      setLoading(false)
    }
  }

  const handleCloseAlert = () => {
    setAlertText((prevState) => {
      return { ...prevState, text: '' }
    })
  }

  useEffect(() => {
    setLoading(true)
    getTodos()
    setCurrentPage(1)
  }, [filterBy, sortBy])

  return (
    <Grow in={true}>
      <Paper elevation={3} className={classes.main}>
        {loading && (
          <CircularProgress
            color='secondary'
            disableShrink
            className={classes.loader}
          />
        )}
        <Typography className={classes.head} variant='h3'>
          ToDo
        </Typography>

        <Input addTodo={addTodo} getTodos={getTodos} />

        <Grow in={!!alertText.text}>
          <Alert
            className={classes.alert}
            variant='filled'
            onClose={handleCloseAlert}
            severity={alertText.error ? 'error' : 'success'}>
            {alertText.text}
          </Alert>
        </Grow>

        <Sort
          setFilterBy={setFilterBy}
          filterBy={filterBy}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
        <div className={classes.list}>
          {resTodos.map((item) => (
            <Item
              key={item.id}
              todo={item}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              editTodo={editTodo}
              getTodos={getTodos}
            />
          ))}
        </div>
        {showPagination && (
          <Slide direction='up' in={showPagination}>
            <Pagination
              className={classes.pagination}
              color='primary'
              count={pageCount}
              page={currentPage}
              onChange={(e, value) => setCurrentPage(value)}
              showFirstButton
              showLastButton
              hideNextButton={true}
              hidePrevButton={true}
              shape='rounded'
            />
          </Slide>
        )}
      </Paper>
    </Grow>
  )
}

export default Main
