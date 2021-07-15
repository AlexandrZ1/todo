import { useEffect, useState } from "react";
import { VALIDATE } from "../constants";

export const useValidation = (value, validation) => {
  const [isEmpty, setEmpty] = useState(true);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    switch (validation) {
      case VALIDATE.EMPTY:
        value ? setEmpty(false) : setEmpty(true);
        break;
      default:
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty]);
  return {
    isEmpty,
    inputValid,
  };
};
