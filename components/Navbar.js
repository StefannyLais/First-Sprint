import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const Navbar = () => {


  return (
    <Box display="flex" flexDirection="row" >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        padding={0}
        gap={20}
        width={339}
        height={38}
        flexShrink={0}
        order={0}
        flexGrow={0}
        position="absolute"
        marginLeft="20px"
        
      >

<Box width={339} height={38} display="flex" alignItems="center">
  <Button
    style={{
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px 16px',
      gap: '8px',
      width: '81px',
      height: '38px',
      background: '#FFFFFF',
      border: '1px solid #D0D5DD',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      borderRadius: '5px',
    }}
  >
        <Box
          className="icon-container"
          style={{
            position: 'relative',
            width: '6.56px',
            height: '6px',
            left: '33.33%',
            right: '35.79%',
            top: '25%',
            bottom: '25%',
            marginBottom:'22px',
            marginLeft:'-19px'
            
          }}
        >
          <ArrowBackIosIcon className="icon" style={{ color: 'grey', fontSize:'12px' }} />
        </Box>
    <Typography
      variant="body1"
      style={{
        width: '34px',
        height: '20px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#475467',
        textTransform: 'none',
        order: 2, 
        marginLeft:'12px',
        marginTop:'3px'
      }}
    >
      Back
    </Typography>
  </Button>
  <Typography
        variant="body1"
        component="span"
        sx={{
          width: 91,
          height: 17,
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '17px',
          color: '#6D7287',
          flex: 'none',
          order: 0,
          flexGrow: 0,
          marginLeft:'20px',
          marginTop:'3px'
        }}
      >
        Project Name
      </Typography>
      <Typography
        variant="body1"
        component="span"
        sx={{
          width: 9,
          height: 20,
          fontFamily: 'Overpass',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 16,
          lineHeight: '20px',
          color: '#6D7287',
          opacity: 0.3,
          flex: 'none',
          order: 1,
          flexGrow: 0,
          marginTop:'3px'
        }}
      >
        /
      </Typography>
      <Typography
        variant="body1"
        component="span"
        sx={{
          width: 122,
          height: 17,
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '17px',
          color: '#101828',
          flex: 'none',
          order: 2,
          flexGrow: 0,
          marginTop:'3px'
        }}
      >
        Recent Workflows
      </Typography>





  
</Box>


















      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        padding={0}
        gap={12}
        width={587.78}
        height={40}
        flexShrink={0}
        order={1}
        alignSelf="stretch"
        flexGrow={0}
        bgcolor="white"
        marginLeft={96}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Typography
            width={50}
            height={20}
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight={600}
            fontSize={14}
            lineHeight="20px"
            textTransform="capitalize"
            color="#344054"
          >
            Sortby
          </Typography>
          <Image src="/images/Activity.png" alt="/" width={113} height={36} style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
            borderRadius: '5px',
            flex: 'none',
            order: 1,
            flexGrow: 0
          }} />
          <Image src="/images/AllTime.png" alt="/" width={115} height={36}
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              background: '#FFFFFF',
              boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
              borderRadius: '5px',
              flex: 'none',
              order: 1,
              flexGrow: 0
            }} />
          <Image src="/images/Filters.png" width={103} height={36} style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
            borderRadius: '5px',
            flex: 'none',
            order: 1,
            flexGrow: 0
          }} />
          <Image src="/images/NewWorkflow.png" width={158.78} height={36} style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '9.69px',
            width: '158.78px',
            height: '36px',
            background: '#306CFE',
            boxShadow: '0px 1.21068px 2.42137px rgba(16, 24, 40, 0.05)',
            borderRadius: '5px',
            flex: 'none',
            order: 3,
            flexGrow: 0,
            objectFit: 'contain',
          }} />
        </div>
      </Box>
    </Box>
  );
};

export default Navbar;
