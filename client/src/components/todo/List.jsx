import Item from "./Item";
import style from "./List.module.scss";

const List = ( {todos, setTodos})=> {

  const handleDone = (setTodos, todo) => {
    if (!todo.done) {
      setTodos((prevState) =>
      prevState.map((item) =>
        item.id === todo.id ? (item.done = true)&&item : item
      ))
    }
  };

  const handleDelete = (setTodos, todo) => {
    setTodos((prevState)=>prevState.filter((item, i) => item.id !==todo.id));
  };

  return (
    <div className={style.container}>
      {todos.map((item) => (
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
