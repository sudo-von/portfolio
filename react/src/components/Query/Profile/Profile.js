import React from 'react'
/* Custom components. */
import ProfilePicture from '../ProfilePicture/'
import Container from './Container'
import Description from '../Description/'
import Form from '../Form/'

const AboutMe = ({ profilePicture, name, username, description, initial, question, handleInitial, handleQuestion, handleSubmit}) => {

  return(
    <Container>
      <ProfilePicture src={profilePicture}/>
      <Description name={name} username={username} description={description}/>
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