import { Card, CardActionArea, CardMedia, CardContent, Rating, CssBaseline, Typography, Container } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { getUpcoming } from '../../api'

const ComingSoon = () => {
    const imageUrl = "https://image.tmdb.org/t/p/original"
    const [upcoming, setUpcoming] = useState([])


    useEffect(() => {
      getUpcoming()
      .then(({results}) => {
          setUpcoming(results);
      });
    }, [])
    console.log(upcoming[0])
    
  return (
    <>
    <CssBaseline />
    <Container>
    <Box sx={{backgroundColor: 'black'}}>
        <Typography variant='h2' fontWeight="bold" color="white" sx={{paddingTop: '1em'}}>Coming Soon</Typography>
        {upcoming.map((movie) => (
            <Card key={movie.id} raised sx={{ maxWidth: 345, display: "inline-flex", minHeight:650, margin:'.25em', alignContent:'center' }}>
      <CardActionArea LinkComponent={'a'} href={`/movie/${movie.id}`} >
        <CardMedia
          component={'img'}
          alt={`${movie.title}`}
          image={`${imageUrl}${movie.poster_path}`}
         />
         <CardContent sx={{padding: '.5em'}}>
         <Typography variant='h5'>{movie.title}</Typography>
         <Typography> Rating: {movie.vote_average} </Typography>
         <Rating value={movie.vote_average} precision={0.1} max={10} readOnly />
         </CardContent>
         </CardActionArea>
      </Card>
        ))}
    </Box>
    </Container>
    </>
  )
}

export default ComingSoon