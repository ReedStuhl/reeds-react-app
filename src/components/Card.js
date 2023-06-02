import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard(Props) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={Props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Props.Typography}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Props.CardContent}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Link</Button>
      </CardActions>
    </Card>
  );
}