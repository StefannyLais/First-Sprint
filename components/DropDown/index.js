import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Folder } from '../icons';

import * as S from './styles'

export const DropDown = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };

    const handleMouseLeave = () => {
        setIsExpanded(false);
    };
  
    return (
        <Box>
            <Box
                style={S.dropdownStyles(isExpanded)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Button sx={S.ItemStyles}> <Folder /> Orders  <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Product List 1  <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Product List 2  <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Product List 3  <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Product List 4 <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Product List 5  <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Product List 6 <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Product List 7  <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Product List 8 <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Product List 9 <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder /> Produc List 10 <span style={{ ...S.numberStyles }}>34</span></Button>
                <Button sx={S.ItemStyles}> <Folder />Product List 11<span style={{ ...S.numberStyles }}>34</span></Button>
            </Box>
            <Box sx={{ ...S.ItemStyles, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="./images/Circle.png" alt="Circle" style={{ width: '20px', height: '20px' }} />
                <Button sx={{ ...S.ItemStyles, paddingLeft: '0px' }}>
                    New Folder</Button>
            </Box>

        </Box>
    );
};

