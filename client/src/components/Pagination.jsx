import style from './Pagination.module.scss'

const Pagination = ({todos,setTodos,pages, pageCount, currentPage, setCurrentPage}) => {
    return (<div className={style.container}>
        <div className={style.prev} onClick={()=>setCurrentPage(1)}></div>
        <div className={style.steps}>
            {pages.map((item)=><div className={style.number} onClick={()=>setCurrentPage(item)}>{item}</div>
            )}
        </div>
        <div className={style.next} onClick={()=>setCurrentPage(pageCount)}></div>
    </div>)
}

export default Pagination