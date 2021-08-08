import PropTypes from 'prop-types'
/* Custom components. */
import Bold from 'components/Bold/'
import Image from 'components/Image/'
/* Material-ui.*/
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const ExperiencieCard = ( { data : { title, image_url, tech_stack } }) =>
  <Card>
    <CardHeader
      avatar={
        <Avatar style={styles.avatar}>
          <Image src={image_url}/>
        </Avatar>
      }
      title={
        <Bold>{title}</Bold>
      }
    />
    <CardContent>
      <Typography gutterBottom>Tecnologías</Typography>
      { tech_stack && tech_stack.map(stack => 
        <Chip key={stack} style={styles.chip} label={stack}/>
      )}
    </CardContent>
  </Card>

const styles = {
  avatar : {
    backgroundColor: 'white'
  },
  chip: {
    margin: 2
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