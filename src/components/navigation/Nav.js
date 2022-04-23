import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['home', 'Now Showing', 'Coming Soon']

const Nav = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    

  return (
    <AppBar position='fixed' sx={{opacity: '80%', backgroundColor: 'black'}}>
        <Container maxWidth='xl'>
            <Toolbar disableGutters>
                <Typography
                    variant='h6'
                    noWrap
                    component={'div'}
                    sx={{ mr:2, display: { xs: 'none', md: 'flex' } }}
                    fontWeight='bold'
                >
                    WeLoveMovies
                </Typography>

                <Box sx={{ flexGrow:1, diplay: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size='large'
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleOpenNavMenu}
                        color='inherit'
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                         <MenuItem component='a' href='/' onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>Home</Typography>
                        </MenuItem>
                        <MenuItem component='a' href='/' onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>Now Playing</Typography>
                        </MenuItem>
                        <MenuItem component='a' href='/comingSoon' onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>Coming Soon</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                <Typography
                    variant='h6'
                    noWrap
                    component='div'
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    WeLoveMovies
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button href='/' sx={{ my: 2, color: 'white', display: 'block' }}>
                        Home
                    </Button>
                    <Button href='/nowPlaying' sx={{ my: 2, color: 'white', display: 'block' }}>
                        Now Playing
                    </Button>
                    <Button href='/comingSoon' sx={{ my: 2, color: 'white', display: 'block' }}>
                        Coming Soon
                    </Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Nav