import { createContext } from 'react'
/* Styled-components. */
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'
/* Themes. */
import GlobalStyles from 'components/GlobalStyles/'
/* Custom hooks. */
import { useTheme } from 'hooks/useTheme'
/* Themes. */
import { lightTheme, darkTheme } from 'config/themes'

export const ThemeContext = createContext()

export const ThemeStore = ({ children }) => {
  
    const { theme, toggleTheme } = useTheme()
    const themeMode = theme == 'light' ? darkTheme : lightTheme 

    return (
      <ThemeContext.Provider value={{theme, toggleTheme }}>
        <StyledComponentsProvider theme={themeMode}>
          <GlobalStyles/>
          {children}
        </StyledComponentsProvider>
      </ThemeContext.Provider>
  )
}