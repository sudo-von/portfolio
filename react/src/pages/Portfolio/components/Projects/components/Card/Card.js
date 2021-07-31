/* Custom components. */
import Bold from 'components/Bold/'
import Image from 'components/Image/'
/* Material-ui.*/
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

export default function RecipeReviewCard( { data : { title, image_url, tech_stack } }) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            <Image src={image_url}/>
          </Avatar>
        }
        title={<Bold>{title}</Bold>}
      />
      <CardContent>
        <Typography component="p">Tecnologías</Typography>
        { tech_stack.map((tech) => 
          <Chip label={tech}/>
        )}
      </CardContent>
    </Card>
  )
}