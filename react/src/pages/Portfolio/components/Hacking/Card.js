import React from 'react'
/* Material-ui components. */
import { Card as MaterialCard } from '@material-ui/core/'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
/* Styled-components. */
import { useTheme } from 'styled-components'

const Card = ( { data : { id, title, description, image, repository } }, ...props) => {

  /* Get theme context. */
  const theme = useTheme()

  const styles = {
    a: {
      textDecoration: 'none'
    },
    cardContent: {
      padding: 5, 
      height: 70
    },
    materialCard: {
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: 5, 
      alignItems: 'center',
      background: theme.card.background_color
    },
    title: {
      fontSize: 14, 
      fontWeight: 'bold', 
      color: theme.text.highlighted_color
    }, 
    subtitle: {
      fontSize: 10, 
      color: theme.text.color
    },
    cardMedia: {
      height: 60, 
      width: 60, 
      borderRadius: 2
    }
  }

  return (
    <a style={styles.a} href={repository} target="_blank">
      <MaterialCard style={styles.materialCard}>
        <CardContent style={styles.cardContent}>
          <p style={styles.title}>{title}</p>
          <p style={styles.subtitle}>{description}</p>
        </CardContent>
        <CardMedia image={image} title={description} style={styles.cardMedia}/>
      </MaterialCard>
    </a>
  )
}

export default Card