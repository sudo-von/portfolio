import React from 'react'
/* Custom components. */
import ProfilePicture from './ProfilePicture'
import Container from './Container'
import Description from './Description'
import Title from '../Shared/Title'
import Small from '../Shared/Small'

const styles = {
  small: {
    textAlign: 'center'
  }
}

const AboutMe = () => 
  <Container>
    <ProfilePicture/>
    <Title>Jesús Rodríguez</Title>
    <Description/>
    <Small style={styles.small}>“Con sacrificio puede ser que logres algo,<br/>
    pero sin sacrificio es seguro que no lograrás nada”.</Small>
  </Container>

export default AboutMe