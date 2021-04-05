import React from 'react'
/* Custom components. */
import Small from '../../../components/Small/'
import HighlightedText from '../../../components/HighlightedText/'
/* Material-ui components. */
import { Card as MaterialCard } from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const Card = (props) => {
  
  const { initial, title, date } = props.data
  const answerTitle = props.data.answer.title

  return (
    <MaterialCard style={{marginBottom: 10}}>
      <CardContent>
        <div style={{marginTop: 10, display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
          <Avatar style={{marginRight: 20}}> {initial} </Avatar>
          <HighlightedText color="textSecondary" gutterBottom>
          ❝ {title} ❞ <br/> <Small style={{color: 'gray'}}>{date}</Small>
          </HighlightedText>
        </div>
        <Typography style={{marginTop: 20}}>
          {answerTitle}
        </Typography>
      </CardContent>
    </MaterialCard>
  )
}

export default Card