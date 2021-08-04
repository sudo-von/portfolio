/* Material-ui. */
import Container from '@material-ui/core/Container'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './components/Profile/'
import Questions from './components/Questions/'
/* Custom hooks. */
import { useFetch } from 'hooks/useFetch'

const Portfolio = () => {

  const { data, loading } = useFetch('GET', 'http://localhost:3000/users/username/von', {})
  
  return(
    <Container>
      <Navbar/>
      <Profile isLoading={loading} user={data}/>
      <Questions/>
    </Container>
  )
}

export default Portfolio