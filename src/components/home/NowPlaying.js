import { Card, Typography, CardMedia, CardContent, CardActionArea, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getNowPlaying } from '../../api';
import Header from './Header';




const NowPlaying = () => {
    
    const [nowPlaying, setNowPlaying ] = useState([])
    const imageUrl = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        getNowPlaying()
          .then((data) => {
             setNowPlaying(data.results)
          })
    }, [nowPlaying]);
    
    
  
  return (
    <>
    <Header />
    <Typography sx={{mt: "1em"}} variant={'h2'}>
      Now Playing
    </Typography>
    <br />
    {nowPlaying.map((movie) => (
      <Card key={movie.id} raised sx={{ maxWidth: 345, display: "inline-flex", minHeight:650, margin:'.25em', alignContent:'center' }}>
      <CardActionArea LinkComponent={'a'} href={`/movie/${movie.id}`} >
        <CardMedia
          component={'img'}
          alt={`${movie.title}`}
          image={`${imageUrl}${movie.poster_path}`}
         />
         <CardContent sx={{padding: '1em'}}>
         <Typography> Rating: {movie.vote_average} / 10 </Typography>
         <Rating name='read-only' value={movie.vote_average} max={10} precision={0.1} readOnly />
         </CardContent>
         </CardActionArea>
      </Card>
    ))}
    </>
  )
}

export default NowPlaying