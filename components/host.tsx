import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function Host() {
    return (
        <Box sx={{
            height: '500px',
            justifyContent: "center",
            border: '2px',
            borderColor: 'white',
            borderTopStyle: 'solid',
            width: '100%',
            display: 'grid',
            backgroundColor: 'blue'
        }}>
            <Box sx={{
                height: { sm: '250px', xs: 'auto' },
                alignItems: 'center',
                width: "100%",
                display: "flex",
                justifyContent: "center",
                maxWidth: '1280px',
                backgroundColor: 'green'
            }}>
                <Typography
                    variant='h4'
                    component="div"
                    align="center"
                    color={"white"}
                    sx={{
                        margin: 'auto 20px 20px 20px',
                        background: 'rgb(0, 0, 0, 0.4)',
                        display: 'block',
                    }}
                >
                    Organizadores
                </Typography>
            </Box>
            <Box sx={{
                height: { sm: '250px', xs: 'auto' },
                alignItems: 'center',
                border: '2px',
                width: "100%",
                display: "flex",
                justifyContent: 'space-between',
                flexDirection: { sm: 'row', xs: 'column' },
                backgroundColor: 'red',
                maxWidth: '1280px',
            }}>
                <Box
                    component="img"
                    sx={{
                        width: '150pt',
                        objectFit: 'cover',
                        padding: { sm: '0 0 0 50px', xs: '25px 0' },
                        display: 'flex'
                    }}
                    src="/assets/icpcmx.png"
                    alt="icpcmx"
                />
                <Box
                    component="img"
                    sx={{
                        width: '180pt',
                        objectFit: 'cover',
                        padding: { sm: '0 50px 0 0', xs: '25px 0' },
                    }}
                    src="/assets/iteso-vertical.png"
                    alt="iteso"
                />
            </Box>
        </Box>
    );
}
