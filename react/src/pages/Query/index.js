/* Material-ui. */
import Container from '@material-ui/core/Container'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './Components/Profile/'
import Questions from './Components/Questions/'
/* Custom hooks. */
import { useFetch } from 'hooks/useFetch'

const Portfolio = () => {

  const profile = useFetch('http://localhost:3000/users/username/von')
  const questions = useFetch('http://localhost:3000/questions/username/von')
  
  return(
    <Container>
      <Navbar/>
      <Profile isLoading={profile.loading} user={profile.data}/>
      <Questions isLoading={questions.loading} questions={questions.data}/>
    </Container>
  )
}

export default Portfolio