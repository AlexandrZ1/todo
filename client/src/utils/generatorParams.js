export const getSortParams = (filterBy, typeSort) => {
  const resParams = {}
  if (filterBy === 2) resParams['filterBy'] = 'done'
  if (filterBy === 3) resParams['filterBy'] = 'undone'
  if (typeSort) resParams['order'] = 'desc'
  else resParams['order'] = 'asc'
  console.log(resParams)
  return resParams
}
