import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { makeStyles } from '@mui/styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { CalendarIcon, ArrowDown, FilterIcon, Plus } from './icons'



const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: '8px',
        transform: 'scale(0.6)',
        marginLeft: '10px'
    },
    text: {
        color: '#6D7287',
        width: '91px',
        height: '17px',
        display: 'inline',
        fontSize: '12px',
        lineHeight: '17px',
    },
    textx: {
        width: '122px',
        height: '17px',
        fontWeight: '600',
        fontSize: '14px',
        marginRight: '3px',
        color: '#101828',
    },
    textb: {
        width: '34px',
        marginRight: '10px',
        marginLeft: '-7px',
        textTransform: 'none'

    }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <Box
            sx={{
                boxSizing: 'border-box',
                display: 'flex',
                width: '100%',
                height: '70px',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #EAECF0',
                padding: '15px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 0,
                    gap: '20px',
                    width: '100%',
                    maxWidth: '339px',
                    height: '38px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 0,
                        gap: '20px',
                        maxWidth: '81px',
                        height: '38px',
                    }}
                >
                    <Button
                        variant="text"
                        disableRipple
                        startIcon={<ArrowBackIosIcon
                            className={classes.icon} />}
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#FFFFFF',
                            border: '1px solid #EAECF0',
                            color: '#000000',
                            marginTop: '6px'
                        }}
                    >
                        <span className={classes.textb}>Back</span>
                    </Button>
                </Box>
                <Box sx={{ ...classes.container }}>
                    <span className={classes.text}>Project Name  </span>
                    <span> / </span>
                    <span className={classes.textx}>Recent</span>
                    <span className={classes.textx}>Workflows</span>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 0,
                    gap: '12px',
                    maxWidth: '587.78px',
                    width: '100%',
                    height: '40px',
                }}  >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: '0px',
                        gap: '12px',
                        width: '175px',
                        height: '36px',
                        '@media (max-width: 768px)': {
                            width: '100%',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline',
                            width: '60px',
                            height: '20px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '20px',
                            textTransform: 'capitalize',
                            color: '#344054',
                        }}
                    >
                        Sort By:
                    </Box>

                    <Button
                        sx={{
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '10px 16px',
                            gap: '8px',
                            width: '112px',
                            height: '36px',
                            background: '#FFFFFF',
                            border: '1px solid #D0D5DD',
                            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                            borderRadius: '5px',
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 500,
                            fontSize: '14px',
                            lineHeight: '20px',
                            textTransform: 'none',
                            color: '#344054',
                        }} >
                        Activity <ArrowDown />
                    </Button>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        gap: '8px',
                        width: '115px',
                        height: '36px',
                        borderRadius: '5px',
                    }}
                > <Button
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 16px',
                        gap: '8px',
                        width: '113px',
                        height: '36px',
                        background: '#FFFFFF',
                        border: '1px solid #D0D5DD',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        borderRadius: '5px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '20px',
                        textTransform: 'none',
                        color: '#344054',
                    }}
                >

                        <CalendarIcon />    All Time
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '0px',
                        gap: '8px',
                        width: '115px',
                        height: '36px',
                        borderRadius: '5px',
                    }}
                > <Button
                    sx={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 16px',
                        gap: '8px',
                        width: '113px',
                        height: '36px',
                        background: '#FFFFFF',
                        border: '1px solid #D0D5DD',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                        borderRadius: '5px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '20px',
                        textTransform: 'none',
                        color: '#344054',
                    }}
                >
                        <FilterIcon />
                        Filters
                    </Button>
                </Box>
                <Button
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '9.68548px 12.9404px',
                        gap: '9.69px',
                        width: '158.78px',
                        height: '36px',
                        background: '#306CFE',
                        boxShadow: '0px 1.21068px 2.42137px rgba(16, 24, 40, 0.05)',
                        borderRadius: '5px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '20px',
                        textTransform: 'none',
                        color: '#FFFFFF',
                    }}
                ><Plus />
                    New Workflow
                </Button>

















            </Box>
        </Box>
    );
};

export default Navbar;
