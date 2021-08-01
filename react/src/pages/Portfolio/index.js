/* Material-ui. */
import Container from '@material-ui/core/Container'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Ctfs from './components/Ctfs'

const Portfolio = () => 
  <Container>
    <Navbar/>
    <Profile/>
    <Projects/>
    <Ctfs/>
  </Container>

export default Portfolio