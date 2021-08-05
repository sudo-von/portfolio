/* Custom components. */
import Bold from 'components/Bold/'
import Reactions from '../Reactions'
/* Material-ui.*/
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const QuestionCard = ( { data : { id, question, creation_date, answer, reactions } }) =>
  <Card>
    <CardContent>
      <Typography component="h6" variant="h6">
        <Bold>“{question}”</Bold>
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        <small>{creation_date}</small>
      </Typography>
      <Typography variant="body2" color="textSecondary">{answer.answer}</Typography>
      <Reactions questionID={id} data={reactions}/>
    </CardContent>
  </Card>

export default QuestionCard