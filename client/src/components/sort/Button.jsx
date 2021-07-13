import style from './Button.module.scss'

const Button = ({text}) => {
    return (<div className={style.btn}><p>{text}</p></div>)
}

export default Button