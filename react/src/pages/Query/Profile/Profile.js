import React from 'react'
/* Custom components. */
import ProfilePicture from '../../../components/ProfilePicture/'
import Loader from '../../../components/Loader'
import Container from './Container'
import Description from '../Description/'
import Form from '../Form/'
/* Custom hooks. */
import useUser from '../../../hooks/useUser'

const AboutMe = () => {
  
  const { data, loading } = useUser()
  const { profilePicture, name, username, description } = data

  if(loading){
    return <Container><Loader>Cargando perfil...</Loader></Container>
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
      <Form/>
    </Container>
  )
}

export default AboutMe