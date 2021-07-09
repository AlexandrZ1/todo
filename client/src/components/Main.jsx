import Input from './Input'
import Sort from './sort/Sort'
import List from './todo/List'
import Pagination from './Pagination'
import style from './Main.module.scss'
const Main = () => {
    return (
        <div className={style.main}>
            <h1>ToDo</h1>
            <Input />
            <Sort />
            <List />
            <Pagination />
        </div>
    )
}

export default Main