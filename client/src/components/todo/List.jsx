import Item from './Item'
import style from './List.module.scss'

const List = () => {
    return (<div className={style.container}>
        <Item text='Купить хлеб' date='10.07.21'/>
        <Item text='Купить хлеб' date='10.07.21'/>
        <Item text='Купить хлеб' date='10.07.21'/>
        <Item text='Купить хлеб' date='10.07.21'/>
        <Item text='Купить хлеб' date='10.07.21'/>
    </div>)
}

export default List