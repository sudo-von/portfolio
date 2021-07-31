import { useEffect, useState } from 'react'

export const useTheme = () => {

  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'light')

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme','dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme','light')
      setTheme('light')
    }
  }

  return {theme, toggleTheme}
}  