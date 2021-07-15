import classNames from "classnames";
import style from "./Button.module.scss";

const Button = ({ text, handleClick, idSelect, idButton }) => {
  return (
    
    <div
      className={classNames(style.btn, idButton===idSelect ? style.active : "")}
      onClick={handleClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
