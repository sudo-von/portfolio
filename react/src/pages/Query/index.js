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

  const [ page, setPage ] = useState(1)
  const handlePage = (event, value) => {
    setPage(value)
  }
  const profile = useFetch('users/username/von')
  const questions = useFetch(`questions/username/von?limit=6&offset=${6*(page-1)}`)
  
  return(
    <Container>
      <Navbar/>
      <Profile isLoading={profile.loading} user={profile.data}/>
      <Questions questions={questions.data} handlePage={handlePage}/>
    </Container>
  )
}

export default Portfolio