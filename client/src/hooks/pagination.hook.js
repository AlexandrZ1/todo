import { useMemo, useState } from "react";

const usePagination = (rowsVisibleCount, filterBy, typeSort, array) => {
  const [currentPage, setCurrentPage] = useState(1);
  const selectTodos = (array) => {
    if (filterBy === 1) return array.filter((_) => true);
    if (filterBy === 2) return array.filter((item) => item.done);
    if (filterBy === 3) return array.filter((item) => !item.done);
  };

  const sortTodos = (array) =>
    typeSort
      ? array.sort((a, b) => (a.date < b.date ? 1 : -1))
      : array.sort((a, b) => (a.date > b.date ? 1 : -1));
  
  const todos = sortTodos(selectTodos(array))
  const resTodos = sortTodos(selectTodos(array)).slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  const pageCount = useMemo(() => {
    return Math.ceil(todos.length / rowsVisibleCount);
  }, [todos.length, rowsVisibleCount]);

  const pages = useMemo(() => {
    return Array.from(new Array(pageCount), (_, k) => k + 1);
  }, [pageCount]);

  const showPagination = useMemo(() => {
    return todos.length > rowsVisibleCount;
  }, [todos.length, rowsVisibleCount]);

  return {
    pages,
    showPagination,
    pageCount,
    currentPage,
    setCurrentPage,
    resTodos,
  };
};

export default usePagination;
