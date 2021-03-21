import React from 'react'
import { Card as MaterialCard } from '@material-ui/core/'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { useTheme } from 'styled-components';

const Card = ({ data }) => {

  /* Get theme context. */
  const theme = useTheme();
  /* Destructuring props. */
  const { name, categories, url } = data;

  return (
    <MaterialCard style={{ display: 'flex', justifyContent: 'space-between', padding: 5, alignItems: 'center', background: theme.card_background}}>
      <CardContent style={{padding: 5}}>
        <p style={{ fontSize: 14, fontWeight: 'bold', color: theme.highlighted_text }}>{name}</p>
        <p style={{fontSize: 10, color: theme.text }}>{categories}</p>
      </CardContent>
      <CardMedia image={url} title={name} style={{ height: 60, width: 100, borderRadius: 2 }}/>
    </MaterialCard>
  );
}

export default Card;