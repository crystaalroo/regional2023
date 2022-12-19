import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';


function Footer() {
    return (
        <AppBar position="static" sx={{
            height: '200px',
            alignItems: 'center',
        }}>
            <Toolbar disableGutters sx={{
                width: '100%',
                height: '100%',
                maxWidth: '1280px',
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Box
                    component="img"
                    sx={{
                        width: '150pt',
                        objectFit: 'cover',
                        paddingLeft: '50px',
                    }}
                    src="/assets/icpcmx.png"
                    alt="icpcmx"
                />
                <Box
                    component="img"
                    sx={{
                        width: '180pt',
                        objectFit: 'cover',
                        paddingRight: '50px',
                    }}
                    src="/assets/itesologo.png"
                    alt="iteso"
                />

            </Toolbar>
        </AppBar>
    );
}
export default Footer;
