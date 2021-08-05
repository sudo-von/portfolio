/* Material-ui. */
import Grid from '@material-ui/core/Grid'
/* Custom components. */
import ProfilePicture from './ProfilePicture'
import Username from './Username'
import Achievements from './Achievements'
import Form from './Form'
/* High order components. */
import withLoading from 'hocs/withLoading'

const Profile = ({ user }) => {
    
    const { profile_picture_url, username, name, achievements } = user

    return (
        <Grid container display='flex' alignItems='center' justify='center' spacing={2} style={styles.grid.container}>
            <Grid item xs={6} sm={4} md={3}>
                <ProfilePicture src={profile_picture_url}/>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Username name={name} username={username}/>
                <Achievements achievements={achievements}/>
                <Form/>
            </Grid>
        </Grid>
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

export default withLoading(Profile, 'Cargando perfil...')