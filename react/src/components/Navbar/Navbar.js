import React from 'react'
/* Custom components. */
import Toggle from '../../themes/Toggler'
import Button from '../../components/Button'
import Navside from '../../components/Navside'
/* Material-ui components. */
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
/* Styled-components. */
import { useTheme } from 'styled-components'
/* Icons. */
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Navbar = ( { theme, themeToggler, children }) => {

  /* Style hook. */
  const currentTheme = useTheme()
  const styles = {
    appbar: {
      backgroundColor: currentTheme.navbar.background_color,
      boxShadow: 'none',
    },
    button: {
      color: currentTheme.text.color,
    },
    a: {
      margin: '0 20px 0 10px',
    },
    div: {
      padding: 0,
      margin: 0,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }
  
  return (  
    <AppBar position='sticky' style={styles.appbar}>
      <Container>
        <div style={styles.div}>
          <Navside/>
          <Toolbar style={{padding: 0, margin: 0}}>
            <a style={styles.a} href="https://www.twitter.com/sudo_von" target="_blank"><TwitterIcon/></a>
            <a style={styles.a} href="https://github.com/sudo-von" target="_blank"><GitHubIcon/></a>
            <a style={styles.a} href="https://www.linkedin.com/in/jes%C3%BAs-%C3%A1ngel-rodr%C3%ADguez-mart%C3%ADnez-84991a1b4/" target="_blank"><LinkedInIcon/></a>
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </Toolbar>
        </div>
      </Container>
    </AppBar>
  )
}

export default Navbar