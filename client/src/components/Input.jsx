import style from "./Input.module.scss";
import { useValidation } from "../hooks/validation.hook";
import { VALIDATE } from "../constants";
import { useInput } from "../hooks/input.hook";
import { TextField } from "@material-ui/core";

const Input = ({ handleAddTodo }) => {
  const { value, setValue, handleChange } = useInput("");
  const { inputValid } = useValidation(value, VALIDATE.EMPTY);

  return (
    <TextField
      id="outlined-basic"
      size="small"
      onKeyPress={(e) => handleAddTodo(e, inputValid, value, setValue)}
      onChange={(e) => handleChange(e)}
      value={value}
      placeholder="I want to ..."
      variant="outlined"
      color="primary"
      inputProps={{ maxLength: 30 }}
    />
  );
};

export default Input;
