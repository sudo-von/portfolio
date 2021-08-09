import PropTypes from 'prop-types'
/* Material-ui.*/
import Typography from '@material-ui/core/Typography'

const HackingTitle = ({ title }) =>
    <Typography variant='caption' color='textPrimary'>{title}</Typography>

HackingTitle.propTypes = {
    title: PropTypes.string,
}

export default HackingTitle