/* Custom components. */
import Bold from 'components/Bold/'
/* Material-ui.*/
import { Card as MaterialCard, CardHeader } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'

const Card = ( { data : { question, creation_date, answer } }) =>
  <MaterialCard>
    <CardContent>
      <Typography component="h6" variant="h6">
        <Bold>“{question}”</Bold><br/>
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        <small>{creation_date}</small>
      </Typography>
      <br/>
      <Typography variant="body2" color="textSecondary">{answer.answer}</Typography>
    </CardContent>
  </MaterialCard>

export default Card