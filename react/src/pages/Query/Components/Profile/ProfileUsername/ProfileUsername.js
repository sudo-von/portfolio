import PropTypes from 'react'
/* Custom components. */
import H5 from 'components/H5'
import Bold from 'components/Bold'

const ProfileUsername = ({ username, name }) =>
    <H5 style={styles.h5}>
        <Bold>
            @{username} / {name}
        </Bold>
    </H5>

const styles = {
    h5 : {
        textAlign: 'center'
    }
}

ProfileUsername.propTypes = {
    username: PropTypes.string,
    name: PropTypes.string
}

ProfileUsername.defaultProps = {
    username: '',
    name: ''
}

export default ProfileUsername