import React, { useEffect, useState } from 'react'
/* Custom components. */
import Profile from '../Profile/Profile'
import Navbar from '../../Shared/Navbar/'
import Loader from '../../Shared/Loader/'
/* Styles. */
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../../Themes/GlobalStyles'
import { lightTheme, darkTheme } from '../../Themes/Themes'
import { useDarkMode } from '../../Themes/useDarkMode'
/* Material-ui. */
import Container from '@material-ui/core/Container';
/* Adapters. */
import { getData } from '../../../adapters/'

const Query = () => {

  /* Theme hooks. */
  const [ theme, themeToggler ] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  /* Data hooks. */
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [description, setDescription] = useState([])
  const [isFetching, setFetching ] = useState(true)

  const [initial, setInitial] = useState('')
  const [question, setQuestion] = useState('')
  
  const handleInitial = e => {
      if (e.target.value.length <= 1) {
          setInitial(e.target.value)
      }
  }
  const handleQuestion = e => {
      if (e.target.value.length <= 300) {
          setQuestion(e.target.value)
      }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFetching(true)
  }

  
  useEffect(() => {
  
    const id = `60603a5aaa037f0008ed81f9`
    const url = `/users/${id}`
    
    getData(url)
      .then(user => {
        setProfilePicture(user.profile_picture)
        setName(user.name)
        setUsername(user.username)
        setDescription(user.description)
        setFetching(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [isFetching])

  return (  
    <ThemeProvider theme={themeMode}>      
      <GlobalStyles/>
      <Navbar theme={theme} themeToggler={themeToggler}/>
      <Container maxWidth="lg" style={{padding: '0 20px'}}>
        {isFetching ?
          <Loader/> :
          <Profile 
            username={username} 
            name={name} 
            profilePicture={profilePicture} 
            description={description}
            initial={initial}
            question={question}
            handleInitial={handleInitial}
            handleQuestion={handleQuestion}
            handleSubmit={handleSubmit}
            />
        }
      </Container>
    </ThemeProvider>
  )
}

export default Query