import React from 'react'
import { Card as MaterialCard } from '@material-ui/core/'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { useTheme } from 'styled-components';

const Card = ({ data }) => {

  /* Get theme context. */
  const theme = useTheme();
  /* Destructuring props. */
  const { name, categories, img_url, github_url } = data;

  return (
    <a style={{textDecoration: 'none'}} href={github_url} target="_blank">
      <MaterialCard style={{ display: 'flex', justifyContent: 'space-between', padding: 5, alignItems: 'center', background: theme.card.background_color}}>
        <CardContent style={{padding: 5, height: 70}}>
          <p style={{ fontSize: 14, fontWeight: 'bold', color: theme.text.highlighted_color }}>{name}</p>
          <p style={{fontSize: 10, color: theme.text.color }}>{categories}</p>
        </CardContent>
        <CardMedia image={img_url} title={name} style={{ height: 60, width: 60, borderRadius: 2 }}/>
      </MaterialCard>
    </a>
  );
}

export default Card;