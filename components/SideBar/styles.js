export const Container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '70px',
  left: '0px',
  top: '0.02px',
  background: '#FFFFFF',
  borderRight: '1px solid #EAECF0',
  '@media (max-width: 600px)': {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
  },
}

export const ContainerSub = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  width: '100%',
  height: '330px',
}

export const ContainerImage = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  width: '70px',
  height: '70px',
  background: '#FFFFFF',
  borderBottom: '1px solid #EAECF0',
  '@media (max-width: 600px)': {
    width: '100%',
    height: 'auto',
  },
}

export const ContainerIconButton = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  width: '70px',
  height: '260px',
}

export const IconButtonStyles = {
  width: '35px',
  height: '35px',
  padding: '0',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '15px',
  marginBottom: '10px',
  '@media (max-width: 600px)': {
    width: '30px',
    height: '30px',
  },
}
