import PropTypes from 'prop-types'
/* Custom components. */
import Image from 'components/Image'
/* Material-ui components. */
import Box from '@material-ui/core/Box'

const ProfilePicture = ({ src }) =>
    <Box display='flex' justifyContent='center' alignItems='center' style={styles.box}>
        <Image
            height={200}
            width={200}
            borderRadius={100} 
            src={src}
        />
    </Box>

const styles = {
    box : {
        margin : 15
    }
}

ProfilePicture.propTypes = {
    src: PropTypes.string
}

export default ProfilePicture