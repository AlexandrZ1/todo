import { useMemo, useState } from "react";

const usePagination = (count, rowsVisibleCount) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = useMemo(() => {
    console.log(111111111111);
    return Math.ceil(count / rowsVisibleCount);
  }, [count, rowsVisibleCount]);

  const pages = useMemo(() => {
    const value = Array.from(new Array(pageCount), (_, k) => k + 1);
    return value;
  }, [pageCount]);

  const showPagination = useMemo(() => {
    return count > rowsVisibleCount;
  }, [count, rowsVisibleCount]);

  return {
    pages,
    showPagination,
    pageCount,
    currentPage,
    setCurrentPage
  };
};

export default usePagination;
