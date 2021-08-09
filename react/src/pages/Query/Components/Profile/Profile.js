import { Fragment } from 'react'
/* Custom components. */
import ProfilePicture from './ProfilePicture'
import ProfileUsername from './ProfileUsername'
import ProfileAchievements from './ProfileAchievements'
import ProfileForm from './ProfileForm'
/* High order components. */
import withLoading from 'hocs/withLoading'
import withError from 'hocs/withError'
import { Card, CardContent } from '@material-ui/core'

const Profile = ({ user }) => {
    
    const { id, profile_picture_url, username, name, achievements } = user

    return (
        <Card>
            <CardContent>
                <ProfilePicture src={profile_picture_url}/>
                <ProfileUsername name={name} username={username}/>
                <ProfileAchievements id={id} achievements={achievements}/>
                <ProfileForm/>
            </CardContent>
        </Card>
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

export default withError(withLoading(Profile, 'Cargando perfil...'), 'Algo salió mal al cargar el perfil...')