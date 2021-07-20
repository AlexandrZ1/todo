import Input from "./Input";
import Sort from "./Sort";
import Pagination from "@material-ui/lab/Pagination";
import { useEffect, useState } from "react";
import usePagination from "../hooks/pagination.hook";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import useStyles from "./Main.styles";
import Item from "./Item";
import axios from "../api/index";
import { CircularProgress } from "@material-ui/core";
import { getSortParams } from "../utils/generatorParams";
import Alert from "@material-ui/lab/Alert";

const Main = () => {
  const clases = useStyles();
  const [todos, setTodos] = useState([]);
  const [filterBy, setFilterBy] = useState(1);
  const [typeSort, setTypeSort] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const {
    pages,
    showPagination,
    pageCount,
    currentPage,
    setCurrentPage,
    resTodos,
  } = usePagination(5, todos);

  const getTodos = async () => {
    try {
      responseMessage && setResponseMessage("");
      error && setError("");
      console.log(112312313123);
      setLoading(true);
      const response = await axios.get("v1/tasks/4", {
        params: getSortParams(filterBy, typeSort),
      });
      setLoading(false);
      setTodos(
        response.data.map((todo) => {
          return {
            done: todo.done,
            text: todo.name,
            date: todo.createdAt,
            id: todo.uuid,
          };
        })
      );
    } catch (error) {
      setLoading(false);
    }
  };

  //---------------------------Handlers-------------------------------
  const handleEdit = (event, todo, value) => {
    const isEnter = event.keyCode === 13;
    const isESC = event.keyCode === 27;

    async function editTodo() {
      try {
        if (isEnter && todo.text !== value) {
          setLoading(true);
          const response = await axios.patch(`v1/task/4/${todo.id}`, {
            name: value,
          });
          console.log(response);
          if (response.status === 200) setResponseMessage("Task edited");
          getTodos();
        }
      } catch (error) {
        if (error.response.status === 422)
          setError("Minimum task length 2 characters");
        if (error.response.status === 400) {
          setError("Task not created");
        }
      }
      setLoading(false);
    }

    editTodo();
    if (isESC || isEnter) return true;
  };

  const handleDone = (todo) => {
    async function doneTodo() {
      try {
        let response = null;
        setLoading(true);
        if (!todo.done) {
          response = await axios.patch(`v1/task/4/${todo.id}`, {
            done: true,
          });
        } else {
          response = await axios.patch(`v1/task/4/${todo.id}`, {
            done: false,
          });
        }
        getTodos();
        if (response.status === 200) setResponseMessage("Task updated");
      } catch (error) {
        if (error.response.status === 422)
          setError("Invalid fields in request");
        if (error.response.status === 400) {
          setError("Task not updated");
        }
      }
      setLoading(false);
    }

    doneTodo();
  };

  const handleDelete = (todo) => {
    async function deleteTodo() {
      try {
        setLoading(true);
        const response = await axios.delete(`v1/task/4/${todo.id}`);
        getTodos();
        if (response.status === 204) setResponseMessage("Task deleted");
      } catch (error) {
        if (error.response.status === 404) setError("Task not found");
      }
      setLoading(false);
    }
    deleteTodo();
  };

  const handleAddTodo = (event, value, setValue) => {
    const isEnter = event.charCode === 13;

    async function addTodo() {
      try {
        setLoading(true);
        const response = await axios.post("v1/task/4", {
          name: value,
          done: false,
        });
        setFilterBy(1);
        setValue("");
        setCurrentPage(1);
        setTypeSort(true);
        getTodos();
        if (response.status === 200) setResponseMessage("Task created");
      } catch (error) {
        if (error.response.status === 422)
          setError("Minimum task length 2 characters");
        if (error.response.status === 400) {
          setError("Task exist");
        }
      }
      setLoading(false);
    }

    if (isEnter) addTodo();
  };

  //---------------------------Effects-------------------------------

  useEffect(() => {
    getTodos();
  }, [filterBy, typeSort]);

  useEffect(() => {
    if (pageCount < currentPage) {
      setCurrentPage(pageCount);
    }
  }, [pages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterBy]);

  return (
    <Paper elevation={3} className={clases.main}>
      {loading && (
        <div className={clases.loader}>
          <CircularProgress color="" disableShrink />
        </div>
      )}
      <Typography className={clases.head} variant="h3">
        ToDo
      </Typography>

      <Input handleAddTodo={handleAddTodo} />
      {(error || responseMessage) && (
        <Alert
          className={clases.alert}
          onClose={() =>
            (error && setError("")) || (responseMessage && setResponseMessage(""))
          }
          severity={error ? "error" : "success"}
        >
          {error || responseMessage}
        </Alert>
      )}
      <Sort
        setFilterBy={setFilterBy}
        filterBy={filterBy}
        setTypeSort={setTypeSort}
        typeSort={typeSort}
      />
      <div className={clases.list}>
        {resTodos.map((item) => (
          <Item
            key={item.id}
            todo={item}
            handleDelete={handleDelete}
            handleDone={handleDone}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      {showPagination && (
        <Pagination
          className={clases.pagination}
          color="primary"
          count={pageCount}
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
          showFirstButton
          showLastButton
          hideNextButton={true}
          hidePrevButton={true}
          shape="rounded"
        />
      )}
    </Paper>
  );
};

export default Main;
