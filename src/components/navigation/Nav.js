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
    <AppBar position='static' sx={{opacity: '80%', backgroundColor: 'black'}}>
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

                <Box>
                    <IconButton
                        size='large'
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleOpenNavMenu}
                        color='inherit'
                        sx={{ display: { xs:'flex', md: 'none'} }}
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
                        <MenuItem component='a' href='/popular' onClick={handleCloseNavMenu}>
                                <Typography textAlign='center'>Popular</Typography>
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
                <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'center' }}>
                    <Button href='/' sx={{ paddingRight:'5em', my: 2, color: 'white', display: 'block', fontWeight:'bold' }}>
                        Home
                    </Button>
                    <Button href='/popular' sx={{paddingRight:'5em', my: 2, color: 'white', display: 'block', fontWeight:'bold' }}>
                        Popular
                    </Button>
                    <Button href='/topRated' sx={{paddingRight:'5em', my: 2, color: 'white', display: 'block', fontWeight:'bold' }}>
                        Top Rated
                    </Button>
                    <Button href='/comingSoon' sx={{ my: 2, color: 'white', display: 'block', fontWeight:'bold' }}>
                        Coming Soon
                    </Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Nav