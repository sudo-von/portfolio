import React, {useState, useEffect} from 'react'
/* Custom components. */
import ProfilePicture from '../ProfilePicture/'
import Container from './Container'
import Description from '../Description/'
import Form from '../Form/'
/* Adapters. */
import { getData } from '../../../adapters/'

const AboutMe = () => {

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [description, setDescription] = useState([])
  const [ isFetching, setFetching ] = useState(true)

  useEffect(() => {
    
    const id = `60603a5aaa037f0008ed81f9`
    const url = `/users/${id}`
    
    getData(url)
      .then(user => {
        setName(user.name)
        setUsername(user.username)
        setProfilePicture(user.profile_picture)
        setDescription(user.description)
      })
      .catch(err => {
        console.log(err)
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