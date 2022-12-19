import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { alignProperty } from '@mui/material/styles/cssUtils';
import Logo from './logo';

const pages = ['Blog', 'Host', 'Participantes', 'Main();'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{
      width: '100%',
      textAlign: 'center'
    }}>
    <AppBar position="static" sx={{
      zIndex:1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      }}>
        <Toolbar disableGutters sx={{
        width: '100%',
        maxWidth: '1280px',
        display: 'flex',
        }}>
          <Box sx={{
            width: '50%',
            top: 0,
            zIndex: 2,
            position: 'absolute',
            display: { xs: 'none', md: 'flex' },
            paddingLeft: '50px',
            }}>
            <Card sx={{
            width: '180px',
            height: '240px',
            border: '2px',
            borderColor: 'white',
            borderLeftStyle: 'solid',
            borderRightStyle: 'solid',
            borderBottomStyle: 'solid',
            }}>
              <CardContent sx={{paddingBottom: 0}}>
                <Typography fontSize={'19px'} gutterBottom variant="body1" component="div" align='left'>
                  REGIONAL ICPC MEXICO 2022
                </Typography>
              </CardContent>
              <Box sx={{
                // backgroundColor: 'yellow',
                padding: 0,
                height: '167px',
                width: '180px',
              }}>
                <Box sx={{
                  backgroundColor: 'white',
                  height: '140px',
                  width: '140px',
                  margin: 'auto',
                }}>
                  <CardMedia
                    component="img"
                    width="100%"
                    image="/assets/icpcmx.png"
                    alt="icpcmx"
                    sx={{
                      backgroundColor: 'red',
                      left: '50%',
                      top: '50%'
                    }}
                  />
                </Box>
              </Box>
            </Card>
          </Box>
          <Box sx={{ flexDirection: 'row-reverse', flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{
            width: '50%',
            flexDirection: 'row-reverse', 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            paddingRight: '50px',
            }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
    </AppBar>
    </Box>
  );
}
export default NavBar;
