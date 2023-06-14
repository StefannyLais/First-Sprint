import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Folder } from './icons';

const DropDown = () => {
    const [open, setOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };
    const dropdownStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        gap: '4px',
        width: '223px',
        minHeight: '174px',
        height: isExpanded ? '320px' : '40px',
        overflowY: isExpanded ? 'auto' : 'hidden',
        transition: 'height 0.3s ease',
    };
    const ItemStyles = {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '24px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '8px', padding: '8px 12px',
        width: '223px',
        height: '40px',
        borderRadius: '6px',
        textTransform: 'none',
        color: '#667085',
    };
    const numberStyles = {
        width: '14px',
        height: '20px',
        color: '#98A2B3',
        fontSize: '12px',
        marginLeft: 'auto'
    }
    return (
        <Box>
            <Box
                style={dropdownStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Button sx={ItemStyles}> <Folder /> Orders  <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Product List 1  <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Product List 2  <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Product List 3  <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Product List 4 <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Product List 5  <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Product List 6 <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Product List 7  <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Product List 8 <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Product List 9 <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder /> Produc List 10 <span style={{ ...numberStyles }}>34</span></Button>
                <Button sx={ItemStyles}> <Folder />Product List 11<span style={{ ...numberStyles }}>34</span></Button>
            </Box>
            <Box sx={{ ...ItemStyles, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="./images/Circle.png" alt="Circle" style={{ width: '20px', height: '20px' }} />
                <Button sx={{ ...ItemStyles, paddingLeft: '0px' }}>
                    New Folder</Button>
            </Box>

        </Box>
    );
};

export default DropDown;
