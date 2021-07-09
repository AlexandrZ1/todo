import style from './Button.module.scss'

const Button = (props) => {
    return (<div className={style.btn}><p>{props.text}</p></div>)
}

export default Button