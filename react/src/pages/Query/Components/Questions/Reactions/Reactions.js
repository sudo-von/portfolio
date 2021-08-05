import { useState } from 'react'
/* Material-ui.*/
import Button from 'components/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
/* Assets. */
import { ReactComponent as Happy } from 'assets/svg/reactions/happy.svg'
import { ReactComponent as Cool } from 'assets/svg/reactions/cool.svg'
import { ReactComponent as Sad } from 'assets/svg/reactions/sad.svg'
import { ReactComponent as Mad } from 'assets/svg/reactions/mad.svg'

const Reactions = ({ questionID }) => {

    const [ reactions, setReactions ] = useState(props.reactions) 
    
    const handleReaction = async (reactionID) => {
        try{
          const request = await new Request(`questions/${questionID}/reaction/${reactionID}`)
          await request.patch()
          setReactions(true)
        }catch(error){
          alert(error)
        }
      }

      
    <ButtonGroup variant='text'>
       <Button startIcon={<Happy/>} onClick={() => handleReaction('happy')}>{happy}</Button>
       <Button startIcon={<Cool/>} onClick={() => handleReaction('cool')}>{cool}</Button>
       <Button startIcon={<Sad/>} onClick={() => handleReaction('sad')}>{sad}</Button>
       <Button startIcon={<Mad/>} onClick={() => handleReaction('mad')}>{mad}</Button>
    </ButtonGroup>
}

export default Reactions