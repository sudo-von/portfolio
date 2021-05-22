import React from 'react'
/* Custom components. */
import ProfilePicture from '../../../../components/ProfilePicture/'
import Container from './Container'
import Description from './Description'
import Title from '../../../../components/Title/'
import Small from '../../../../components/Small/'
import Loader from '../../../../components/Loader/'
/* Custom hooks. */
import useUser from '../../../../hooks/useUser'

const styles = {
  small: {
    textAlign: 'center'
  }
}

const AboutMe = () => {

  const { user, loading } = useUser()
  
  if(loading){
    return (
      <Container>
        <Loader>Cargando perfil...</Loader>
      </Container>
    )
  }

  return(
    <Container>
      <ProfilePicture src={user.profilePicture}/>
      <Title>{user.name}</Title>
      <Description/>
      <Small style={styles.small}>“Con sacrificio puede ser que logres algo,<br/>
      pero sin sacrificio es seguro que no lograrás nada”.</Small>
    </Container>
  )
}

export default AboutMe