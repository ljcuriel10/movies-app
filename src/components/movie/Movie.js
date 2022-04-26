import { Box, Card, CardContent, Chip, Container, CssBaseline, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetailById, getReviews, getWatchProviders } from '../../api'

const Movie = () => {
    const theme = useTheme()

    const imageUrl = "https://image.tmdb.org/t/p/original"

    const {movieId} = useParams()
    
    const [ movieDetail, setMovieDetail ] = useState([]);
    const [ genres, setGenres ] = useState([]);
    const [ watchProviders, setWatchProviders ] = useState([]);
    const [ reviews, setReviews ] = useState([]);

    useEffect(() => {
      getMovieDetailById(movieId)
        .then((data) => {
            setMovieDetail(data)
            setGenres(data.genres)
        });
      
      getWatchProviders(movieId)
        .then(({results}) => {
            setWatchProviders(results)
        });

      getReviews(movieId)
        .then((data) => {
          setReviews(data)
        })
     
    }, [movieId])
    console.log(watchProviders)
    
  return (
    <>
        <CssBaseline />
         <Box
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundImage: `url(${imageUrl}${movieDetail.backdrop_path})`,
            minHeight: '100vh',
            marginTop: '4em',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: { xs: 'center', sm: 'flex-end' },
          }}
        >
        <Container 
          display={'flex'}
          justifyContent={{ xs: 'center', sm: 'flex-end' }} 
          sx={{marginBottom: '5em'}}
        >
            <Card
              sx={{
                width: '25em',
                maxWidth: {xs: 1, sm: '50%'},
                p: {xs:2, sm: 4},
                opacity: "85%",
                position: 'center'
              }}>
                <CardContent>
                  <Typography align={'center'}  fontWeight={700} variant={'h4'}>
                  {movieDetail.title}
                  </Typography>
                  <Typography variant={'h6'} color={'text.secondary'}>
                    {movieDetail.tagline}
                  </Typography>
                  <Typography variant='p'  >
                    {movieDetail.overview}
                  </Typography>
                </CardContent>
                {genres.map((genre) => (
                  <Chip key={genre.id} label={genre.name} color='success' variant='outlined' />
                ))}
              </Card>
          </Container>
      </Box>
    </>
  )
}

export default Movie