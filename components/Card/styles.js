import styled from "@emotion/styled";
import { Switch } from "@mui/material";

export const inlineCardStyle = {
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
export const gridColumnStyle = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  background: '#FFFFFF',
  border: '1px solid #EAECF0',
  borderRadius: '8px',
};


export const inlineFrameStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '20px',
  width: '100%',
  height: '100%',
  justifyContent: 'space-between'
};
export const inlineTextStyle = {
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
export const inlineTextStyleGrid = {
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
export const iconBoxStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '110px',
  height: '32px',


};
export const ImgStyle = {
  display: 'flex',
  alignItems: 'center',

};

export const endFrameStyle = {
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


export const boxStyle = {
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
export const lowerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '20px',
  width: '342px',
  height: '72px',
  filter: 'drop-shadow(0px 1px 5px rgba(16, 24, 40, 0.02))',
};
export const ImgStyleGrid = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '0',
  width: '110px',
  height: '32px',
  marginTop: '14px',
  marginLeft: '22px'
};
export const swithGrid = {
  marginLeft: '160px',
  marginTop: '14px'
}



export function gridContainerStyle(gridMode){

  return {
    overflowY: 'scroll',
    height: "95%",
    display: 'grid',
    gap: '10px',
    width: '100%',
  
    gridTemplateColumns: gridMode ? 'repeat(3, 1fr)' : '1fr', // Single column for inline mode
  }

};


export const AntSwitch = styled(Switch)(({ theme }) => ({
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
        backgroundColor: theme.palette?.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 14,
    borderRadius: 6,
    transition: theme.transitions?.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette?.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));