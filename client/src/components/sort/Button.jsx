import classNames from "classnames";
import style from "./Button.module.scss";

const Button = ({ text, handleClick, idSelect, filterBy }) => {
  return (
    <div
      className={classNames(style.btn, filterBy===idSelect ? style.active : "")}
      onClick={handleClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
