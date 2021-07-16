import { useEffect, useRef, useState } from "react";
import { VALIDATE } from "../../constants";
import { useInput } from "../../hooks/input.hook";
import { useValidation } from "../../hooks/validation.hook";
import style from "./Item.module.scss";

const Item = ({ todo, handleDelete, handleDone, handleEdit }) => {
  const ref = useRef(null);
  const { value, setValue, handleChange } = useInput(todo.text);
  const { inputValid } = useValidation(value, VALIDATE.EMPTY);
  const [visibleEdit, setVisibleEdit] = useState(false);

  useEffect(() => {
    setValue(todo.text);
    if (visibleEdit) ref.current.focus();
  }, [visibleEdit]);

  const handleBlur = () => {
    setVisibleEdit(false);
  };

  const handleSwitchEdit = () => {
    setVisibleEdit(true);
  };

  return (
    <div className={style.container}>
      <div
        className={todo.done ? style.btn_done : style.btn_not_done}
        onClick={() => handleDone(todo)}
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
            onKeyDown={(e) =>
              inputValid && handleEdit(e, todo, value) && setVisibleEdit(false)
            }
            onBlur={() => handleBlur()}
            onClick={() => handleSwitchEdit()}
          />
        </div>
      ) : (
        <div className={style.text} onClick={() => handleSwitchEdit()}>
          {todo.text}
        </div>
      )}

      <div className={style.date}>
        {new Date(todo.date).toLocaleDateString("ru-RU", {
          year: "2-digit",
          month: "2-digit",
          day: "2-digit",
        })}
      </div>
      <div
        className={style.btn_delete}
        onClick={() => handleDelete(todo)}
      ></div>
    </div>
  );
};

export default Item;
