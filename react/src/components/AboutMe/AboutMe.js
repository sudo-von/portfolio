import React, {useState, useEffect} from 'react'
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

const AboutMe = () => {

  const [profilePicture, setProfilePicture] = useState('')
  useEffect(() => {
    const id = '60603a5aaa037f0008ed81f9'
    const url = `http://localhost:80/users/${id}`
    fetch(url).then(res => res.json()).then(res => setProfilePicture(res.profile_picture)).catch(err => console.log(err))
  }, [])

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