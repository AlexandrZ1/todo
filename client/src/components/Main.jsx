import Input from './Input'
import Sort from './sort/Sort'
import List from './todo/List'
import Pagination from './Pagination'
const Main = () => {
    return (
        <div className="main">
            <h1>ToDo</h1>
            <Input />
            <Sort />
            <List />
            <Pagination />
        </div>
    )
}

export default Main