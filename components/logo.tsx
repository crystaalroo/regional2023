import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

const pages = ['Blog', 'Host', 'Participantes', 'Main();'];

function Logo() {
  return (
    <Box
    sx={{
      width: '100%',
      height: '100px',
      position: 'absolute',
      zIndex: 1,
      textAlign: 'center'
    }}
    >
      <Box sx={{
        zIndex: 1, 
        flexDirection: 'row',
        padding: 0,
        width: '100%',
        maxWidth: '800px',
        display: { xs: 'none', md: 'inline-block' }
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
            <CardContent>
              <Typography fontSize={'19px'} gutterBottom variant="body1" component="div" align='left'>
                REGIONAL ICPC MEXICO 2022
              </Typography>
            </CardContent>
              <CardMedia
                component="img"
                width="100%"
                image="/assets/icpcmx.png"
                alt="icpcmx"
              />
          </Card>
      </Box>
    </Box>
  );
}
export default Logo;
