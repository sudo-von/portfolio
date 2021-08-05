/* Material-ui.*/
import Button from 'components/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
/* Assets. */
import { ReactComponent as Happy } from 'assets/svg/reactions/happy.svg'
import { ReactComponent as Cool } from 'assets/svg/reactions/cool.svg'
import { ReactComponent as Sad } from 'assets/svg/reactions/sad.svg'
import { ReactComponent as Mad } from 'assets/svg/reactions/mad.svg'

const Reactions = ({ id, reactions : { happy, cool, sad, mad }, handleReaction }) =>
    <ButtonGroup variant='text'>
       <Button startIcon={<Happy/>} onClick={() => handleReaction(id,'happy')}>{happy}</Button>
       <Button startIcon={<Cool/>} onClick={() => handleReaction(id,'cool')}>{cool}</Button>
       <Button startIcon={<Sad/>} onClick={() => handleReaction(id,'sad')}>{sad}</Button>
       <Button startIcon={<Mad/>} onClick={() => handleReaction(id,'mad')}>{mad}</Button>
    </ButtonGroup>

export default Reactions