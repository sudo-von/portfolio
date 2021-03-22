import React from 'react'
/* Material-ui. */
import { Card as MaterialCard } from '@material-ui/core/'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
/* Styled-components. */
import { useTheme } from 'styled-components'

const Card = ( { data : { name, technologies, src } } ) => {
  /* Get theme context. */
  const theme = useTheme()

  const styles = {
    materialCard: {
      display: 'flex', 
      alignItems: 'center', 
      padding: 5, 
      width: '100%', 
      background: theme.card.background_color
    },
    cardMedia: {
      height: 60,
      width: 60,
      borderRadius: 2
    },
    cardContent: {
      height: 70
    },
    title: { 
      fontSize: 14, 
      fontWeight: 'bold', 
      color: theme.text.highlighted_color
    },
    subtitle: {
      fontSize: 10, 
      color: theme.text.color
    }
  }
  
  return (
    <Grid item xs={12} sm={6}>
      <MaterialCard style={styles.materialCard}>
        <CardMedia
          image={src}
          title={name}
          style={styles.cardMedia}
        />
        <CardContent style={styles.cardContent}>
          <p style={styles.title}>{name}</p>
          <p style={styles.subtitle}>{technologies}</p>
        </CardContent>
      </MaterialCard>
    </Grid>
  )
}

export default Card