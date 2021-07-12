import Button from './Button'
import style from './Sort.module.scss'
import ClassNames from 'classnames'

const Sort = () => {
    ClassNames(style.btn,style.down)
    return (<div className={style.container}>
        <div className={style.buttons}>
            <Button text='All' />
            <Button text='Done' />
            <Button text='Undone' />
        </div>
        <div className={style.sorting_order}>
            <p>Sort by Date</p>
            <div className={ClassNames(style.btn,style.down)}></div>
        </div>
    </div>)
}

export default Sort