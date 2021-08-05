/* Custom components. */
import Bold from 'components/Bold/'
/* Material-ui.*/
import { Card as MaterialCard, CardHeader } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'

import Typography from '@material-ui/core/Typography'

const Card = ( { data : { question, creation_date, answer } }) =>
  <MaterialCard>
    <CardContent>
      <CardHeader
        title={<Bold>“{question}”</Bold>}
        subheader={<small>{creation_date}</small>}
      />
      <Typography gutterBottom>{answer.answer}</Typography>
    </CardContent>
  </MaterialCard>

export default Card