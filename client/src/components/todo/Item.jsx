import { useState } from "react";
import { useValidation } from "../../hooks/validation.hook";
import style from "./Item.module.scss";

const Item = (props) => {
    const [value, setValue] = useState("");
    const { isEmpty } = useValidation(value, "isEmpty");
    const handleChange = (e) => {
    setValue(e.target.value);
  };
  

  const handleDone = (setTodos, index, todos) => {
    if (!todos[index].done) {
      setTodos(
        todos.map((item, i) =>
          i !== index ? item : { done: true, text: item.text, date: item.date }
        )
      );
    }
  };

  const handleDelete = (setTodos, index, todos) => {
    setTodos(todos.filter((todo) => todo !== todos[index]));
  };

  return (
    <div className={style.container}>
      <div
        className={
          props.todos[props.index].done ? style.btn_done : style.btn_not_done
        }
        onClick={() => handleDone(props.setTodos, props.index, props.todos)}
      ></div>
      <div className={style.text}>{props.text}</div>
      <div className={style.date}>{props.date}</div>
      <div
        className={style.btn_delete}
        onClick={() => handleDelete(props.setTodos, props.index, props.todos)}
      ></div>
    </div>
  );
};

export default Item;
