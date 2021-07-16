import Item from "./Item";
import style from "./List.module.scss";

const List = ({todos, handleDelete, handleDone,handleEdit }) => {
  return (
    <div
      className={style.container}
    >
      {todos.map((item) => (
        <Item
          key={item.id}
          todo={item}
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default List;
