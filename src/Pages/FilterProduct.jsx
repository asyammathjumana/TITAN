import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid } from '@mui/material';

export default function FilterProduct() {

    const{catname}=useParams()
    console.log(catname,"catname")

    const[product,setProduct]=React.useState([])

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products/category/${catname}`)
        .then((res)=>{
            console.log(res,"res");
            setProduct(res.data.products)
        })
    .catch((error)=>{
        console.log(error);
     })
    },[])
    console.log(product,"productDetails")
  return (
    <>
    <Typography
    gutterButton
    variant="h4"
    component="div"
    sx={{color:"#040000", textAlign:"center",margin:"10px"}}>
      {catname}Products
    </Typography>
    <div
     style={{
      display:"flex",
      alignItems:"center",
      flexWrap:"wrap",
  margin:"25px",
  gap:"20px",
  justifyContent:"center"}}>

        {product.length>0? product?.map((item,i)=>{
         return(

    <Card sx={{ maxWidth: 345}}>
    <CardMedia
    sx={{height:140}}
    image={item.thumbnail}
    title="green iguana"
    />
    
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" sx={{color:"#bd3376"}}>
    {item.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {item.description}
      </Typography>
      
      <Typography variant="h4" color="text.secondary">
       Rs/-{item.price}
       </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
 )}) 
 :"No Data found For This Category"}
    </div>
   </>
      );
    }