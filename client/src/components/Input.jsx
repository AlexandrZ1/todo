import { useValidation } from "../hooks/validation.hook";
import { VALIDATE } from "../constants";
import { useInput } from "../hooks/input.hook";
import { TextField } from "@material-ui/core";
import useStyles from "./Input.styles";

const Input = ({ handleAddTodo }) => {
  const { value, setValue, handleChange } = useInput("");
  const { inputValid } = useValidation(value, VALIDATE.EMPTY);
  const clases = useStyles();
  return (
    <TextField
      autoComplete="off"
      className={clases.input}
      id="outlined-basic"
      size="small"
      placeholder="I want to ..."
      variant="outlined"
      color="primary"
      inputProps={{ maxLength: 25,value:value }}
      onKeyPress={(e) => handleAddTodo(e, inputValid, value, setValue)}
      onChange={(e) => handleChange(e)}
      onBlur={() => setValue("")}
    />
  );
};

export default Input;
