/* Material ui. */
import Grid from '@material-ui/core/Grid';
/* Animations. */
import Fade from 'react-reveal/Fade'
/* Custom components. */
import H1 from 'components/H1'
import H5 from 'components/H5'
import Bold from 'components/Bold/'
import Small from 'components/Small/'
import Image from 'components/Image/'

const Profile = () =>
  <Fade left>
    <Grid container direction="row" alignItems="center">
      <Grid item md={6}>
        <H1><Bold>Jesús Rodríguez</Bold></H1>
        <H5><Bold>Desarrollador web</Bold> y de <Bold>aplicaciones móviles</Bold></H5>
        <H5>Apasionado del <Bold>hacking ético</Bold></H5>
        <Small>“La única forma de hacer un gran trabajo, es amar lo que haces”.</Small>
      </Grid>
      <Grid item md={6}>
        <Image src='https://wallpapercave.com/wp/UoW5TET.jpg'/>
      </Grid>
    </Grid>
  </Fade> 

export default Profile