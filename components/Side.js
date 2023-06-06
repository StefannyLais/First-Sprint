import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SignalCellularAltRoundedIcon from '@mui/icons-material/SignalCellularAltRounded';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import Image from 'next/image';


import { SvgIcon } from '@mui/material';

const Side = () => {
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        width: '70px',
        height: '1269',
        border: '1px solid #EAECF0 ',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px',
          width: '70px',
          height: '67px',
          background: '#FFFFFF',
          border: '1px solid #EAECF0',
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,
        }}
      >
        <div>
          <img
            src="/images/Union.png"
            style={{
              width: '25px',
              height: '25px',
              color: '#306CFE',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }} /></div>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0px',
          gap: '20px',
          width: '70px',
          height: 'calc(100% - 70px - 260px)',
          background: '#FFFFFF',
          flex: 'none',
          order: 1,
          alignSelf: 'stretch',
          flexGrow: 0,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="Chat"
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '3.77778px',
            color:'#667085'
          }}>
          <HomeOutlinedIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="Chat"
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '3.77778px',
            color:'#667085'
          }}>
          <SignalCellularAltRoundedIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="Chat"
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '3.77778px',
            bgcolor: 'rgba(48, 108, 254, 0.05);',
            color:'#306CFE'
          }}>
          <LayersRoundedIcon />
        </IconButton>
        <IconButton
          color="#306CFE0D"
          aria-label="Chat"
          sx={{
            width: '40px',
            height: '40px',
            borderRadius: '3.77778px',
            color:'#667085'
          }}>
          <GroupAddOutlinedIcon />
        </IconButton>
</Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0px 0px 20px',
          width: '70px',
          height: '260px',
          flex: 'none',
          background: '#FFFFFF',
          paddingTop: '155px',
          order: 1,
          alignSelf: 'stretch',
          flexGrow: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '60px',
            padding: '0px',
            width: '70px',
            height: '120px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >   <Image src="/images/FooterSVG.svg" alt="/" width={15} height={15} style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          padding:"12px",
          gap:"105px",
          width:"30px",
          height:"30px",
          borderRadius:"6px",
          flex:"none",
          order:'1',
          flexGrow:'0',
        }}/>
        <Image src="/images/Settings.png" alt="/" width={15} height={15} style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"center",
          alignItems:"center",
          padding:"12px",
          gap:"105px",
          width:"30px",
          height:"30px",
          borderRadius:"6px",
          flex:"none",
          order:'1',
          flexGrow:'0',
        }}/>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0px',
              width: '35px',
              height: '35px',
              background: 'url(olivia-rhye_adobespark), #C7B9DA',
              borderRadius: '200px',
              flex: 'none',
              order: 5,
              alignSelf: 'center',
              flexGrow: 0,

            }}
          >
            <IconButton
              color="inherit"
              aria-label="avatar"
              sx={{
                width: '100%',
                height: '100%',
                padding: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '200px',
                border: 'none',
                '&:hover': {
                  backgroundColor: 'red',
                },
              }}
            ></IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Side;
