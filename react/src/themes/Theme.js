import { useContext } from 'react'
/* Styled-components. */
import { ThemeProvider } from 'styled-components'
/* Themes. */
import { GlobalStyles } from 'themes/GlobalStyles'
/* Contexts. */
import { ThemeContext } from 'contexts/ThemeContext'

const Theme = ({ children }) => {
  
    const { themeMode } = useContext(ThemeContext)

    return (
        <ThemeProvider theme={themeMode}>
          <GlobalStyles/>
          {children}
        </ThemeProvider>
  )
}

export default Theme