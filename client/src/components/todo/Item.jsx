import { useEffect, useRef, useState } from "react";
import { useValidation } from "../../hooks/validation.hook";
import style from "./Item.module.scss";

const Item = ({ todo, setTodos, handleDelete, handleDone }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(todo.text);
  const { inputValid } = useValidation(value, "isEmpty");
  const [visibleEdit, setVisibleEdit] = useState(false);

  const getDate = () =>
    new Date(todo.date).toLocaleDateString("ru-RU", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    });

  useEffect(() => {
    if (visibleEdit) ref.current.focus();
  }, [visibleEdit]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    if (visibleEdit) {
      ref.current.focus();
    } else {
      ref.current.blur();
      setVisibleEdit(false);
    }
  };

  const handleSwitchEdit = () => {
    setVisibleEdit(true);
  };

  const handleEdit = (event) => {
    if (inputValid && event.keyCode === 13) {
      setTodos((prevState) =>
        prevState.map((item) =>
          item.id === todo.id ? (item.text = value) && item : item
        )
      );
      setVisibleEdit(false);
    }
    if (event.keyCode === 27) {
      setValue(todo.text);
      setVisibleEdit(false);
    }
  };

  return (
    <div className={style.container}>
      <div
        className={todo.done ? style.btn_done : style.btn_not_done}
        onClick={() => handleDone(setTodos, todo)}
      ></div>
      {visibleEdit ? (
        <div className={style.text}>
          <input
            value={value}
            type="text"
            size="50"
            ref={ref}
            maxLength="30"
            onChange={(e) => handleChange(e)}
            onKeyDown={(e) => handleEdit(e)}
            onBlur={() => handleBlur()}
            onClick={() => handleSwitchEdit()}
          />
        </div>
      ) : (
        <div className={style.text} onClick={() => handleSwitchEdit()}>
          {todo.text}
        </div>
      )}

      <div className={style.date}>{getDate()}</div>
      <div
        className={style.btn_delete}
        onClick={() => handleDelete(setTodos, todo)}
      ></div>
    </div>
  );
};

export default Item;
