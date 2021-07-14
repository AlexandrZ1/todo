import Item from "./Item";
import style from "./List.module.scss";

const List = ({ todos, setTodos, currentPage }) => {
  const handleDone = (setTodos, todo) => {
    if (!todo.done) {
      setTodos((prevState) =>
        prevState.map((item) => {
          if (item.id === todo.id) {
            item.done = true;
            return item;
          }
          return item;
        })
      );
    } else {
      setTodos((prevState) =>
        prevState.map((item) => {
          if (item.id === todo.id) {
            item.done = false;
            return item;
          }
          return item;
        })
      );
    }
  };

  const handleDelete = (setTodos, todo) => {
    setTodos((prevState) => prevState.filter((item, i) => item.id !== todo.id));
  };
  console.log("Current",currentPage);
  return (
    <div className={style.container}>
      {todos
        .filter((item) => item.visible)
        .slice((currentPage - 1) * 5, currentPage * 5)
        .map((item) => (
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
