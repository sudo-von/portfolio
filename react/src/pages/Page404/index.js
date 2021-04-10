import React from 'react'
/* Custom components. */
import Navbar from '../../components/Navbar/'
import NavbarRoute from '../../components/Navbar/Components/NavbarRoute'
import HighlightedText from '../../components/HighlightedText/'
/* Material-ui. */
import Container from '@material-ui/core/Container'

const styles = {
  container: {
    height: '100%', 
    padding: '0 20px', 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyConter: 'center'
  },
  img: {
    marginTop: 20,
    borderRadius: 5,
    width: '60%',
    boxShadow: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'
  },
  highlightedText: {
    marginTop: 20,
    fontSize: 18
  }
}

const Page404 = ( { theme, themeToggler }) => {

  const src = 'https://i.pinimg.com/originals/66/e0/87/66e087560271fee2224eac6a335af2c3.gif'

  return(
    <div>      
      <Navbar theme={theme} themeToggler={themeToggler}>
        <NavbarRoute to='' name='Portfolio'/>
        <NavbarRoute to='Query' name='Query'/>
      </Navbar>
      <Container maxWidth="lg" style={styles.container}>
        <img style={styles.img} alt='Not found' src={src}/>
        <HighlightedText style={styles.highlightedText}>NOT FOUND...</HighlightedText>
      </Container>
    </div>
  )
  
}

export default Page404