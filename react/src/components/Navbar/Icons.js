/* Custom components. */
import Icon from 'components/Icon/'
/* Material-ui. */
import Box from '@material-ui/core/Box'
/* Assets. */
import { ReactComponent as Linkedin } from 'assets/svg/navbar/linkedin.svg';
import { ReactComponent as Twitter } from 'assets/svg/navbar/twitter.svg';
import { ReactComponent as Github } from 'assets/svg/navbar/github.svg';

const icons = [
  {
    name: 'Linkedin',
    href : 'https://www.linkedin.com/in/jes%C3%BAs-%C3%A1ngel-rodr%C3%ADguez-mart%C3%ADnez-84991a1b4/',
    svg : Linkedin
  },
  {
    name: 'Twitter',
    href : 'https://www.twitter.com/sudo_von',
    svg : Twitter
  },
  {
    name: 'Github',
    href : 'https://github.com/sudo-von',
    svg : Github
  }
]

const Icons = () =>
  <Box display='flex' alignItems='center'>
    { icons.map(icon =>
      <a href={icon.href} target='_blank' style={styles.a} title={icon.name} key={icon.name}>
        <Icon size={33} svg={<icon.svg/>}/>
      </a>
    )}
  </Box>

const styles = {
  a: {
    marginLeft: 10
  }
}

export default Icons