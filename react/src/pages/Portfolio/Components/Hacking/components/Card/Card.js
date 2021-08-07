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

// TODO: Check if there is an array before to map.
const Card = ( { data : { title, repository_url, image_url, categories } }) =>
  <a style={styles.a} href={repository_url} target='_blank'>
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
        <Typography gutterBottom>Categorías</Typography>
        { categories.map(category => 
          <Chip key={category} style={styles.chip} label={category}/>
        )}
      </CardContent>
    </MaterialCard>
  </a>

const styles = {
  a : {
    textDecoration: 'none'
  },
  avatar : {
    backgroundColor: 'white'
  },
  chip: {
    margin: 2
  }
}

export default Card