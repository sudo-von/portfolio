import PropTypes from 'prop-types'
/* Custom components. */
import H5 from 'components/H5'

const ProfileDescription = ({ children }) =>
    <H5>{children}</H5>

ProfileDescription.propTypes = {
    children: PropTypes.node.isRequired
}

export default ProfileDescription