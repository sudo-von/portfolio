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
  const [ initial, question, handleInitial, handleQuestion, handleSubmit ] = useQuery()

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