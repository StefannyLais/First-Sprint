import { Box, Checkbox, Typography, Stack } from '@mui/material';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useGrid } from "../hooks/gridMode"
import { ButtonDropDown } from './ButtonDropDown'

import styles from './styles.module.css'

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 18,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 3,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(14px)',
      position: 'absolute',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 14,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
const Card = ({
  gridMode
}) => {

  const renderCards = () => {
    const cards = [];
    const numCards = 50;

    const inlineCardStyle = {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '20px 24px',
      gap: '20px',
      background: '#FFFFFF',
      border: '1px solid #EAECF0',
      boxShadow: '0px 1px 5px rgba(16, 24, 40, 0.02)',
      borderRadius: '8px',


    };
    const gridColumnStyle = {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      background: '#FFFFFF',
      border: '1px solid #EAECF0',
      borderRadius: '8px',
    };


    const inlineFrameStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '20px',
      width: '100%',
      height: '100%',
      justifyContent: 'space-between'
    };
    const inlineTextStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '8px',
      height: '34px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      textTransform: 'capitalize',
      color: '#101828',

    };
    const inlineTextStyleGrid = {
      height: '34px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '17px',
      textTransform: 'capitalize',
      color: '#1D2939',
      marginLeft: '-15px',
    };
    const iconBoxStyle = {
      display: 'flex',
      flexDirection: 'row',
      width: '110px',
      height: '32px',


    };
    const ImgStyle = {
      display: 'flex',
      alignItems: 'center',

    };

    const endFrameStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '0px',
      gap: '18px',
      width: '102px',
      height: '40px',
      marginLeft: 'auto',

    };

  
    const boxStyle = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '20px 20px 0',
      gap: '20px',
      isolation: 'isolate',
      width: '344.33px',
      height: '54px',
      filter: 'drop-shadow(0px 1px 5px rgba(16, 24, 40, 0.02))',
    };
    const lowerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '20px',
      width: '342px',
      height: '72px',
      filter: 'drop-shadow(0px 1px 5px rgba(16, 24, 40, 0.02))',
    };
    const ImgStyleGrid = {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '0',
      width: '110px',
      height: '32px',
      marginTop: '14px',
      marginLeft: '22px'
    };
    const swithGrid = {
      marginLeft: '160px',
      marginTop: '14px'
    }


    if (gridMode) {
      for (let i = 0; i < numCards; i++) {
        cards.push(
          <Box key={i} sx={{
            ...gridColumnStyle,
            maxWidth: '100%',
          }}>
            <Box sx={boxStyle}>
              <Checkbox></Checkbox>
              <Box sx={inlineFrameStyle}>
                <Typography sx={inlineTextStyleGrid}>
                  Thought Name If It Has A
                  <br />
                  Second Line
                </Typography>
                <ButtonDropDown />
              </Box>
            </Box>
            <Box
              sx={lowerStyle}>
              <Box sx={ImgStyleGrid}>
                <img src="/images/Icons.png"></img>
                <Box sx={swithGrid}>
                  <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} /></Box>
              </Box>
            </Box>
          </Box>
        );
      }
    } else {
      for (let i = 0; i < numCards; i++) {
        cards.push(
          <Box key={i} sx={inlineCardStyle}>
            <Box sx={inlineFrameStyle}>
              <Checkbox></Checkbox>
              <Box sx={inlineFrameStyle}>
                <Typography sx={inlineTextStyle}>
                  WorkFlow Name If It Has A
                  <br />
                  Second Line
                </Typography>
              </Box>
              <Box sx={iconBoxStyle}>
                <Box sx={ImgStyle}>
                  <img src="/images/Icons.png"></img>
                </Box></Box>
              <Box sx={endFrameStyle}>
                <Stack direction="row" spacing={1} alignItems="center" marginRight={-2} >
                  <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </Stack>
                <div>
                  <ButtonDropDown />
                </div>
              </Box>
            </Box>
          </Box>
        );
      }
    }

    return cards;
  };

  const gridContainerStyle = {
    overflowY: 'scroll',
    height: "95%",
    display: 'grid',
    gap: '10px',
    width: '100%',

    gridTemplateColumns: gridMode ? 'repeat(3, 1fr)' : '1fr', // Single column for inline mode
  };
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
          {renderCards()}
        </Box>
      ) : (
        <Box
          sx={{
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            ...gridContainerStyle,
          }}>
          {renderCards()}
        </Box>
      )}
    </Box>
  );
};

export default Card;