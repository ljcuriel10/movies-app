import React, { useEffect, useState } from 'react';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import { getPopular } from '../../api';
import { Card,CardActionArea, CardMedia, CardContent, Rating, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const Popular = () => {

    const [ popular, setpopular ] = useState([])
    const imageUrl = "https://image.tmdb.org/t/p/original"

    useEffect(()=> {
        getPopular()
            .then((data) => {
                setpopular(data);
            });
    }, []);
    console.log(popular)
  return (
    <Container sx={{marginTop: '5em'}}>
        <Typography variant='h2' fontWeight={'bold'} >Popular</Typography>
        {popular.map((movie) => (
      <Card key={movie.id} raised sx={{ maxWidth: 345, display: "inline-flex", minHeight:650, margin:'.25em', justifyContent:'center' }}>
      <CardActionArea LinkComponent={'a'} href={`/movie/${movie.id}`} >
        <CardMedia
          component={'img'}
          alt={`${movie.title}`}
          image={`${imageUrl}${movie.poster_path}`}
         />
         <CardContent sx={{padding: '1em'}}>
         <Typography variant={'h6'} fontWeight='bold'>{movie.title}</Typography>
         <Typography>
           {movie.release_date}
         </Typography>
         <Typography> Rating: {movie.vote_average} / 10 </Typography>
         <Rating name='read-only' value={movie.vote_average} max={10} precision={0.1} readOnly />
        
         </CardContent>
         </CardActionArea>
      </Card>
    ))}     
    </Container>
  )
}

export default Popular