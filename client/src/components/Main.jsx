import Input from "./Input";
import Sort from "./Sort";
import Pagination from '@material-ui/lab/Pagination';
import { useEffect, useState } from "react";
import usePagination from "../hooks/pagination.hook";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import useStyles from "./Main.styles";
import Item from "./Item";
const Main = () => {
  const [todos, setTodos] = useState([]);
  const [filterBy, setFilterBy] = useState(1);
  const [typeSort, setTypeSort] = useState(true);
  const clases = useStyles();
  const {
    pages,
    showPagination,
    pageCount,
    currentPage,
    setCurrentPage,
    resTodos,
  } = usePagination(5, filterBy, typeSort, todos);

  const handleEdit = (event, todo, value , valid) => {
    if (event.keyCode === 13 && valid) {
      setTodos((prevState) =>
        prevState.map((item) =>
          item.id === todo.id ? (item.text = value) && item : item
        )
      );
      return true;
    }
    if (event.keyCode === 27) {
      return true;
    }
  };

  const handleDone = (todo) => {
    if (!todo.done)
      setTodos((prevState) =>
        prevState.map((item) =>
          item.id === todo.id ? (item.done = true) && item : item
        )
      );
    else
      setTodos((prevState) =>
        prevState.map((item) =>
          item.id === todo.id ? !(item.done = false) && item : item
        )
      );
  };

  const handleDelete = (todo) => {
    setTodos((prevState) => prevState.filter((item, i) => item.id !== todo.id));
  };

  const handleAddTodo = (event, valid, value, setValue) => {
    if (event.charCode === 13 && valid) {
      setTodos((prevState) => [
        ...prevState,
        {
          done: false,
          text: value,
          date: Date.now(),
          id: Date.now(),
        },
      ]);
      setFilterBy(1);
      setValue("");
      setCurrentPage(1);
      setTypeSort(true);
    }
  };

  useEffect(() => {
    if (pageCount < currentPage) {
      setCurrentPage(pageCount);
    }
  }, [pages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterBy]);

  return (
    <Paper elevation={3} className={clases.main}>
          <Typography className={clases.head}variant="h3">ToDo</Typography>
          <Input handleAddTodo={handleAddTodo} />
          <Sort
            setFilterBy={setFilterBy}
            filterBy={filterBy}
            setTypeSort={setTypeSort}
            typeSort={typeSort}
          />
          <div className={clases.list}
          >{resTodos.map((item) => (
            <Item
              key={item.id}
              todo={item}
              handleDelete={handleDelete}
              handleDone={handleDone}
              handleEdit={handleEdit}
            />
          ))}</div>
        {showPagination && (
            <Pagination className={clases.pagination} count={pageCount} page={currentPage} onChange={(e,value)=> setCurrentPage(value)}/>
        )}
    </Paper>
  );
};

export default Main;
