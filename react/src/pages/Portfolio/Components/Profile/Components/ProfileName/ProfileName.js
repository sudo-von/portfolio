import PropTypes from 'prop-types'
/* Custom components. */
import H1 from 'components/H1'
import Bold from 'components/Bold/'

const ProfileName = ({ name }) =>
    <H1><Bold>{name}</Bold></H1>

ProfileName.propTypes = {
    name: PropTypes.string
}

ProfileName.defaultProps = {
    name: 'Jesús Rodríguez',
}

export default ProfileName