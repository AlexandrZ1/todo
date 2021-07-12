import style from './Item.module.scss'

const Item = (props) => {
    return (<div className={style.container}>
        <div className={style.btn_done}></div>
        <div className={style.text}>{props.text}</div>
        <div className={style.date}>{props.date}</div>
        <div className={style.btn_delete}></div>
    </div>)
}

export default Item