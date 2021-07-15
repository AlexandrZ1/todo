import Button from "./Button";
import style from "./Sort.module.scss";
import ClassNames from "classnames";

const Sort = ({ filterBy, setFilterBy, typeSort, setTypeSort }) => {
  const buttons=["All","Done","UnDone"]
  return (
    <div className={style.container}>
      <div className={style.buttons}>
        {buttons.map((item,i)=><Button
          text={item}
          handleClick={() => setFilterBy(i+1)}
          filterBy={filterBy}
          idSelect={i+1}
        />)}
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
