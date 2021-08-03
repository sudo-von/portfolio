/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Animations. */
import Fade from 'react-reveal/Fade'
/* Custom components. */
import ProfilePicture from './ProfilePicture/'
import Username from './Username/'
import Achievements from './Achievements/'
import Form from './Form/'
/* Custom hooks. */
import { useFetch } from 'hooks/useFetch'

const Profile = () => {

    const { data } = useFetch('GET', 'http://192.168.0.3:3000/users/von', {})
    const { profile_picture_url, username, name, achievements } = data
    
    return (
        <Fade left>
            <Grid container display='flex' alignItems='center' justify='center' spacing={2} style={styles.grid.container}>
                <Grid item xs={6} sm={4} md={3}>
                    <ProfilePicture profile_picture_url={profile_picture_url}/>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Username name={name} username={username}/>
                    <Achievements achievements={achievements}/>
                    <Form/>
                </Grid>
            </Grid>
        </Fade>
    )
}

const styles = {
    grid : {
        container : {
            marginTop: 50,
            marginBottom: 100
        }
    }
}

export default Profile