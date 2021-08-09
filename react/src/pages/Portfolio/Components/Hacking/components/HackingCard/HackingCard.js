import PropTypes from 'prop-types'
/* Custom components. */
import HackingAvatar from './Components/HackingAvatar'
import HackingTitle from './Components/HackingTitle'
import HackingCategories from './Components/HackingCategories'
/* Material-ui.*/
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Box from '@material-ui/core/Box'
import { MicNone } from '@material-ui/icons'

const HackingCard = ( { data : { id, title, image_url, repository_url, categories } }) =>
  <a href={repository_url} target='_blank' style={styles.a}>
    <Card>
      <CardActionArea>
          <CardContent>
            <Box display='flex' flexDirection='row' alignItems='center' style={styles.box}>
              <HackingAvatar src={image_url}/>
              <HackingTitle title={title}/>
            </Box>
            <HackingCategories id={id} categories={categories}/>
          </CardContent>
      </CardActionArea>
    </Card>
  </a>


const styles = {
  a: {
    textDecoration: 'none'
  },
  box: {
    marginBottom: 20
  },
  chip: {
    marginTop: 15,
    marginRight: 2
  }
}

HackingCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    image_url: PropTypes.string,
    repository_url: PropTypes.string,
    categories: PropTypes.array
  })
}

HackingCard.defaultProps = {
  data: {
    id: '',
    title: '',
    image_url: '',
    repository_url: '',
    categories: []
  }
}

export default HackingCard