import { QUERY_PARAMS } from '../constants/constants'

export const getSortParams = (filterBy, sortBy) => {
  const resParams = {}
  if (filterBy === QUERY_PARAMS.done)
    resParams[QUERY_PARAMS.nameFilterBy] = QUERY_PARAMS.done
  else if (filterBy === QUERY_PARAMS.undone)
    resParams[QUERY_PARAMS.nameFilterBy] = QUERY_PARAMS.undone
  if (sortBy === QUERY_PARAMS.desc)
    resParams[QUERY_PARAMS.nameOrder] = QUERY_PARAMS.asc
  else resParams[QUERY_PARAMS.nameOrder] = QUERY_PARAMS.desc
  return resParams
}
