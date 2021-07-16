import Input from "./Input";
import Sort from "./sort/Sort";
import List from "./todo/List";
import Pagination from "./Pagination";
import style from "./Main.module.scss";
import { useEffect, useState } from "react";
import usePagination from "../hooks/pagination.hook";
const Main = () => {
  const [todos, setTodos] = useState([]);
  const [filterBy, setFilterBy] = useState(1);
  const [typeSort, setTypeSort] = useState(true);

  const {
    pages,
    showPagination,
    pageCount,
    currentPage,
    setCurrentPage,
    resTodos,
  } = usePagination(5, filterBy, typeSort, todos);

  const handleEdit = (event, todo, value) => {
    if (event.keyCode === 13) {
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
    <div className={style.main}>
      <h1>ToDo</h1>
      <Input handleAddTodo={handleAddTodo} />
      <Sort
        setFilterBy={setFilterBy}
        filterBy={filterBy}
        setTypeSort={setTypeSort}
        typeSort={typeSort}
      />
      <List
        todos={resTodos}
        handleDone={handleDone}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {showPagination && (
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Main;
