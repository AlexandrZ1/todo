import { useState } from "react";
import style from "./Input.module.scss";
import { useValidation } from "../hooks/validation.hook";

const Input = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");
  const { isEmpty } = useValidation(value, "isEmpty");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={style.input}>
      <input
        maxLength="30"
        value={value}
        type="text"
        size="50"
        placeholder="I wont to..."
        onKeyPress={(e) => {
          handleAddTodo(e, isEmpty, value, setValue);
        }}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
