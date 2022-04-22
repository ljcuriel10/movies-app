
import { Box, Typography, Container, Card, useTheme } from '@mui/material'
import React from 'react'

const Header = () => {
    const theme = useTheme();

  return (
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
    component={'div'}
     sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1em'}}
    >
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
  )
}

export default Header