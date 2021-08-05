import { useState } from 'react'
/* Material-ui.*/
import Button from 'components/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
/* Assets. */
import { ReactComponent as Happy } from 'assets/svg/reactions/happy.svg'
import { ReactComponent as Cool } from 'assets/svg/reactions/cool.svg'
import { ReactComponent as Sad } from 'assets/svg/reactions/sad.svg'
import { ReactComponent as Mad } from 'assets/svg/reactions/mad.svg'
/* Custom components. */
import Alert from 'components/Alert'
/* Services. */
import { Request } from 'services/Request'

const Reactions = ({ data, questionID }) => {

    const [ reactions, setReactions ] = useState(data) 
    const [ error, setError ] = useState(null) 
    const { happy, cool, sad, mad } = reactions

    const handleReaction = async (reactionID) => {
      setError(null)
      try{
        const request = new Request(`questions/${questionID}/reaction/${reactionID}`)
        const req = await request.patch()
        const response = await req.data
        setReactions(response.reactions)
      }catch(error){
        setError('Ha ocurrido un error, intenta de nuevo más tarde')
      }
    }

    return(
      <ButtonGroup>
        { error && <Alert variant='outlined' severity="error">{error}</Alert>}
        <Button startIcon={<Happy/>} onClick={() => handleReaction('happy')}>{happy}</Button>
        <Button startIcon={<Cool/>} onClick={() => handleReaction('cool')}>{cool}</Button>
        <Button startIcon={<Sad/>} onClick={() => handleReaction('sad')}>{sad}</Button>
        <Button startIcon={<Mad/>} onClick={() => handleReaction('mad')}>{mad}</Button>
      </ButtonGroup>
    )
}

export default Reactions