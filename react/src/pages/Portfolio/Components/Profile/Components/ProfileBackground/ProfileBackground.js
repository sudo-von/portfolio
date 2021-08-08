import PropTypes from 'prop-types'
/* Custom components. */
import Hidden from '@material-ui/core/Hidden'
/* Material ui. */
import Image from 'components/Image/'

const ProfileBackground = ({ src }) =>
    <Hidden only={['xs', 'sm']}>
        <Image borderRadius={5} src={src}/>
    </Hidden>

ProfileBackground.propTypes = {
    src: PropTypes.string
}

ProfileBackground.defaultProps = {
    src: 'https://images8.alphacoders.com/101/thumb-1920-1014794.jpg'
}

export default ProfileBackground