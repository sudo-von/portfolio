import PropTypes from 'prop-types'
/* Custom components. */
import Image from 'components/Image'
/* Material-ui.*/
import Avatar from '@material-ui/core/Avatar'

const ExperiencieAvatar = ( { src } ) =>
    <Avatar style={styles.avatar} >
      <Image src={src}/>
    </Avatar>

const styles = {
  avatar : {
    backgroundColor: 'white',
    marginRight: 10
  }
}

ExperiencieAvatar.propTypes = {
  src: PropTypes.string
}

export default ExperiencieAvatar