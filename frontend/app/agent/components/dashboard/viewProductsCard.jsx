import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(item) {
  const {description,name,price} = item.item
  console.log(description,name,price)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"

        /> */}
         
          {/* <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography> */}
        
        <CardContent >
          <Typography gutterBottom variant='body1'>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography>
            {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}