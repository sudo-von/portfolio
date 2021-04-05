import React, { useContext } from 'react'
/* Custom components. */
import ProfilePicture from '../../../components/ProfilePicture/'
import Container from './Container'
import Description from '../Description/'
import Form from '../Form/'
/* Custom hooks. */
import useUser from '../../../hooks/useUser'
import useQuery from '../../../hooks/useQuery'

const AboutMe = (props) => {

  const { username, name, profilePicture, description } = useUser()
  const [ initial, question, error, loading, handleInitial, handleQuestion, handleSubmit  ] = useQuery()

  if (error) {
    return <p>{error}</p>
  }

  return(
    <Container>
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