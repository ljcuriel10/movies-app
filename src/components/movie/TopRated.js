import { Card, CardActionArea, CardContent, CardMedia, Container, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getTopRated } from '../../api';

const TopRated = () => {

    const [ topRatedMovies, setTopRatedMovies ] = useState([]);
    const imageUrl = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        getTopRated()
        .then((data) => {
            setTopRatedMovies(data);
        });

    }, []);

    console.log(topRatedMovies)

  return (
    <div>
      <Container sx={{ marginY: 5 }}>
        <Typography variant={'h2'} color='whitesmoke' fontWeight={'bold'}>Top Rated</Typography>
      
      {topRatedMovies.map((movie) => (
          <Card key={movie.id} sx={{ display: 'inline-flex', maxWidth:355, margin:1}}>
            <CardActionArea LinkComponent={'a'} href={`/movie/${movie.id}`}>
              <CardMedia 
                component={'img'}
                alt={`${movie.title}`}
                image={`${imageUrl}${movie.poster_path}`}
              />
              <CardContent>
                  <Typography variant='h5' fontWeight={'bold'}>
                    {movie.title}
                  </Typography>
                  <Typography>
                      {movie.tagline}
                  </Typography>
                  <Typography>Movie Rating Average: {movie.vote_average}</Typography>
                  <Rating value={movie.vote_average} max={10} precision={0.5} readOnly />
                  <Typography>
                      # of votes: {movie.vote_count}
                  </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      ))}
      </Container>
    </div>
  )
}

export default TopRated