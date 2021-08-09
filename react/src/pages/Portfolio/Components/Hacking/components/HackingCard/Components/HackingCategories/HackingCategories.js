import { Fragment } from 'react'
import PropTypes from 'prop-types'
/* Material-ui.*/
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'

const HackingCategories = ({ id, categories }) =>
    <Fragment>
        <Typography variant='caption' display='block' color='textSecondary'>Categorías</Typography>
        { categories && categories.map(category => 
            <Chip 
                key={`${id}-${category}`} 
                size='small' 
                variant='outlined'
                style={styles.chip} 
                label={category}
            />
        )}
    </Fragment>

const styles = {
  chip: {
    marginTop: 15,
    marginRight: 2
  }
}

HackingCategories.propTypes = {
    id: PropTypes.string,
    tech_stack: PropTypes.array
}

HackingCategories.defaultProps = {
    id: '',
    tech_stack: []
}


export default HackingCategories
