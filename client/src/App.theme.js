import { createTheme } from '@material-ui/core'

const useTheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#CCE6FF',
      },
      secondary: {
        main: '#DDDDDD',
      },
      success: {
        main: '#41BF7B',
      },
      error: {
        main: '#EA5F5F',
      },
    },
  })
  return theme
}

export default useTheme
