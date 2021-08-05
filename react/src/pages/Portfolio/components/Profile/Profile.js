/* Material ui. */
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
/* Animations. */
import Fade from 'react-reveal/Fade'
/* Custom components. */
import H1 from 'components/H1'
import H5 from 'components/H5'
import Bold from 'components/Bold/'
import Image from 'components/Image/'

const Profile = () =>
  <Fade left>
    <Grid container direction="row" alignItems="center" style={styles.grid}>
      <Grid item md={6}>
        <H1><Bold>Jesús Rodríguez</Bold></H1>
        <H5><Bold>Desarrollador web</Bold> y de <Bold>aplicaciones móviles</Bold></H5>
        <H5>Apasionado del <Bold>hacking ético</Bold></H5>
        <small className='accent'>“La única forma de hacer un gran trabajo, es amar lo que haces”.</small>
      </Grid>
      <Grid item md={6}>
        <Hidden only={['xs', 'sm']}>
          <Image borderRadius={5} src='https://images8.alphacoders.com/101/thumb-1920-1014794.jpg'/>
        </Hidden>
      </Grid>
    </Grid>
  </Fade> 

const styles = {
  grid: {
    marginTop: 100,
    marginBottom: 100
  }
}

export default Profile