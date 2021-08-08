import PropTypes from 'prop-types'
/* Custom components. */
import Small from 'components/Small'

const ProfilePhrase = ({ phrase }) =>
    <Small>{phrase}</Small>

ProfilePhrase.propTypes = {
    phrase: PropTypes.string
}

ProfilePhrase.defaultProps = {
    phrase: '“La única forma de hacer un gran trabajo, es amar lo que haces”.',
}

export default ProfilePhrase