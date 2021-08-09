import PropTypes from 'prop-types'
/* Material-ui.*/
import Typography from '@material-ui/core/Typography'

const ExperiencieTitle = ({ title }) =>
    <Typography variant='caption' color="textPrimary">{title}</Typography>

ExperiencieTitle.propTypes = {
    title: PropTypes.string,
}

export default ExperiencieTitle