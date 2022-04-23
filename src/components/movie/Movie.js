import { ContactsOutlined } from '@mui/icons-material'
import { Box, Card, Chip, Container, CssBaseline, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetailById } from '../../api'

const Movie = () => {
    const theme = useTheme()

    const imageUrl = "https://image.tmdb.org/t/p/original"

    const {movieId} = useParams()
    
    const [movieDetail, setMovieDetail] = useState([]);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
      getMovieDetailById(movieId)
        .then((data) => {
            setMovieDetail(data)
            setGenres(data.genres)
        })
    
     
    }, [movieId])
    console.log(movieDetail)
    
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
      marginTop: '4em'
    }}
  >
    <Container 
    >
        <Card
          sx={{
            width: '25em',
            maxWidth: {xs: 1, sm: '50%'},
            p: {xs:2, sm: 4},
            opacity: "75%",
            position: 'center'
          }}>
            <Typography align={'center'} color={'text.secondary'} fontWeight={700} variant={'h4'}>
             {movieDetail.title}
            </Typography>
            <Typography variant={'h6'}>
              {movieDetail.tagline}
            </Typography>
            <Typography variant='p'>
              {movieDetail.overview}
            </Typography>
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