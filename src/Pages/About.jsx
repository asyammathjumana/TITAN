import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function About() {
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log('Form Submitted');
  };
  return (
    <Card sx={{ maxWidth:600,margin:'auto',marginTop:4,backgroundColor:"green" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography component="h1" variant="h5" align="center">
          Contact Us
        </Typography>
        <Box component="form" sx={{'&.MuiTextField-root':{m:1,width:'90%'},}}>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
