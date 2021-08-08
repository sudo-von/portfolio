import PropTypes from 'prop-types'
/* Custom components. */
import ExperiencieAvatar from './Components/ExperiencieAvatar'
import ExperiencieTitle from './Components/ExperiencieTitle'
import ExperiencieTechStack from './Components/ExperiencieTechStack'
/* Material-ui.*/
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

const ExperiencieCard = ( { data : { title, image_url, tech_stack } }) =>
  <Card>
    <CardContent>
      <Box display='flex' flexDirection='row' alignItems='center' style={styles.box}>
        <ExperiencieAvatar src={image_url}/>
        <ExperiencieTitle title={title}/>
      </Box>
      <ExperiencieTechStack tech_stack={tech_stack}/>
    </CardContent>
  </Card>


const styles = {
  box: {
    marginBottom: 20
  },
  chip: {
    marginTop: 15,
    marginRight: 2
  }
}

ExperiencieCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
    tech_stack: PropTypes.array
  })
}

ExperiencieCard.defaultProps = {
  data: {
    title: '',
    image_url: '',
    tech_stack: []
  }
}

export default ExperiencieCard