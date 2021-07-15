import Input from "./Input";
import Sort from "./sort/Sort";
import List from "./todo/List";
import Pagination from "./Pagination";
import style from "./Main.module.scss";
import { useEffect, useState } from "react";
import usePagination from "../hooks/pagination.hook";
import { useOutput } from "../hooks/output.hook";
const Main = () => {
  const [todos, setTodos] = useState([]);
  const [idButton, setIdButton] = useState(1);
  const [typeSort, setTypeSort] = useState(true);
  const { resTodos } = useOutput(idButton, typeSort, todos);
  const { pages, showPagination, pageCount, currentPage, setCurrentPage } =
    usePagination(resTodos.length, 5);

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
      setIdButton(1);
      setValue("");
      setCurrentPage(1);
      setTypeSort(true);
    }
  };

  useEffect(() => {
  if(pageCount<currentPage){
  setCurrentPage(pageCount)
  }
  }, [pages])
  
  useEffect(() => {
    setCurrentPage(1);
  }, [idButton]);

  return (
    <div className={style.main} data-testid="main">
      <h1>ToDo</h1>
      <Input handleAddTodo={handleAddTodo} data-testid="main-child"/>
      <Sort
        setIdButton={setIdButton}
        idButton={idButton}
        setTypeSort={setTypeSort}
        typeSort={typeSort}
        data-testid="main-child"
      />
      <List
        setTodos={setTodos}
        currentPage={currentPage}
        todos={resTodos}
        data-testid="main-child"
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
