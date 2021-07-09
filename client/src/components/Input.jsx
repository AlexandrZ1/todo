import style from './Input.module.scss'

const Input = () => {
    return (<div className={style.input}>
        <input type='text' size='100' placeholder='I wont to...'/>
    </div>)
}

export default Input