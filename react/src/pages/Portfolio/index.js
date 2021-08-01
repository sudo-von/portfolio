/* Material-ui. */
import Container from '@material-ui/core/Container'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './components/Profile'
import Projects from './components/Projects'

const Portfolio = () => 
  <Container>
    <Navbar/>
    <Profile/>
    <Projects/>
  </Container>

export default Portfolio