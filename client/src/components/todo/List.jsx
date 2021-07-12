import Item from "./Item";
import style from "./List.module.scss";

const List = (props) => {
  return (
    <div className={style.container}>
      {props.todos.map((item, i) => (
        <Item
          text={item.text}
          date={item.date.toLocaleDateString("ru-RU", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          })}
          todos={props.todos}
          setTodos={props.setTodos}
          index={i}
        />
      ))}
    </div>
  );
};

export default List;
