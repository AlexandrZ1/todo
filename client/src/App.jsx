import Main from './components/Main'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import useTheme from './App.theme'

const App = () => {
  const theme = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  )
}

export default App
