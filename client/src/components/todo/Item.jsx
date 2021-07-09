import style from './Item.module.scss'

const Item = (props) => {
    return (<div className={style.container}>
        <div className={style.btn_done}>&#10003;</div>
        <div className={style.text}>{props.text}</div>
        <div className={style.date}>{props.date}</div>
        <div className={style.btn_delete}>&#9421;</div>
    </div>)
}

export default Item