export const menuItemStyles = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#344054',
}
export const textStyles = {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '24px',
  color: '#2459DB',
  padding: '8px 12px',
}
export const itemStyles = {
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

export const numberStyles = {
  width: '14px',
  height: '20px',
  color: '#98A2B3',
  fontSize: '12px',
  marginLeft: 'auto',
}

export const containerBox = {
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
}

export const subContainerBox = {
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
}

export const isOpenContainer = {
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
  boxShadow:
    '0px 7.95px 10.6px -2.65px rgba(16, 24, 40, 0.08), 0px 2.65px 3.975px -1.325px rgba(16, 24, 40, 0.03)',
}
