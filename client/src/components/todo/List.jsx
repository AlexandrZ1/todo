import Item from "./Item";
import style from "./List.module.scss";

const List = ({ setTodos, currentPage, todos }) => {
  const handleDone = (setTodos, todo) => {
    if (!todo.done)
      setTodos((prevState) =>
        prevState.map((item) =>
          item.id === todo.id ? (item.done = true) && item : item
        )
      );
    else
      setTodos((prevState) =>
        prevState.map((item) =>
          item.id === todo.id ? !(item.done = false) && item : item
        )
      );
  };

  const handleDelete = (setTodos, todo) => {
    setTodos((prevState) => prevState.filter((item, i) => item.id !== todo.id));
  };

  return (
    <div className={style.container}>
      {todos.slice((currentPage - 1) * 5, currentPage * 5).map((item) => (
        <Item
          key={item.id}
          todo={item}
          setTodos={setTodos}
          handleDelete={handleDelete}
          handleDone={handleDone}
        />
      ))}
    </div>
  );
};

export default List;
