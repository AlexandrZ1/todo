import { Button, ButtonGroup, IconButton, Typography } from '@material-ui/core'
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone'
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone'
import useStyles from './Sort.styles'
const Sort = ({ filterBy, setFilterBy, typeSort, setTypeSort }) => {
  const buttons = ['All', 'Done', 'UnDone']
  const clases = useStyles()
  return (
    <div className={clases.sort}>
      <ButtonGroup color='secondary' aria-label='outlined primary button group'>
        {buttons.map((item, i) => (
          <Button
            key={i}
            onClick={() => setFilterBy(i + 1)}
            color={filterBy === i + 1 && 'primary'}
            variant='contained'>
            {item}
          </Button>
        ))}
      </ButtonGroup>
      <div className={clases.sorting_date}>
        <Typography>Sort by Date</Typography>
        <IconButton onClick={() => setTypeSort(!typeSort)}>
          {typeSort ? <ArrowDownwardTwoToneIcon /> : <ArrowUpwardTwoToneIcon />}
        </IconButton>
      </div>
    </div>
  )
}

export default Sort
