import Button from "./Button";
import style from "./Sort.module.scss";
import ClassNames from "classnames";

const Sort = ({ idButton, setIdButton, typeSort, setTypeSort }) => {
  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <Button
          text="All"
          handleClick={() => setIdButton(1)}
          idButton={idButton}
          idSelect={1}
        />
        <Button
          text="Done"
          handleClick={() => setIdButton(2)}
          idButton={idButton}
          idSelect={2}
        />
        <Button
          text="Undone"
          handleClick={() => setIdButton(3)}
          idButton={idButton}
          idSelect={3}
        />
      </div>
      <div className={style.sorting_order}>
        <p>Sort by Date</p>
        <div
          className={ClassNames(style.btn, typeSort ? style.up : style.down)}
          onClick={() => setTypeSort(!typeSort)}
        ></div>
      </div>
    </div>
  );
};

export default Sort;
