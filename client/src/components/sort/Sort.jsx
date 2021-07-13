import Button from "./Button";
import style from "./Sort.module.scss";
import ClassNames from "classnames";
import { useState } from "react";

const Sort = ({ todos, setTodos }) => {
  const [typeSort, setTypeSort] = useState(true);

  const handleAll = () => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.visible) {
          return item;
        } else {
          item.visible = true;
        }
        return item;
      })
    );
  };

  const handleDone = () => {
    setTodos((prevState) =>
      prevState.map((item) => {
        if (item.done) {
          if (!item.visible) {
            item.visible = true;
          }
        } else {
          item.visible = false;
        }
        return item;
      })
    );
  };

  const handleUnDone = () => {
    setTodos((prevState) =>
    prevState.map((item) => {
      if (!item.done) {
        if (!item.visible) {
          item.visible = true;
        }
      } else {
        item.visible = false;
      }
      return item;
    })
  );
  };
  const handleSortDate = () => {
    typeSort
      ? setTodos([...todos.sort((a, b) => (a.date > b.date ? 1 : -1))])
      : setTodos([...todos.sort((a, b) => (a.date < b.date ? 1 : -1))]);
    setTypeSort(!typeSort);
  };

  ClassNames(style.btn, style.down);
  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <Button text="All" handleClick={() => handleAll()} />
        <Button text="Done" handleClick={() => handleDone()} />
        <Button text="Undone" handleClick={() => handleUnDone()} />
      </div>
      <div className={style.sorting_order}>
        <p>Sort by Date</p>
        <div
          className={ClassNames(style.btn, typeSort ? style.up : style.down)}
          onClick={() => handleSortDate()}
        ></div>
      </div>
    </div>
  );
};

export default Sort;
