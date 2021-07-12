import Input from './Input'
import Sort from './sort/Sort'
import List from './todo/List'
import Pagination from './Pagination'
import style from './Main.module.scss'
import { useState } from 'react'
const Main = () => {
    const [todos, setTodos] = useState([
        { done: false, text: "Купить хлеб!", date: "12.07.21" },
      ]);

    return (
        <div className={style.main}>
            <h1>ToDo</h1>
            <Input todos={todos} setTodos={setTodos}/>
            <Sort />
            <List />
            <Pagination />
        </div>
    )
}

export default Main