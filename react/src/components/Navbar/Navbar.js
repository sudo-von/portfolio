/* Custom components. */
import Menu from 'components/Menu/'
import Toggler from 'components/Toggler/'
import Icons from './Icons'
/* Material ui components. */
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'

const Navbar = () =>
  <AppBar position='sticky' style={styles.appBar}>
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Menu/>
      <Icons/>
      <Toggler/>
    </Box>
  </AppBar>

const styles = {
  appBar : {
    backgroundColor : 'transparent',
    boxShadow : 'none',
    marginTop: 30,
    marginBottom: 30,
  }
}

export default Navbar