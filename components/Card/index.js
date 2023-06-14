import { Box, Checkbox, Typography, Stack } from '@mui/material';
import React from 'react';
import { ButtonDropDown } from '../ButtonDropDown'

import * as S from './styles'

const RenderCards = ({
  gridMode
}) => {
  
  const numCards = 50;

  if (gridMode) {
    return Array.from({length: numCards}).map((_, i) => (
      <Box key={i} sx={{
        ...S.gridColumnStyle,
        maxWidth: '100%',
      }}>
        <Box sx={S.boxStyle}>
          <Checkbox></Checkbox>
          <Box sx={S.inlineFrameStyle}>
            <Typography sx={S.inlineTextStyleGrid}>
              Thought Name If It Has A
              <br />
              Second Line
            </Typography>
            <ButtonDropDown />
          </Box>
        </Box>
        <Box
          sx={S.lowerStyle}>
          <Box sx={S.ImgStyleGrid}>
            <img src="/images/Icons.png" alt="icon"/>
            <Box sx={S.swithGrid}>
              <S.AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} /></Box>
          </Box>
        </Box>
      </Box>
    ))
    
  } else {
    return Array.from({length: numCards}).map((_, i) => (
      <Box key={i} sx={S.inlineCardStyle}>
          <Box sx={S.inlineFrameStyle}>
            <Checkbox></Checkbox>
            <Box sx={S.inlineFrameStyle}>
              <Typography sx={S.inlineTextStyle}>
                WorkFlow Name If It Has A
                <br />
                Second Line
              </Typography>
            </Box>
            <Box sx={S.iconBoxStyle}>
              <Box sx={S.ImgStyle}>
                <img src="/images/Icons.png" alt="icon" />
              </Box></Box>
            <Box sx={S.endFrameStyle}>
              <Stack direction="row" spacing={1} alignItems="center" marginRight={-2} >
                <S.AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
              </Stack>
              <div>
                <ButtonDropDown />
              </div>
            </Box>
          </Box>
        </Box>
    ))
  }
};

export const Card = ({
  gridMode
}) => {

  const gridContainer = S.gridContainerStyle(gridMode)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px 0px 0px',
        gap: '10px',
        width: '100%',
      }}>
      {gridMode ? (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          <RenderCards />
        </Box>
      ) : (
        <Box
          sx={{
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            ...gridContainer
          }}>
          <RenderCards />
        </Box>
      )}
    </Box>
  );
};
