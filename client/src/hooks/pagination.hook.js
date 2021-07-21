import { useEffect, useMemo, useState } from 'react'

const usePagination = (rowsVisibleCount, todos) => {
  const [currentPage, setCurrentPage] = useState(1)

  const resTodos = todos.slice(
    (currentPage - 1) * rowsVisibleCount,
    currentPage * rowsVisibleCount
  )

  const pageCount = useMemo(() => {
    return Math.ceil(todos.length / rowsVisibleCount)
  }, [todos.length, rowsVisibleCount])

  const pages = useMemo(() => {
    return Array.from(new Array(pageCount), (_, k) => k + 1)
  }, [pageCount])

  const showPagination = useMemo(() => {
    return todos.length > rowsVisibleCount
  }, [todos.length, rowsVisibleCount])

  useEffect(() => {
    if (pageCount < currentPage) {
      setCurrentPage(pageCount)
    }
  }, [pages])

  return {
    pages,
    showPagination,
    pageCount,
    currentPage,
    setCurrentPage,
    resTodos,
  }
}

export default usePagination
