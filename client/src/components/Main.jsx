import Input from "./Input";
import Sort from "./sort/Sort";
import List from "./todo/List";
import Pagination from "./Pagination";
import style from "./Main.module.scss";
import { useState } from "react";
import usePagination from "../hooks/pagination.hook";
const Main = () => {
  const [todos, setTodos] = useState([]);
  const { pages, showPagination, pageCount, currentPage, setCurrentPage } =
    usePagination(
      todos.reduce((sum, current) => (current.visible ? ++sum : sum), 0),
      5
    );
    console.log(999, todos.reduce((sum, current) => (current.visible ? ++sum : sum), 0))
  console.log(currentPage);
  return (
    <div className={style.main}>
      <h1>ToDo</h1>
      <Input setTodos={setTodos} />
      <Sort todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} currentPage={currentPage} />
      {showPagination && (
        <Pagination
          todos={todos}
          pages={pages}
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Main;
