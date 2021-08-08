/* Material ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import ProfileName from './Components/ProfileName'
import ProfileDescription from './Components/ProfileDescription'
import ProfilePhrase from './Components/ProfilePhrase'
import ProfileBackground from './Components/ProfileBackground'
import Bold from 'components/Bold/'

const Profile = () =>
  <Grid container direction="row" alignItems="center" style={styles.grid}>
    <Grid item xs={12} md={6}>
      <ProfileName name='Jesús Rodríguez'/>
      <ProfileDescription><Bold>Desarrollador web</Bold> y de <Bold>aplicaciones móviles</Bold></ProfileDescription>
      <ProfileDescription>Apasionado del <Bold>hacking ético</Bold></ProfileDescription>
      <ProfilePhrase phrase='“La única forma de hacer un gran trabajo, es amar lo que haces”.'/>
    </Grid>
    <Grid item md={6}>
      <ProfileBackground src='https://images8.alphacoders.com/101/thumb-1920-1014794.jpg'/>
    </Grid>
  </Grid>

const styles = {
  grid: {
    marginTop: 100,
    marginBottom: 100
  }
}

export default Profile