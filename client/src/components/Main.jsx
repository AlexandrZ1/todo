import { CircularProgress, Paper, Typography } from '@material-ui/core'
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
  const clases = useStyles()
  const [todos, setTodos] = useState([])
  const [filterBy, setFilterBy] = useState(QUERY_PARAMS.all)
  const [sortBy, setSortBy] = useState(QUERY_PARAMS.asc)
  const [loading, setLoading] = useState(false)
  const [alertText, setAlertText] = useState({ error: false, text: '' })
  const rowsVisibleCount = 5
  const {
    pages,
    showPagination,
    pageCount,
    currentPage,
    setCurrentPage,
    resTodos,
  } = usePagination(rowsVisibleCount, todos)

  const getTodos = async () => {
    try {
      setLoading(true)
      const response = await axios.get('tasks/4', {
        params: getSortParams(filterBy, sortBy),
      })
      setLoading(false)
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
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
      setLoading(false)
    }
  }

  //---------------------------Handlers-------------------------------
  const handleEdit = async (todoId, value) => {
    try {
      setLoading(true)
      await axios.patch(`task/4/${todoId}`, {
        name: value,
      })
      setAlertText({ error: false, text: 'Task edited' })
      await getTodos()
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
    }
    setLoading(false)
  }

  const handleDone = async (todo) => {
    try {
      setLoading(true)
      await axios.patch(`task/4/${todo.id}`, {
        done: !todo.done,
      })
      await getTodos()
      setAlertText({ error: false, text: 'Task updated' })
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
    }
    setLoading(false)
  }

  const handleDelete = async (todo) => {
    try {
      setLoading(true)
      await axios.delete(`task/4/${todo.id}`)
      await getTodos()
      setAlertText({ error: false, text: 'Task deleted' })
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
    }
    setLoading(false)
  }

  const handleAddTodo = async (value) => {
    try {
      setLoading(true)
      await axios.post('task/4', {
        name: value,
        done: false,
      })
      setFilterBy(QUERY_PARAMS.all)
      setCurrentPage(1)
      setSortBy(QUERY_PARAMS.asc)
      await getTodos()
      setAlertText({ error: false, text: 'Task created' })
    } catch (error) {
      setAlertText({ error: true, text: error.response.data.message })
    }
    setLoading(false)
  }

  const handleCloseAlert = () => {
    setAlertText((prevState) => {
      return { ...prevState, text: '' }
    })
  }
  //---------------------------Effects-------------------------------

  useEffect(() => {
    getTodos()
  }, [filterBy, sortBy])

  useEffect(() => {
    if (pageCount < currentPage) {
      setCurrentPage(pageCount)
    }
  }, [pages])

  // useEffect(() => {}, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [filterBy])

  return (
    <Paper elevation={3} className={clases.main}>
      {loading && (
        <div className={clases.loader}>
          <CircularProgress color='' disableShrink />
        </div>
      )}
      <Typography className={clases.head} variant='h3'>
        ToDo
      </Typography>

      <Input handleAddTodo={handleAddTodo} />
      {alertText.text && (
        <Alert
          className={clases.alert}
          onClose={handleCloseAlert}
          severity={alertText.error ? 'error' : 'success'}>
          {alertText.text}
        </Alert>
      )}
      <Sort
        setFilterBy={setFilterBy}
        filterBy={filterBy}
        setSortBy={setSortBy}
        sortBy={sortBy}
      />
      <div className={clases.list}>
        {resTodos.map((item) => (
          <Item
            key={item.id}
            todo={item}
            handleDelete={handleDelete}
            handleDone={handleDone}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      {showPagination && (
        <Pagination
          className={clases.pagination}
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
      )}
    </Paper>
  )
}

export default Main
