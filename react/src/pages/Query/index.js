import React from 'react'
/* Custom components. */
import Profile from './Profile/Profile'
import Questions from './Questions/Questions'
import Navbar from '../../components/Navbar/'
/* Styles. */
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../themes/GlobalStyles'
import { lightTheme, darkTheme } from '../../themes/Themes'
import { useDarkMode } from '../../themes/useDarkMode'
/* Material-ui. */
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
/* React router. */
import { Link } from 'react-router-dom'

const Portfolio = () => <Link to='/' style={{textDecoration: 'none', marginRight: 20}}><h4>PORTAFOLIO</h4></Link>

const Query = () => {

  /* Theme hooks. */
  const [ theme, themeToggler ] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  return (  
    <ThemeProvider theme={themeMode}>      
      <GlobalStyles/>
      <Navbar theme={theme} themeToggler={themeToggler}>
        <Portfolio/>
      </Navbar>
      <Container maxWidth="lg" style={{padding: '0 20px'}}>
        <Grid container spacing={5}>
          <Profile/>
          <Questions/>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default Query