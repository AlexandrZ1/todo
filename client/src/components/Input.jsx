import style from "./Input.module.scss";
import { useValidation } from "../hooks/validation.hook";
import { VALIDATE } from "../constants";
import { useInput } from "../hooks/input.hook";

const Input = ({ handleAddTodo }) => {
  const { value, setValue, handleChange } = useInput("");
  const { inputValid } = useValidation(value, VALIDATE.EMPTY);

  return (
    <div className={style.input}>
      <input
        maxLength="30"
        value={value}
        type="text"
        size="50"
        placeholder="I wont to..."
        onKeyPress={(e) => {
          handleAddTodo(e, inputValid, value, setValue);
        }}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
