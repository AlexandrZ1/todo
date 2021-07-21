import { Button, ButtonGroup, IconButton, Typography } from '@material-ui/core'
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone'
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone'
import { QUERY_PARAMS } from '../constants/constants'
import useStyles from './Sort.styles'

const Sort = ({ filterBy, setFilterBy, sortBy, setSortBy }) => {
  const buttons = ['All', 'Done', 'UnDone']
  const params = [QUERY_PARAMS.all, QUERY_PARAMS.done, QUERY_PARAMS.undone]
  const classes = useStyles()
  return (
    <div className={classes.sort}>
      <ButtonGroup color='secondary' aria-label='outlined primary button group'>
        {buttons.map((item, i) => (
          <Button
            key={i}
            onClick={() => setFilterBy(params[i])}
            color={filterBy === params[i] ? 'primary' : 'inherit'}
            variant='contained'>
            {item}
          </Button>
        ))}
      </ButtonGroup>
      <div className={classes.sorting_date}>
        <Typography>Sort by Date</Typography>
        <IconButton
          onClick={() =>
            setSortBy((prevState) =>
              QUERY_PARAMS.asc === prevState
                ? QUERY_PARAMS.desc
                : QUERY_PARAMS.asc
            )
          }>
          {sortBy === QUERY_PARAMS.asc ? (
            <ArrowDownwardTwoToneIcon />
          ) : (
            <ArrowUpwardTwoToneIcon />
          )}
        </IconButton>
      </div>
    </div>
  )
}

export default Sort
