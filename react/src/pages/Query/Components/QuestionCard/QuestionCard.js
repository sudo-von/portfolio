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
      <Typography variant="subtitle2">
        <Bold>“{question}” </Bold>
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {creation_date}
      </Typography>
      <Typography variant="body2" color="textSecondary" style={{marginTop: 5, marginBottom: 15}}>{answer.answer}</Typography>
      <Reactions questionID={id} data={reactions}/>
    </CardContent>
  </Card>

export default QuestionCard