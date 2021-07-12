import style from './Pagination.module.scss'

const Pagination = () => {
    return (<div className={style.container}>
        <div className={style.prev}></div>
        <div className={style.steps}>
            <div className={style.number}>1</div>
        </div>
        <div className={style.next}></div>
    </div>)
}

export default Pagination