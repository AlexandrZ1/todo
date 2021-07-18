import { IconButton, Paper, TextField, Typography } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { VALIDATE } from "../constants";
import { useInput } from "../hooks/input.hook";
import { useValidation } from "../hooks/validation.hook";
import CheckCircleOutlineTwoToneIcon from "@material-ui/icons/CheckCircleOutlineTwoTone";
import DeleteOutlineTwoToneIcon from "@material-ui/icons/DeleteOutlineTwoTone";
import useStyles from "./Item.styles";

const Item = ({ todo, handleDelete, handleDone, handleEdit }) => {
  const { value, setValue, handleChange } = useInput(todo.text);
  const { inputValid } = useValidation(value, VALIDATE.EMPTY);
  const [visibleEdit, setVisibleEdit] = useState(false);

  useEffect(() => {
    setValue(todo.text);
  }, [visibleEdit]);

  const handleBlur = () => {
    setVisibleEdit(false);
  };

  const handleSwitchEdit = () => {
    setVisibleEdit(true);
  };

  const clases = useStyles();

  return (
    <Paper elevation={3} className={clases.container}>
      <div className={clases.item}>
        <IconButton onClick={() => handleDone(todo)}>
          <CheckCircleOutlineTwoToneIcon
            className={todo.done && clases.success}
            color="secondary"
          />
        </IconButton>
        <div className={clases.text} onClick={() => handleSwitchEdit()}>
          {visibleEdit && (
            <TextField
              className={clases.input}
              size="small"
              variant="outlined"
              autoFocus={true}
              inputProps={{ maxLength: 25, value: value }}
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) =>
                handleEdit(e, todo, value, inputValid) && setVisibleEdit(false)
              }
              onBlur={() => handleBlur()}
            />
          )}
          {!visibleEdit && <Typography>{todo.text}</Typography>}
        </div>
        <Typography>
          {new Date(todo.date).toLocaleDateString("ru-RU", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          })}
        </Typography>
        <IconButton onClick={() => handleDelete(todo)}>
          <DeleteOutlineTwoToneIcon className={clases.delete} />
        </IconButton>
      </div>
    </Paper>
  );
};

export default Item;
