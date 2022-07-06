import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import faceBookUser from '../sample/facebook';
import "../App.css"
export default function FaceBookCard() {
  return (
    <div className='card'>
    {
      faceBookUser.posts.map((post, key) => (
        <Card key={key} sx={{ maxWidth: 345, marginTop : 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={post.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      ))
    }
    </div>
  );
}
