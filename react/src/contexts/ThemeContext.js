import { createContext } from 'react'
/* Custom hooks. */
import { useTheme } from 'hooks/useTheme'
/* Themes. */
import { lightTheme, darkTheme } from 'config/Themes'

export const ThemeContext = createContext()

export const ThemeStore = ({ children }) => {

    const { theme, toggleTheme } = useTheme()
    const themeMode = theme == 'light' ? darkTheme : lightTheme 

    return(
        <ThemeContext.Provider 
            value={
                {
                    theme,
                    themeMode,
                    toggleTheme 
                }
            }>
                {children}
        </ThemeContext.Provider>
    )
}
