/* Custom components. */
import Bold from 'components/Bold/'
import Icon from 'components/Icon/'
import Reactions from '../Reactions'
/* Material-ui.*/
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const QuestionCard = ( { data : { id, question, creation_date, answer, reactions }, handleReaction }) =>
  <Card>
    <CardContent>
      <Typography component="h6" variant="h6">
        <Bold>“{question}”</Bold><br/>
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        <small>{creation_date}</small>
      </Typography>
      <br/>
      <Typography variant="body2" color="textSecondary">{answer.answer}</Typography>
      <Reactions id={id} reactions={reactions} handleReaction={handleReaction}/>
    </CardContent>
  </Card>

export default QuestionCard