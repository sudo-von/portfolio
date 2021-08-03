/* Custom components. */
import Image from 'components/Image'

const ProfilePicture = ({ profile_picture_url }) =>
    <Image 
        style={styles.image} 
        borderRadius={20} 
        src={profile_picture_url}
    />

const styles = {
    image: {
    }
}

export default ProfilePicture