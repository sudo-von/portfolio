
/* Styled-components. */
import { ThemeProvider } from 'styled-components'
/* Themes. */
import { GlobalStyles } from 'themes/GlobalStyles'
import { lightTheme, darkTheme } from 'themes/Themes'
/* Custom components. */
import Router from './Router'
/* Custom hooks. */
import { useTheme } from 'hooks/useTheme'

const App = () => {

  const { theme } = useTheme()
  const themeMode = theme == 'light' ? darkTheme : lightTheme 

  return(
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <Router/>
    </ThemeProvider>
  )
}

export default App