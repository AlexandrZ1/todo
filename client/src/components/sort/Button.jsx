import classNames from "classnames";
import style from "./Button.module.scss";

const Button = ({ text, active, handleClick }) => {
  return (
    <div
      className={classNames(style.btn, active ? style.active : "")}
      onClick={() => handleClick()}
    >
      <p>{text}</p>
    </div>
  );
};

export default Button;
