import { useState } from "react";
import style from "./Input.module.scss";
import { useValidation } from "../hooks/validation.hook";

const Input = ({ setTodos, setCurrentPage, setActive }) => {
  const [value, setValue] = useState("");
  const { isEmpty } = useValidation(value, "isEmpty");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEnterPress = (event, value) => {
    if (event.charCode === 13 && isEmpty === false) {
      setTodos((prevState) => [
        {
          done: false,
          text: value,
          date: Date.now(),
          id: Date.now(),
          visible: true,
        },
        ...prevState,
      ]);
      setActive(1)
      setValue("");
      setCurrentPage(1);
      setTodos((prevState) =>
        prevState.map((item) =>
          item.visible ? item : (item.visible = true && item)
        )
      );
    }
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
          handleEnterPress(e, value);
        }}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
