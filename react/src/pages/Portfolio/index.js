/* Material-ui. */
import Container from '@material-ui/core/Container'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './components/Profile'
import Experiencie from './components/Experiencie'
import Hacking from './components/Hacking'

const Portfolio = () => 
  <Container>
    <Navbar/>
    <Profile/>
    <Experiencie/>
    <Hacking/>
  </Container>

export default Portfolio