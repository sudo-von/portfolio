import PropTypes from 'prop-types'
/* Custom components. */
import Bold from 'components/Bold'
/* Material-ui.*/
import Typography from '@material-ui/core/Typography'

const HackingTitle = ({ title }) =>
    <Typography variant='caption' display='block'>
        <Bold>{title}</Bold>
    </Typography>

HackingTitle.propTypes = {
    title: PropTypes.string,
}

export default HackingTitle