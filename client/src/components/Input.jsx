import { useState } from "react";
import style from "./Input.module.scss";
import { useValidation } from "../hooks/validation.hook";

const Input = (props) => {
  const [value, setValue] = useState("");
  const { isEmpty } = useValidation(value, "isEmpty");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEnterPress = (event, value) => {
    if (event.charCode === 13 && isEmpty === false) {
      props.setTodos(
        props.todos.concat({ done: false, text: value, date: new Date() })
      );
      setValue('');
    }
  };

  return (
    <div className={style.input}>
      <input
        value={value}
        type="text"
        size="50"
        placeholder="I wont to..."
        onKeyPress={(e) => {
          handleEnterPress(e, value);
        }}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
