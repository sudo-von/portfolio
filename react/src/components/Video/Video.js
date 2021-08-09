import PropTypes from 'prop-types'
/* Material-ui. */
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'

const Video = ({ src }) =>
    <CardActionArea>
        <CardMedia
            style={styles.cardMedia}
            component='iframe'
            src={src}
            title='title'
            controls
        />
    </CardActionArea>

const styles = {
    cardMedia : {
        height: 280,
        borderRadius: 2,
        border: 0
    }
}

Video.propTypes = {
    src: PropTypes.string
}

export default Video