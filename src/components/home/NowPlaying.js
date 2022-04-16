import { Card, Typography, Box, Container } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'

const movieMock = {
  bgImage: 'https://images.unsplash.com/photo-1566577134665-2c674085abf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  title: 'Sonic the Hedghog',
  subtitle:'Image is coming soon',
}


const NowPlaying = () => {
    const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${movieMock.bgImage})`,
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
              <Typography color={'text.secondary'} fontWeight={700} variant={'h4'}>
                {movieMock.title}
              </Typography>
              <Typography variant={'h6'}>
                {movieMock.subtitle}
              </Typography>
            </Card>
        </Container>
    </Box>
    
  )
}

export default NowPlaying