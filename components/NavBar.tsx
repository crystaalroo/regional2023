import * as React from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const pages = ['Contacto', 'Host', 'Participantes', 'Main();']
const revPages = pages.map(x => x).reverse()

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null)
  }

  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center'
      }}
    >
      <AppBar
        position="static"
        sx={{
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px',
          borderColor: 'white',
          borderBottomStyle: 'solid'
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            padding: { md: '0 50px', xs: '0 10px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '1280px',
              display: 'flex'
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                top: 0,
                zIndex: 2,
                position: 'absolute',
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Card
                sx={{
                  width: '180px',
                  height: '240px',
                  border: '2px',
                  borderColor: 'white',
                  borderLeftStyle: 'solid',
                  borderRightStyle: 'solid',
                  borderBottomStyle: 'solid',
                  bgcolor: 'secondary.main'
                }}
              >
                <CardContent
                  sx={{
                    paddingTop: '12px',
                    paddingBottom: '8px'
                  }}
                >
                  <Typography
                    fontSize={'19px'}
                    gutterBottom
                    variant="body1"
                    component="div"
                    align="left"
                    color={'white'}
                  >
                    REGIONAL ICPC MEXICO 2022
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    padding: 0,
                    height: '167px',
                    width: '180px'
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: 'white',
                      height: '140px',
                      width: '140px',
                      margin: 'auto',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="/assets/icpcmx.png"
                      alt="icpcmx"
                      sx={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Box>
              </Card>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                flexBasis: 0
              }}
            />
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                flexBasis: 0,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <CardMedia
                component="img"
                image="/assets/icpcmx.png"
                alt="icpcmx"
                sx={{
                  width: '140px'
                }}
              />
            </Box>
            <Box
              sx={{
                flexDirection: 'row-reverse',
                flexGrow: 1,
                flexBasis: 0,
                display: { xs: 'flex', md: 'none' }
              }}
            >
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
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {revPages.map(page => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexDirection: 'row-reverse',
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' }
              }}
            >
              {pages.map(page => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href="/participants"
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default NavBar
