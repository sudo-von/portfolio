/* Material-ui. */
import Container from '@material-ui/core/Container'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './components/Profile/'
import Questions from './components/Questions/'

const Portfolio = () => 
  <Container>
    <Navbar/>
    <Profile/>
    <Questions/>
  </Container>

export default Portfolio