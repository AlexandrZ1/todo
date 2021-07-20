import { useValidation } from "../hooks/validation.hook";
import { VALIDATE } from "../constants";
import { useInput } from "../hooks/input.hook";
import { TextField } from "@material-ui/core";
import useStyles from "./Input.styles";

const Input = ({ handleAddTodo }) => {
  const { value, setValue, handleChange } = useInput("");
  const clases = useStyles();
  return (
    <TextField
      className={clases.input}
      autoComplete="off"
      size="small"
      variant="outlined"
      color="primary"
      inputProps={{ maxLength: 25, value: value, placeholder: "I want to ..." }}
      onKeyPress={(e) =>
        handleAddTodo(e, value, setValue) && setValue("")
      }
      onChange={(e) => handleChange(e)}
      onBlur={() => setValue("")}
    />
  );
};

export default Input;
