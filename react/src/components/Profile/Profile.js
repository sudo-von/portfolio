import React, {useState, useEffect} from 'react'
/* Custom components. */
import ProfilePicture from './ProfilePicture'
import Container from './Container'
import Description from './Description'
import Form from './Form'
import Loader from '../Shared/Loader'

const AboutMe = () => {

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [description, setDescription] = useState([])
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    
    const id = '60603a5aaa037f0008ed81f9'
    const url = `http://localhost:80/users/${id}`
    fetch(url)
      .then(res => res.json())
      .then(user => {
        setName(user.name)
        setUsername(user.username)
        setProfilePicture(user.profile_picture)
        setDescription(user.description)
        setFetching(false)
      })
      .catch(err => {
        console.log(err)
        setFetching(false)
      })
  }, [])

  return(
    <Container>
      <ProfilePicture src={profilePicture}/>
      <Description name={name} username={username} description={description}/>
      <Form/>
    </Container>
  )
}

export default AboutMe