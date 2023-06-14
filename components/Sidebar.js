import React from 'react';
import { Box, IconButton } from '@mui/material';
import { ChartIcon, HomeIcon, LayerIcon, Users, Settings, Buoy } from './icons';


const SideBar = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: '70px',
                left: '0px',
                top: '0.02px',
                background: '#FFFFFF',
                borderRight: '1px solid #EAECF0',
                '@media (max-width: 600px)': {
                    flexDirection: 'row',
                    width: '100%',
                    height: 'auto',
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: 0,
                    width: '100%',
                    height: '330px',
                }}
            >
                <Box
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 0,
                        width: '70px',
                        height: '70px',
                        background: '#FFFFFF',
                        borderBottom: '1px solid #EAECF0',
                        '@media (max-width: 600px)': {
                            width: '100%',
                            height: 'auto',
                        },
                    }}
                >  <div>
                        <img
                            src="/images/Union.png"
                            alt="Logo"
                            style={{
                                width: '25px',
                                height: 'auto',
                                color: '#306CFE',
                                position: 'relative',
                                top: 0,
                                left: 0,
                            }} />
                    </div>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '20px',
                        width: '70px',
                        height: '260px',
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="Home"
                        sx={{
                            color: '#667085',
                            width: '40px',
                            height: '40px',
                            borderRadius: '3.77778px',
                        }}
                    >
                        <HomeIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="Signal"
                        sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '3.77778px',
                            bgcolor: 'rgba(48, 108, 254, 0.05)',
                            color: 'blue'
                        }}
                    >
                        <ChartIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="Layers"
                        sx={{
                            color: '#667085',
                            width: '40px',
                            height: '40px',
                            borderRadius: '3.77778px',
                        }}
                    >
                        <LayerIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="Group"
                        sx={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '3.77778px',
                            color: '#667085'
                        }}
                    >
                        <Users />
                    </IconButton>
                </Box>
            </Box>


            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0px 0px',
                    width: '100%',
                    height: '175px',
                }}
            >
                <Box
                    sx={{ width: '30px', heigth: '30px', padding: '12px', gap: '105px' }}>
                    <IconButton
                        color='#667085'
                        aria-label="Button 1"
                    >
                        <Settings />
                    </IconButton>
                </Box>

                <Box
                    sx={{ width: '30px', heigth: '30px', padding: '12px', gap: '105px' }}>
                    <IconButton
                        color='#667085'
                        aria-label="Button 1">
                        <Buoy />
                    </IconButton>
                </Box>

                <IconButton
                    color="inherit"
                    aria-label="Button 3"
                    sx={{
                        width: '35px',
                        height: '35px',
                        padding: '0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '15px',
                        marginBottom: '10px',
                        '@media (max-width: 600px)': {
                            width: '30px',
                            height: '30px',
                        },
                    }}
                >
                    <img src="/images/Avatar.png" alt="Button 3" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default SideBar;
