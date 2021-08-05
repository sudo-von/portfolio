import { useState } from 'react'

export const useTheme = () => {

  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light')

  const setStorage = (theme) => {
    window.localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  const toggleTheme = () => {
    if (theme === 'dark') {
      setStorage('light')
    } else {
      setStorage('dark')
    }
  }

  return {theme, toggleTheme}
}  