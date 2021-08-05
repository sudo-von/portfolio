import { useState } from 'react'
/* Material-ui. */
import Container from '@material-ui/core/Container'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './Components/Profile/'
import Questions from './Components/Questions/'
/* Custom hooks. */
import { useFetch } from 'hooks/useFetch'

const Portfolio = () => {

  /* Pagination hook. */
  const [ page, setPage ] = useState(1)
  const handlePage = (event, value) => setPage(value)
  /* Data. */
  const profile = useFetch('users/username/vons')
  const questions = useFetch(`questions/username/von?limit=6&offset=${6*(page-1)}`)
  
  return(
    <Container>
      <Navbar/>
      <Profile
        error={profile.error} 
        isLoading={profile.loading} 
        user={profile.data}/>
      <Questions 
        error={questions.error} 
        isLoading={questions.loading} 
        questions={questions.data} 
        page={page} 
        handlePage={handlePage}/>
    </Container>
  )
}

export default Portfolio