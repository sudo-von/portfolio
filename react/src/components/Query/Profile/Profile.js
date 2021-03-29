import React from 'react'
/* Custom components. */
import ProfilePicture from '../ProfilePicture/'
import Container from './Container'
import Description from '../Description/'
import Form from '../Form/'

const AboutMe = ({ profilePicture, name, username, description}) => {

  return(
    <Container>
      <ProfilePicture src={profilePicture}/>
      <Description name={name} username={username} description={description}/>
      <Form/>
    </Container>
  )
}

export default AboutMe