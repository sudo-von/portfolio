import { Fragment } from 'react'
import PropTypes from 'prop-types'
/* Material-ui.*/
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const ExperiencieTechStack = ({ id, tech_stack }) =>
    <Fragment>
        <Typography variant='caption' display='block' color='textSecondary'>Tecnologías</Typography>
        { tech_stack && tech_stack.map(stack => 
            <Chip 
                key={`${id}-${stack}`} 
                size='small' 
                variant='outlined'
                style={styles.chip} 
                label={stack}
            />
        )}
    </Fragment>

const styles = {
  chip: {
    marginTop: 15,
    marginRight: 2
  }
}

ExperiencieTechStack.propTypes = {
    id: PropTypes.string,
    tech_stack: PropTypes.array
}

ExperiencieTechStack.defaultProps = {
    tech_stack: []
}


export default ExperiencieTechStack
