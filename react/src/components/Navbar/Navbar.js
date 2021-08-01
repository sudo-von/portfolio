import { useContext } from 'react'
/* Custom components. */
import Menu from 'components/Menu/'
import Toggler from 'components/Toggler/'
import Icons from './Icons'
/* Material ui components. */
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
/* Styled-components. */
import { ThemeContext } from 'styled-components'

const Navbar = () => {

  const theme = useContext(ThemeContext)

  const styles = {
    appBar : {
      backgroundColor : theme.body.background_color,
      boxShadow : 'none',
      paddingTop : 15,
      paddingBottom: 15
    }
  }

  return(
    <AppBar position='sticky' style={styles.appBar}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Menu/>
        <Box display='flex' alignItems='center'>
          <Icons/>
          <Toggler/>
        </Box>
      </Box>
    </AppBar>
  )
}

export default Navbar