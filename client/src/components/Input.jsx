import { useState } from "react";
import style from "./Input.module.scss";
import { useValidation } from "../hooks/validation.hook";

const Input = ({ setTodos }) => {
  const [value, setValue] = useState("");
  const { isEmpty } = useValidation(value, "isEmpty");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEnterPress = (event, value) => {
    if (event.charCode === 13 && isEmpty === false) {
      setTodos((prevState) => [
        { done: false, text: value, date: Date.now(), id: Date.now(), visible:true },
        ...prevState,
      ]);
      setValue("");
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
