import React from 'react';
import { Card as MaterialCard } from '@material-ui/core/';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { useTheme } from 'styled-components';

const Card = ({data}) => {

  /* Get theme context. */
  const theme = useTheme();
  /* Destructuring props. */
  const { name, technologies, url } = data;

  return (
    <Grid item xs={12} sm={6}>
      <MaterialCard style={{ display: 'flex', alignItems: 'center', padding: 5, width: '100%', background: theme.card_background}}>
        <CardMedia
          image={url}
          title={name}
          style={{ height: 60, width: 100, borderRadius: 2 }}
        />
        <CardContent>
          <p style={{ fontSize: 14, fontWeight: 'bold', color: theme.highlighted_text}}>{name}</p>
          <p style={{ fontSize: 10, color: theme.text }}>{technologies}</p>
        </CardContent>
      </MaterialCard>
    </Grid>
  );
}

export default Card;