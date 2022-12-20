import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import zIndex from '@mui/material/styles/zIndex';
import { flexbox } from '@mui/system';

export default function Statistics() {
    return (
        <Box
            sx={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
            }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 8 }} sx={{ maxWidth: "1000px" }}>
                {itemData.map((item) => (
                    <Grid item xs={2} sm={4} md={4}>
                        <Box component="img"
                            sx={{
                                margin: 'auto',
                                display: 'block',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                overflow: 'hidden',
                                zIndex: 1,
                            }}
                            src={item.img}
                            alt={item.title}
                        />

                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}

const itemData = [

    {
        img: '/assets/site.jpg',
        title: 'Camera',
        stats: 'X universidades'
    },
    {
        img: '/assets/contest.jpg',
        title: 'Coffee',
        stats: 'X equipos'
    },
    {
        img: '/assets/girls.jpg',
        title: 'Hats',
        stats: 'X mujeres'
    },
    {
        img: '/assets/cucei.jpg',
        title: 'Honey',
        stats: 'X mujeres'
    },
];