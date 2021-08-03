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

const Card = ( { data : { id, user_id, initial, message, question_date, answer } }) =>
  <MaterialCard>
    <CardHeader
      title={
        <Bold>{message}</Bold>
      }
    />
    <CardContent>
      <Typography gutterBottom>{question_date}</Typography>
      <Typography gutterBottom>{answer.message}</Typography>
    </CardContent>
  </MaterialCard>

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