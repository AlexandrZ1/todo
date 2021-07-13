import Input from "./Input";
import Sort from "./sort/Sort";
import List from "./todo/List";
import Pagination from "./Pagination";
import style from "./Main.module.scss";
import { useState } from "react";
const Main = () => {
  const [todos, setTodos] = useState([]);
  const [indexPaginat, setindexPaginat] = useState(0)
  return (
    <div className={style.main}>
      <h1>ToDo</h1>
      <Input setTodos={setTodos} />
      <Sort todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} indexP={indexPaginat} setIndexP={setindexPaginat} />
      <Pagination todos={todos} setTodos={setTodos} indexP={indexPaginat} setIndexP={setindexPaginat} />
    </div>
  );
};

export default Main;
