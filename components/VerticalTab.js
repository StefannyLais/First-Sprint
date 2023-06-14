import React, { useState } from 'react';
import { Box, MenuItem, Button } from '@mui/material';
import { Drafts, FolderPluss, Trash, Folder, Vector } from './icons';
import DropDown from './DropDown'

const VerticalTabs = () => {
    const [open, setOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleBoxClick = () => {
        setOpen(!open);
    };


    const menuItemStyles = {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '20px',
        color: '#344054',
    };
    const textStyles = {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '24px',
        color: '#2459DB',
        padding: '8px 12px'
    };
    const itemStyles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 12px',
        gap: '8px',
        width: '223px',
        height: '40px',
        borderRadius: '6px',
        textTransform: 'none',
        color: '#667085',
    }

    const numberStyles = {
        width: '14px',
        height: '20px',
        color: '#98A2B3',
        fontSize: '12px',
        marginLeft: 'auto'
    }

    return (
        <Box
            sx={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '15px',
                gap: '8px',
                width: '253px',
                background: '#F9FAFB',
                borderRight: '1px solid #EAECF0',
                '@media (max-width: 600px)': {
                    width: '100%',
                    height: 'auto',
                },
            }}
        >
            <Box
                sx={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '8px 12px',
                    gap: '8px',
                    width: '223px',
                    height: '40px',
                    background: '#FFFFFF',
                    border: '1px solid #D0D5DD',
                    borderRadius: '5px',
                    '@media (max-width: 600px)': {
                        width: '100%',
                    },
                    cursor: 'pointer',
                }}
                onClick={handleBoxClick}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '167px',
                        height: '24px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '24px',
                        color: '#101828',
                    }}
                >Project Name<Vector sx={{ marginLeft: 'auto' }} />

                </Box>
            </Box>
            {open && (
                <Box
                    sx={{
                        position: 'absolute',
                        marginTop: '8px',
                        width: '229px',
                        maxHeight: '243px',
                        overflowY: 'auto',
                        background: '#FFFFFF',
                        border: '1px solid #D0D5DD',
                        borderRadius: '5px',
                        zIndex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        padding: '4px 0px',
                        gap: '4px',
                        isolation: 'isolate',
                        background: '#FFFFFF',
                        border: '1px solid #EAECF0',
                        boxShadow:
                            '0px 7.95px 10.6px -2.65px rgba(16, 24, 40, 0.08), 0px 2.65px 3.975px -1.325px rgba(16, 24, 40, 0.03)',

                    }}
                >
                    <MenuItem sx={menuItemStyles}>Facilisis viverra a</MenuItem>
                    <MenuItem sx={menuItemStyles}>Faucibus at a</MenuItem>
                    <MenuItem sx={menuItemStyles}>Commodo blandit ultrices</MenuItem>
                    <MenuItem sx={menuItemStyles}>Et nibh egestas</MenuItem>
                    <MenuItem sx={menuItemStyles}>Vivamus amet neque</MenuItem>
                    <MenuItem sx={menuItemStyles}>Pulvinar aliquam</MenuItem>
                    <MenuItem sx={menuItemStyles}>Vel mauris proin</MenuItem>
                    <MenuItem sx={menuItemStyles}>At egestas suspensidsse</MenuItem>
                    <MenuItem sx={menuItemStyles}>Viate pretium massa</MenuItem>
                    <MenuItem sx={menuItemStyles}>Lorem ultrices proin</MenuItem>
                    <MenuItem sx={menuItemStyles}>Gravida odio placerat</MenuItem>
                    <MenuItem sx={menuItemStyles}>Ul ui hendreit</MenuItem>
                    <MenuItem sx={menuItemStyles}>Vel mauris proin</MenuItem>
                    <MenuItem sx={menuItemStyles}>At egestas suspensidsse</MenuItem>
                    <MenuItem sx={menuItemStyles}>Viate pretium massa</MenuItem>
                    <MenuItem sx={menuItemStyles}>Lorem ultrices proin</MenuItem>
                    <MenuItem sx={menuItemStyles}>Gravida odio placerat</MenuItem>
                    <MenuItem sx={menuItemStyles}>Ul ui hendreit</MenuItem>
                </Box>
            )}


            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '4px',
                    width: '223px',
                    height: '172px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '8px',
                        width: '223px',
                        height: '40px',
                        background: '#E8EEFF',
                        borderRadius: '5px',
                    }} >
                    <Box sx={{ ...textStyles }}>  View All       </Box>
                    <Box sx={{ fontSize: '10px', color: '#2459DB', padding: '8px 12px' }}>123</Box>
                </Box>
                <Button style={itemStyles}       >
                    <FolderPluss />
                    Active
                    <span style={{ ...numberStyles }}>34</span>
                </Button>
                <Button style={itemStyles} >
                    <Drafts />
                    Drafts
                    <span style={{ ...numberStyles }}>34</span>
                </Button>
                <Button style={itemStyles} >
                    <Trash />
                    Trash
                    <span style={{ ...numberStyles }}>34</span>
                </Button>
            </Box>
            <DropDown />

        </Box >





    );
};

export default VerticalTabs;
