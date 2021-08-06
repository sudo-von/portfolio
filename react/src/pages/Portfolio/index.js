/* Material-ui. */
import Container from '@material-ui/core/Container'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './Components/Profile'
import Experiencie from './Components/Experiencie'
import Hacking from './Components/Hacking'

const Portfolio = () => 
  <Container>
    <Navbar/>
    <Profile/>
    <Experiencie/>
    <Hacking/>
  </Container>

export default Portfolio