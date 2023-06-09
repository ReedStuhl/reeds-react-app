import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


export default function MediaCard(Props) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={Props.image}
        alt="loading..."
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Props.Typography}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Props.CardContent}
        </Typography>
        <Link className='cardlink' href={Props.Link} target="_blank">{Props.Link}</Link>
      </CardContent>
    </Card>
  );
}