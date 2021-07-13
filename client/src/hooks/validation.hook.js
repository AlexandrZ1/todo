import { useEffect, useState } from "react";

export const useValidation = (value, validation) => {
  const [isEmpty, setEmpty] = useState(true);
  const [inputValid, setInputValid] = useState(true);

  useEffect(() => {
      switch (validation) {
        case 'isEmpty':
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
    inputValid
  };
};
