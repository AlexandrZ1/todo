import Input from "./Input";
import Sort from "./sort/Sort";
import List from "./todo/List";
import Pagination from "./Pagination";
import style from "./Main.module.scss";
import { useState } from "react";
const Main = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className={style.main}>
      <h1>ToDo</h1>
      <Input todos={todos} setTodos={setTodos} />
      <Sort todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
      <Pagination todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Main;
