/* Custom components. */
import Bold from 'components/Bold/'
import Image from 'components/Image/'
/* Material-ui.*/
import { Card as MaterialCard } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Card = ( { data : { title, image_url, tech_stack } }) =>
  <MaterialCard>
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
      { tech_stack.map(stack => 
        <Chip key={stack} style={styles.chip} label={stack}/>
      )}
    </CardContent>
  </MaterialCard>

const styles = {
  avatar : {
    backgroundColor: 'white'
  },
  chip: {
    margin: 2
  }
}

export default Card