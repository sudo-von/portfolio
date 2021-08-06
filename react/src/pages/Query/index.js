/* Material-ui. */
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import Navbar from 'components/Navbar/'
import Profile from './Components/Profile/'
import QuestionCard from './Components/QuestionCard'
import Paginator from 'components/Paginator/'
/* Custom hooks. */
import { useFetch } from 'hooks/useFetch'

const Portfolio = () => {

  const profile = useFetch({url: 'users/username/von'})
  const questions = useFetch({ 
    url: 'questions/username/von',
    requiredPaginate: true,
    currentPage: 1,
    currentLimit: 6
  })

  return(
    <Container>
      <Navbar/>
      <Profile
        error={profile.error} 
        isLoading={profile.loading} 
        user={profile.data}/>
      <Paginator 
        error={questions.error} 
        page={questions.page}
        data={questions.data}
        handlePage={questions.handlePage}>
          { questions.data.results && questions.data.results.map(question => 
            <Grid item key={question.id} xs={12} sm={4} md={4}>
              <QuestionCard data={question}/>
            </Grid>
          )}
      </Paginator>
    </Container>
  )
}

export default Portfolio