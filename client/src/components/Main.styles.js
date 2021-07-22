import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    width: '550px',
    height: '640px',
    padding: '35px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    userSelect: 'none',
  },
  list: {
    width: '80%',
    height: '55%',
  },
  head: {
    flex: '0 0 10%',
  },
  pagination: {
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    '& :hover': {
      backgroundColor: theme.palette.primary,
    },
  },
  loader: {
    position: 'absolute',
    zIndex: '2',
    top: '50%',
  },
  alert: {
    marginTop: '5px',
    width: '80%',
  },
}))

export default useStyles
