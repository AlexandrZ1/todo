import Item from "./Item";
import style from "./List.module.scss";

const List = ({ todos, setTodos, indexP, setIndexP }) => {
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

  return (
    <div className={style.container}>
      {todos
        .filter((item) => item.visible)
        .map((item, i) => {
          console.log(i,indexP,todos);
          if (true) {
            return (
              <Item
                key={item.id}
                todo={item}
                setTodos={setTodos}
                handleDelete={handleDelete}
                handleDone={handleDone}
              />
            );
          }
        })}
    </div>
  );
};

export default List;
