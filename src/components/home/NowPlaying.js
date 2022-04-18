import { Card, Typography, Box, Container, CardMedia, CardContent, CardActionArea, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { getNowPlaying } from '../../api';
import { maxHeight } from '@mui/system';
const movieMock = {
  bgImage: 'https://images.unsplash.com/photo-1566577134665-2c674085abf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'Sonic the Hedgehog 2',
}


const NowPlaying = () => {
    const theme = useTheme();
    const [nowPlaying, setNowPlaying ] = useState([])
    const imageUrl = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        getNowPlaying()
          .then((data) => {
            console.log(data)
             setNowPlaying(data.results)
          })
    }, [nowPlaying]);
    
  
  
  return (
    <>
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
        bgcolor: 'alternate.main',
        display: 'flex',
        alignItems:'flex-end',
        justifyContent: {xs: 'center', sm:'flex-end'},
        minHeight: {xs:400, sm:500, md:600},
        filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
        borderRadius: '.75em'
      }}
    >
      <Container 
        display={'flex'}
        justifyContent={{xs:'center', sm: 'flex-end' }}>
          <Card
            sx={{
              width: 1,
              maxWidth: {xs: 1, sm: '50%'},
              p: {xs:2, sm: 4},
              opacity: "88%"
            }}>
              <Typography align={'center'} color={'text.secondary'} fontWeight={700} variant={'h3'}>
              Find your next favorite movie!
              </Typography>
              <Typography variant={'h6'}>
                WeLoveMovies is your source for finding reviews of movies in theatres near you.
              </Typography>
            </Card>
        </Container>
    </Box>
    <Typography sx={{mt: "1em"}} variant={'h2'}>
      Now Playing
    </Typography>
    <br />
    {nowPlaying.map((movie, {id} ) => (
      <Card key={id} sx={{ maxWidth: 345, display: "inline-flex", minHeight:650, margin:'.25em', }}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={`${movie.original_title}`}
          image={`${imageUrl}${movie.poster_path}`}
         />
         <Typography>Rating: {movie.vote_average} / 10</Typography>
         <Rating name='read-only' value={movie.vote_average} max={10} precision={0.1} readOnly/>
         </CardActionArea>
      </Card>
    ))}
    </>
  )
}

export default NowPlaying