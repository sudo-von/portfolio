import React from 'react'
/* Custom components. */
import ProfilePicture from '../../../../components/ProfilePicture/'
import Container from './Container'
import Description from './Description'
import Title from '../Shared/Title'
import Small from '../Shared/Small'
/* Custom hooks. */
import useProfilePicture from '../../../../hooks/useProfilePicture/'

const styles = {
  small: {
    textAlign: 'center'
  }
}

const AboutMe = () => {

  const { profilePicture } = useProfilePicture()

  return(
    <Container>
      <ProfilePicture src={profilePicture}/>
      <Title>Jesús Rodríguez</Title>
      <Description/>
      <Small style={styles.small}>“Con sacrificio puede ser que logres algo,<br/>
      pero sin sacrificio es seguro que no lograrás nada”.</Small>
    </Container>
  )
}

export default AboutMe