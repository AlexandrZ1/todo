export const useOutput = (idSelect, typeSort, array) => {
  const selectTodos = (array) => {
    if (idSelect === 1) return array.filter((_) => true);
    if (idSelect === 2) return array.filter((item) => item.done);
    if (idSelect === 3) return array.filter((item) => !item.done);
  };

  const sortTodos = (array) =>
    typeSort
      ? array.sort((a, b) => (a.date < b.date ? 1 : -1))
      : array.sort((a, b) => (a.date > b.date ? 1 : -1));

  const resTodos = sortTodos(selectTodos(array));
  return { resTodos };
};
