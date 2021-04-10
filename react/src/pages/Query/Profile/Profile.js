import React from 'react'
/* Custom components. */
import ProfilePicture from '../../../components/ProfilePicture/'
import Notification from '../../../components/Notification'
import Loader from '../../../components/Loader'
import Container from './Container'
import Description from '../Description/'
import Form from '../Form/'
/* Custom hooks. */
import useUser from '../../../hooks/useUser'
import useQuery from '../../../hooks/useQuery'

const AboutMe = (props) => {
  
  const { data, loading } = useUser()
  const [ state, handleInitial, handleQuestion, handleSubmit ] = useQuery()
  const { initial, question, loading, error, success } = state

  if(loading){
    return <Container><Loader/></Container>
  }
  
  return(
    <Container>
      {success &&
        <Notification message={success} status={"success"}/>
      }
      {error &&
        <Notification message={error} status={"error"}/>
      }
      <ProfilePicture
        src={profilePicture}
      />
      <Description 
        name={name} 
        username={username} 
        description={description}
      />
      { loading && 
        <p>Loading XD...</p>
      }
      <Form 
        initial={initial}      
        question={question}
        handleInitial={handleInitial}
        handleQuestion={handleQuestion}
        handleSubmit={handleSubmit}
      />
    </Container>
  )
}

export default AboutMe