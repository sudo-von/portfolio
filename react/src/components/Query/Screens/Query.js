import React from 'react'
/* Custom components. */
import Profile from '../Profile/Profile'
import Navbar from '../../Shared/Navbar'
/* Styles. */
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../Themes/GlobalStyles'
import { lightTheme, darkTheme } from '../../Themes/Themes'
import { useDarkMode } from '../../Themes/useDarkMode'
/* Material-ui. */
import Container from '@material-ui/core/Container';

const Query = () => {

  /* Custom hooks. */
  const [ theme, themeToggler ] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (  
    <ThemeProvider theme={themeMode}>      
      <GlobalStyles/>
      <Navbar theme={theme} themeToggler={themeToggler}/>
      { /* Sections from the main page. */ }
      <Container maxWidth="lg" style={{padding: '0 20px'}}>
        <Profile/>
      </Container>
    </ThemeProvider>
  )
}

export default Query