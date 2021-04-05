import React from 'react'
import { Card as MaterialCard } from '@material-ui/core/'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const Card = (props) => {
  
  const { initial, title, date } = props.data
  const answerTitle = props.data.answer.title

  return (
    <MaterialCard style={{marginBottom: 10}}>
      <CardContent>
        <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center'}}>
          <Avatar style={{marginRight: 20}}> {initial} </Avatar>
          <Typography color="textSecondary" gutterBottom>
          ❝ {title} ❞ <br/> {date}
          </Typography>
        </div>
        <Typography style={{marginTop: 20}}>
          {answerTitle}
        </Typography>
      </CardContent>
    </MaterialCard>
  )
}

export default Card