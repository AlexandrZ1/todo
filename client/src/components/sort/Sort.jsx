import Button from './Button'
import style from './Sort.module.scss'

const Sort = () => {
    return (<div className={style.container}>
        <div className={style.buttons}>
            <Button text='All' />
            <Button text='Done' />
            <Button text='Undone' />
        </div>
        <div className={style.sorting_order}>
            <p>Sort by Date</p>
            <div className={style.btn}>▲</div>
            <div className={style.btn}>&#9660;</div>
        </div>
    </div>)
}

export default Sort