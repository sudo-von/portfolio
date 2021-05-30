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
  
  const { user, isLoading } = useUser()

  if(isLoading){
    return (
      <Container>
        <Loader>Cargando perfil...</Loader>
      </Container>
    )
  }
  
  return(
    <Container>
      <ProfilePicture
        src={user.profilePicture}
      />
      <Description 
        name={user.name} 
        username={user.username} 
        description={user.description}
      />
      <Form/>
    </Container>
  )
}

export default AboutMe